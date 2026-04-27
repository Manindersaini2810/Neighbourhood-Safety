# Neighbourhood Safety & Support System

A full-stack web application for neighbourhood safety monitoring, emergency alerting, and suspicious activity reporting.

# Tech Stack


Frontend React, React Router, Tailwind CSS 
Backend  Node.js, Express 
Database MongoDB (Mongoose) 

# Project Structure

```
Neighbourhood-Safety/
├── README.md
├── client/
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── index.js
│       ├── index.css
│       ├── App.js
│       ├── Admin.js
│       ├── Login.js
│       ├── Register.js
│       ├── Resident.js
│       └── components/
│           └── Navbar.js
└── server/
    ├── package.json
    ├── server.js
    ├── models/
    │   ├── User.js
    │   ├── Alert.js
    │   └── Report.js
    └── routes/
        ├── auth.js
        ├── alert.js
        ├── report.js
        └── stats.js
```

# Dashboard Calculations

## Active Members

```
Active Members = Total User count
```

## Safety Score

```
Safety Score = 100 - (alertsLast7Days × 5) - (reportsLast7Days × 3)
```
- Each emergency alert in last 7 days: **-5 points**
- Each suspicious report in last 7 days: **-3 points**
- Score clamped between **0-100%**


# Features

- Emergency Alert System
- Suspicious Activity Reporting
- Real-time Dashboard
- User Authentication (Admin/Resident)
- Safety Score Calculation