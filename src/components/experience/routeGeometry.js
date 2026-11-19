// Geometry for the experience "flight profile": an altitude-over-distance
// chart where each role is a waypoint. The route climbs to a new, higher
// level at each waypoint, then flies level until the next one.
// Coordinates are in an SVG box of `width` × `height`.

export const PROFILE_BOX = { width: 1000, height: 225, left: 50, right: 30, top: 34, ground: 182 };
const CLIMB_SHARE = 0.4; // share of each leg spent climbing

const clamp01 = (v) => Math.min(1, Math.max(0, v));

/**
 * Waypoints for `count` roles: where each leg starts, where the climb levels
 * off (the marker), and the leg's cruise altitude.
 * @param {number} count
 * @param {typeof PROFILE_BOX} box
 */
export const waypoints = (count, box = PROFILE_BOX) => {
  if (count < 1) throw new RangeError(`A flight profile needs at least 1 waypoint, got ${count}`);
  const step = (box.width - box.left - box.right) / count;
  const rise = (box.ground - box.top) / count;
  return Array.from({ length: count }, (_, i) => {
    const legStart = box.left + i * step;
    return {
      legStart,
      legEnd: legStart + step,
      x: legStart + CLIMB_SHARE * step,
      y: box.ground - (i + 1) * rise,
    };
  });
};

/** SVG path for the whole route: a takeoff from the ground, then climb-and-level legs. */
export const profilePath = (points, box = PROFILE_BOX) => {
  let prevY = box.ground;
  const parts = [`M ${box.left} ${box.ground}`];
  points.forEach(({ legStart, legEnd, x, y }) => {
    const mid = (legStart + x) / 2;
    parts.push(`C ${mid} ${prevY} ${mid} ${y} ${x} ${y}`, `L ${legEnd} ${y}`);
    prevY = y;
  });
  return parts.join(' ');
};

/** Which leg (role) the aircraft is on, from its x position. */
export const legAt = (x, points) => {
  const i = points.findIndex(({ legEnd }) => x < legEnd);
  return i === -1 ? points.length - 1 : i;
};

/** Scroll progress (0–1) within `[start, end]` → share of the route flown (0–1). */
export const routeShare = (p, [start, end]) => clamp01((p - start) / (end - start));

/**
 * Scroll progress that puts the aircraft just past waypoint `i`, for jumping
 * to a role. The log plays back newest first, so the route is rewound: scroll
 * share 0 is the end of the route (now) and 1 is the start.
 */
export const progressForLeg = (i, count, [start, end]) => {
  const position = (i + CLIMB_SHARE + 0.08) / count; // share of the route, from the start
  return start + (1 - position) * (end - start);
};
