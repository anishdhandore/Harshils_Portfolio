// Date math for the experience section: month arithmetic and role durations.

const YEAR_MONTH = /^(\d{4})-(\d{2})$/;

const parse = (ym) => {
  const match = YEAR_MONTH.exec(ym);
  if (!match) throw new RangeError(`Expected a YYYY-MM date, got "${ym}"`);
  return { year: Number(match[1]), month: Number(match[2]) - 1 };
};

const toYearMonth = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

/** Whole months from `origin` to `ym` (both YYYY-MM). */
export const monthIndex = (ym, origin) => {
  const a = parse(origin);
  const b = parse(ym);
  return (b.year - a.year) * 12 + (b.month - a.month);
};

/** "2 yrs 8 mos" from start to end (inclusive), or to now when end is null. */
export const formatSpan = (start, end, now) => {
  const months = monthIndex(end ?? toYearMonth(now), start) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const part = (n, unit) => (n ? `${n} ${unit}${n === 1 ? '' : 's'}` : '');
  return [part(years, 'yr'), part(rest, 'mo')].filter(Boolean).join(' ') || '1 mo';
};
