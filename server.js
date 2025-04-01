require('dotenv').config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL");
});

app.post("/getColleges", (req, res) => {
    const { gender, category, rank, subcategoryRank } = req.body;
    const tableName = `${gender}_${category}`;
    
    const query = `SELECT college_name, branch_name, round_1, round_2, round_3, round_4, round_5, sr_1, sr_2 FROM ${tableName}`;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database query failed" });
        }
        
        const processedData = results.map(row => {
            // For General category, use main rank for all rounds
            const effectiveRank = category === "General" ? rank : subcategoryRank;
            
            return {
                college: row.college_name,
                branch: row.branch_name,
                rounds: [
                    { round: "Round 1", value: row.round_1, color: row.round_1 >= effectiveRank ? "green" : "red" },
                    { round: "Round 2", value: row.round_2, color: row.round_2 >= effectiveRank ? "green" : "red" },
                    { round: "Round 3", value: row.round_3, color: row.round_3 >= effectiveRank ? "green" : "red" },
                    { round: "Round 4", value: row.round_4, color: row.round_4 >= effectiveRank ? "green" : "red" },
                    { round: "Round 5", value: row.round_5, color: row.round_5 >= effectiveRank ? "green" : "red" },
                    { round: "SR 1", value: row.sr_1, color: row.sr_1 >= rank ? "green" : "red" },
                    { round: "SR 2", value: row.sr_2, color: row.sr_2 >= rank ? "green" : "red" }
                ],
                last_rank: Math.max(row.round_1, row.round_2, row.round_3, row.round_4, row.round_5, row.sr_1, row.sr_2)
            };
        });

        res.json(processedData);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});