College Predictor Based on JEE Rank

Overview

This project predicts college admissions based on JEE rank using real-time 2024 JoSAA Counseling data. The system is built using modern web technologies and provides an intuitive interface for students to check their potential college admissions based on their ranks.

Features

Real-time 2024 JoSAA Counseling Data

User-friendly interface built with HTML, CSS, and JavaScript

Backend powered by Node.js and Express.js

Remote MySQL database hosted on Aiven

Deployed on Render for easy access

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL (Remote database hosted on Aiven)

Deployment: Render

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js

MySQL

Steps to Run Locally

Clone the repository:

git clone https://github.com/yourusername/college-predictor.git
cd college-predictor

Install dependencies:

npm install

Configure the .env file with your database credentials:

DB_HOST=<your-aiven-host>
DB_USER=<your-db-username>
DB_PASSWORD=<your-db-password>
DB_NAME=<your-db-name>

Start the server:

npm start

Open your browser and go to:

http://localhost:3000

Deployment

This project is deployed on Render. You can access the live version here.

Future Enhancements

Implement AI-based prediction models for better accuracy

Add additional filters for branch-wise predictions

Improve UI/UX with advanced frontend frameworks

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License

This project is open-source and available under the MIT License.
