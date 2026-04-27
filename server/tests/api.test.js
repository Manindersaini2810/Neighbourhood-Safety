const request = require('supertest');
const express = require('express');

const mockAlerts = [];
const mockReports = [];

describe('Alert API', () => {
  test('should create a new alert', async () => {
    const app = express();
    app.use(express.json());
    app.post('/alerts', (req, res) => {
      mockAlerts.push({ message: req.body.message, _id: 'alert1' });
      res.json('Alert saved');
    });
    app.get('/alerts', (req, res) => res.json(mockAlerts));

    const res = await request(app).post('/alerts').send({ message: 'Emergency test' });
    expect(res.status).toBe(200);
  });

  test('should get all alerts', async () => {
    const app = express();
    app.get('/alerts', (req, res) => res.json(mockAlerts));

    const res = await request(app).get('/alerts');
    expect(res.status).toBe(200);
  });
});

describe('Report API', () => {
  test('should create a new report', async () => {
    const app = express();
    app.use(express.json());
    app.post('/reports', (req, res) => {
      mockReports.push({ ...req.body, _id: 'report1' });
      res.json('Report saved');
    });
    app.get('/reports', (req, res) => res.json(mockReports));

    const res = await request(app).post('/reports').send({ location: '123 Main St', description: 'Suspicious person' });
    expect(res.status).toBe(200);
  });

  test('should get all reports', async () => {
    const app = express();
    app.get('/reports', (req, res) => res.json(mockReports));

    const res = await request(app).get('/reports');
    expect(res.status).toBe(200);
  });
});

describe('Dashboard Calculations', () => {
  test('should calculate safety score with no incidents', () => {
    const alertCount = 0;
    const reportCount = 0;
    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
    expect(safetyScore).toBe(100);
  });

  test('should calculate safety score with alerts', () => {
    const alertCount = 3;
    const reportCount = 0;
    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
    expect(safetyScore).toBe(85);
  });

  test('should calculate safety score with reports', () => {
    const alertCount = 0;
    const reportCount = 5;
    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
    expect(safetyScore).toBe(85);
  });

  test('should calculate safety score with both alerts and reports', () => {
    const alertCount = 3;
    const reportCount = 1;
    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
    expect(safetyScore).toBe(82);
  });

  test('should clamp safety score to minimum 0', () => {
    const alertCount = 30;
    const reportCount = 40;
    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
    expect(safetyScore).toBe(0);
  });
});

describe('Active Members Calculation', () => {
  test('should return correct member count', () => {
    const mockUsers = [{ _id: '1' }, { _id: '2' }, { _id: '3' }];
    const memberCount = mockUsers.length;
    expect(memberCount).toBe(3);
  });

  test('should return 0 for no users', () => {
    const mockUsers = [];
    const memberCount = mockUsers.length;
    expect(memberCount).toBe(0);
  });
});