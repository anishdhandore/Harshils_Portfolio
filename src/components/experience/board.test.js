import { FLAP_CHARSET, boardDate, cell, flapFrame, settleFrames, statusOf } from './board';

const NOW = new Date(2026, 10, 18); // Nov 2026

describe('statusOf', () => {
  test('a role without an end date is on duty', () => {
    expect(statusOf({ start: '2026-09', end: null }, NOW)).toBe('ON DUTY');
  });

  test('a role ending later (or this month) is still in flight', () => {
    expect(statusOf({ start: '2024-09', end: '2026-12' }, NOW)).toBe('IN FLIGHT');
    expect(statusOf({ start: '2024-09', end: '2026-11' }, NOW)).toBe('IN FLIGHT');
  });

  test('a finished role has landed', () => {
    expect(statusOf({ start: '2026-06', end: '2026-08' }, NOW)).toBe('LANDED');
  });
});

describe('boardDate', () => {
  test('formats a month the way departure boards do', () => {
    expect(boardDate('2024-09')).toBe('SEP 24');
    expect(boardDate('2021-08')).toBe('AUG 21');
  });
});

describe('cell', () => {
  test('upper-cases and pads to a fixed width', () => {
    expect(cell('Bsky', 6)).toBe('BSKY  ');
  });

  test('cuts text that is too long', () => {
    expect(cell('INSTRUCTIONAL ASSISTANT', 10)).toBe('INSTRUCTIO');
  });
});

describe('settleFrames', () => {
  test('settles left to right, roughly', () => {
    const frames = settleFrames(20, 3);

    expect(frames).toHaveLength(20);
    expect(frames[19]).toBeGreaterThan(frames[0]);
    frames.forEach((f) => expect(f).toBeGreaterThanOrEqual(6));
  });

  test('is deterministic for a seed', () => {
    expect(settleFrames(10, 2)).toEqual(settleFrames(10, 2));
  });
});

describe('flapFrame', () => {
  const target = 'BSKY ON';
  const settles = [1, 2, 3, 4, 5, 6, 7];

  test('shows scramble characters before a position settles, and keeps spaces blank', () => {
    const shown = flapFrame(target, 0, settles, () => 0);

    expect(shown).toBe(`${FLAP_CHARSET[0].repeat(4)} ${FLAP_CHARSET[0].repeat(2)}`);
  });

  test('shows the final text once every position has settled', () => {
    expect(flapFrame(target, 99, settles)).toBe(target);
  });

  test('settles positions progressively', () => {
    expect(flapFrame(target, 3, settles, () => 0).slice(0, 3)).toBe('BSK');
  });
});
