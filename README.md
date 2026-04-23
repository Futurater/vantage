# Vantage — Modern Trading Platform & AI Advisor

Welcome to **Vantage** — a comprehensive full-stack trading application featuring a sleek dark-themed "Blue-Black Glassmorphism" UI, dynamic real-time market data simulation, and a powerful AI Stock Advisor built on Google's Generative AI.

## 🌟 Overview & State of the Project

The application has been extensively modernized into a premium finance platform with four major components seamlessly working together. The frontend features real placeholder pictures and polished visuals, the dashboard simulates real-time data ticks for an immersive experience, and the ecosystem is supported by an AI agent that recommends stock trades interactively.

### 🏛️ Architecture Overview

The platform uses a microservices-inspired architecture spanning Node.js, React, and Python, communicating over REST APIs.

1. **Frontend (`/frontend`) - Marketing & Landing**
   - **Stack**: React, Bootstrap, Custom CSS.
   - **Role**: Serves the sleek landing pages (Home, About, Pricing, Products, Support).
   - **Features**: Beautiful layout with Unsplash stock images integrated. High-conversion UI designed with smooth animations.

2. **Dashboard (`/dashboard`) - Trading Platform**
   - **Stack**: React, Material UI, Chart.js, Custom Glassmorphism CSS.
   - **Role**: The core user interface for trading. Displays Holdings, Positions, and Orders.
   - **Features**: 
     - Live simulated stock ticks in the Watchlist components! Prices fluctuate in real-time.
     - Dark-themed glass UI with blurred backdrops and crisp borders.
     - **AI Advisor Panel**: A slide-out panel that communicates with the `stock-advisor-adk` backend to provide real-time suggestions using Gemini AI.

3. **Backend API (`/backend`) - Core Trading Service**
   - **Stack**: Node.js, Express, MongoDB (Mongoose).
   - **Role**: Manages the persistent state of the user's trades. Provides REST endpoints to query and update Holdings, Orders, and Positions.
   - **Data**: Enforces database schemas for strict trading data consistency.

4. **AI Stock Advisor ADK (`/stock-advisor-adk`) - Intelligent Agent**
   - **Stack**: Python, Flask, Google Generative AI (Gemini).
   - **Role**: A standalone AI microservice that takes a stock symbol (e.g., RELIANCE) and queries the Gemini LLM for market sentiment, giving a Buy/Hold/Sell recommendation with confidence scores.
   - **Architecture**: Bound to the Dashboard via REST POST `/analyze`. Runs locally or on Google Cloud Run.

---

## 🚀 Quick Start & Deployment

### Prerequisites
- Node.js (v16+) and modern `npm`
- Python 3.9+ (For the AI Advisor)
- MongoDB instance (Atlas or local)
- Google API Key (for Gemini)

### Step 1: Start the Core Backend
```bash
cd backend
npm install
npm start
```
*Make sure to configure `.env` with your `MONGO_URI` and `PORT`.*

### Step 2: Run the AI Advisor Service
```bash
cd stock-advisor-adk
python -m venv venv
# Activate venv depending on your OS
pip install -r requirements.txt
set GOOGLE_API_KEY=your_key_here
python main.py
```
*Service runs on `http://localhost:8080` (or `7321` based on your dashboard configuration).*

### Step 3: Run the Dashboard
```bash
cd dashboard
npm install
npm start
```
*Live trading simulator will start alongside the UI! You can access the AI Agent from the sparkles button in the Watchlist.*

### Step 4: Run the Landing Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🎨 Design & Assets

The UI utilizes a "Blue-Black Glassmorphism" system. All imagery has been verified and wired to high-quality external placeholders, ensuring all pictures are rendering correctly out of the box. 

Stock data updates dynamically to give the illusion of an active market with `setInterval` ticks inside the dashboard's react state!

## 📜 License
Provided for educational and exploratory purposes. Please do not use actual financial data for live advice via AI.
