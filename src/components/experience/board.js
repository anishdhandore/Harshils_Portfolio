// Departure-board logic: flight status from a role's dates, board-style dates,
// fixed-width cells for the split-flap tiles, and the scramble that runs
// before each character settles.
import { monthIndex } from './scale';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export const FLAP_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-/';

const toYearMonth = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

/**
 * Board status for a role:
 * - current role (no end date) → ON DUTY
 * - end date still ahead (e.g. a degree in progress) → IN FLIGHT
 * - finished → LANDED
 * @param {{start: string, end: string|null}} role
 * @param {Date} now
 * @returns {'ON DUTY' | 'IN FLIGHT' | 'LANDED'}
 */
export const statusOf = ({ end }, now) => {
  if (end === null) return 'ON DUTY';
  return monthIndex(end, toYearMonth(now)) >= 0 ? 'IN FLIGHT' : 'LANDED';
};

/** "2024-09" → "SEP 24" */
export const boardDate = (ym) => `${MONTHS[Number(ym.slice(5, 7)) - 1]} ${ym.slice(2, 4)}`;

/** Upper-case `text` and pad or cut it to exactly `width` characters. */
export const cell = (text, width) => text.toUpperCase().slice(0, width).padEnd(width, ' ');

/**
 * Frame at which each character of a row settles: left to right with a
 * little jitter, so the row clatters into place rather than snapping.
 * `seed` keeps it deterministic per row.
 */
export const settleFrames = (length, seed = 0) =>
  Array.from({ length }, (_, i) => 6 + Math.round(i * 0.55) + ((i * 7 + seed * 13) % 5));

/**
 * The text shown at `frame`: settled characters show their final value,
 * the rest show a scramble character (spaces stay blank so columns read cleanly).
 */
export const flapFrame = (target, frame, settles, random = Math.random) =>
  [...target]
    .map((ch, i) => {
      if (frame >= settles[i] || ch === ' ') return ch;
      return FLAP_CHARSET[Math.floor(random() * FLAP_CHARSET.length)];
    })
    .join('');
