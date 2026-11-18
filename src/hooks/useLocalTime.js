import { useEffect, useState } from 'react';
import { formatLocalTime } from '../lib/formatLocalTime';

const TICK_MS = 15_000;

/** Wall-clock time in `timeZone`, refreshed every 15 seconds. */
export const useLocalTime = (timeZone) => {
  const [time, setTime] = useState(() => formatLocalTime(new Date(), timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(formatLocalTime(new Date(), timeZone)), TICK_MS);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
};
