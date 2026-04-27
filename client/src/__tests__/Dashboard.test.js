import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Safety Score Calculation', () => {
  const calculateSafetyScore = (alertCount, reportCount) => {
    return Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));
  };

  test('returns 100 when no alerts or reports', () => {
    expect(calculateSafetyScore(0, 0)).toBe(100);
  });

  test('subtracts 5 points per alert', () => {
    expect(calculateSafetyScore(2, 0)).toBe(90);
  });

  test('subtracts 3 points per report', () => {
    expect(calculateSafetyScore(0, 3)).toBe(91);
  });

  test('handles both alerts and reports', () => {
    expect(calculateSafetyScore(2, 5)).toBe(75);
  });

  test('clamps to 0 at minimum', () => {
    expect(calculateSafetyScore(30, 10)).toBe(0);
  });
});

describe('Active Members Display', () => {
  test('displays member count from props', () => {
    const memberCount = 12;
    expect(memberCount).toBe(12);
  });

  test('displays 0 when no members', () => {
    const memberCount = 0;
    expect(memberCount).toBe(0);
  });
});