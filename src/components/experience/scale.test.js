import { formatSpan, monthIndex } from './scale';

const ORIGIN = '2021-08';
const NOW = new Date(2026, 10, 6); // Nov 2026

describe('monthIndex', () => {
  test('counts whole months from the origin', () => {
    expect(monthIndex('2021-08', ORIGIN)).toBe(0);
    expect(monthIndex('2022-01', ORIGIN)).toBe(5);
    expect(monthIndex('2025-02', ORIGIN)).toBe(42);
  });

  test('rejects malformed dates', () => {
    expect(() => monthIndex('Feb 2025', ORIGIN)).toThrow(/YYYY-MM/);
  });
});

describe('formatSpan', () => {
  test('formats a duration in years and months, inclusive', () => {
    expect(formatSpan('2023-03', '2023-05', NOW)).toBe('3 mos');
    expect(formatSpan('2022-01', '2024-08', NOW)).toBe('2 yrs 8 mos');
    expect(formatSpan('2025-02', null, NOW)).toBe('1 yr 10 mos');
  });
});
