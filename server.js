// ... (keep all the previous imports and setup)

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.post("/api/getColleges", (req, res) => {
    // ... (keep your existing endpoint implementation)
});

// Important: Add this catch-all route before the wildcard route
app.get('/api', (req, res) => {
    res.status(200).json({ message: "API is working" });
});

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ... (keep the rest of the server.js)