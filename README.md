# 🎯 College Admission Predictor - JEE Rank Based Analysis

*Live prediction interface showing college admission chances*

## 🌟 Overview

A data-driven web application that predicts IIIT/NIT admission probabilities using **real 2024 JoSAA counseling data**. The system helps JEE aspirants estimate their college options based on:

- JEE Main/Advanced rank
- Category (General/OBC/SC/ST)
- Gender-specific cutoff trends
- Historical round-wise admission patterns

**Live Demo:** [https://college-predictor-2cqt.onrender.com](https://college-predictor-2cqt.onrender.com)

## 🚀 Key Features

### 📊 Intelligent Prediction Engine
- **Dual-rank analysis** for reserved categories
  - Subcategory rank for Rounds 1-5
  - Main rank for Spot Rounds (SR1/SR2)
- **Real-time** 2024 JoSAA data integration
- **Color-coded results** (Green = Safe, Red = Risky)

### 🖥️ User Experience
- Responsive design works on all devices
- Dynamic form with conditional fields
- Loading indicators during processing
- Clear visual representation of results

### ⚙️ Technical Highlights
- **Accurate predictions** using verified cutoff data
- **Secure database** with Aiven Cloud MySQL
- **Optimized performance** with efficient queries
- **Reliable hosting** on Render.com

## 🛠️ Technology Stack

| Component          | Technologies Used                     |
|--------------------|---------------------------------------|
| **Frontend**       | HTML5, CSS3, Vanilla JavaScript       |
| **Backend**        | Node.js, Express.js                   |
| **Database**       | MySQL (Aiven Cloud)                   |
| **Infrastructure** | Render.com (Production Hosting)       |
| **Version Control**| Git/GitHub                            |

## 🏗️ Project Structure

college-predictor/
├── public/ 
│ ├── index.html 
│ ├── script.js 
│ └── styles.css 
├── server.js 
├── package.json 
└── .env.example 
