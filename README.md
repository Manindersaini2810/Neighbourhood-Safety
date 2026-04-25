# Neighbourhood Safety & Support System

A full-stack web application for neighbourhood safety monitoring, emergency alerting, and suspicious activity reporting.

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Platform:** Windows/Mac/Linux

## Project Structure

```
Neighbourhood-Safety/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main app with Dashboard, Emergency, Report pages
│   │   ├── Admin.js       # Admin panel
│   │   ├── Resident.js    # Resident panel
│   │   ├── Login.js       # Login page
│   │   ├── Register.js   # Registration page
│   │   └── components/
│   │       └── Navbar.js  # Navigation bar
│   └── package.json
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── models/
│   │   ├── User.js       # User model (email, password, role)
│   │   ├── Alert.js      # Alert model (message, time)
│   │   └── Report.js    # Report model (location, description, time)
│   ├── routes/
│   │   ├── auth.js       # Auth routes (register, login)
│   │   ├── alert.js     # Alert routes (CRUD)
│   │   ├── report.js   # Report routes (CRUD)
│   │   └── stats.js    # Stats route (dashboard calculations)
│   └── package.json
└── README.md
```

## Features

- **Emergency Alert** - Send instant alerts to all neighbours
- **Report Suspicious Activity** - Submit reports with location and description
- **Dashboard** - Real-time safety overview with metrics
- **User Roles** - Admin and Resident authentication

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/register` | POST | Register new user |
| `/auth/login` | POST | User login |
| `/auth` | GET | Get all users |
| `/alerts` | GET/POST | Get/create alerts |
| `/alerts/:id` | DELETE | Delete alert |
| `/reports` | GET/POST | Get/create reports |
| `/reports/:id` | DELETE | Delete report |
| `/stats/dashboard` | GET | Get dashboard stats |

## Dashboard Calculations

### Active Members
```javascript
Active Members = Total User count from database
```

### Safety Score
```javascript
Safety Score = 100 - (alertsLast7Days × 5) - (reportsLast7Days × 3)
```
- Each emergency alert in last 7 days: -5 points
- Each suspicious report in last 7 days: -3 points
- Score clamped between 0-100%

**Example:**
- 0 alerts, 0 reports = 100% (Excellent)
- 3 alerts, 1 report = 100 - 15 - 3 = 82% (Good)

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (running locally on port 27017)

### Installation

1. Install server dependencies:
```bash
cd server
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
```

### Running the Application

1. Start MongoDB:
```bash
mongod
```

2. Start backend server:
```bash
cd server
node server.js
```
Server runs on http://localhost:5000

3. Start frontend (in new terminal):
```bash
cd client
npm start
```
Client runs on http://localhost:3000

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/emergency` | Emergency Alert |
| `/report` | Report Suspicious Activity |
| `/dashboard` | Dashboard |
| `/login` | Login |
| `/register` | Register |
| `/admin` | Admin Panel |
| `/resident` | Resident Panel |

## Color Palette

- Primary: `#35858E` (Teal)
- Secondary: `#7DA78C` (Sage Green)
- Accent: `#C2D099` (Light Green)
- Light: `#E6EEC9` (Cream)