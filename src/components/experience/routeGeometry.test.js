import { PROFILE_BOX, legAt, profilePath, progressForLeg, routeShare, waypoints } from './routeGeometry';

describe('waypoints', () => {
  test('climbs to a higher level at every waypoint, left to right', () => {
    const points = waypoints(4);

    expect(points).toHaveLength(4);
    points.slice(1).forEach((p, i) => {
      expect(p.x).toBeGreaterThan(points[i].x);
      expect(p.y).toBeLessThan(points[i].y); // smaller y = higher on the chart
    });
  });

  test('fills the chart from the left edge to the right edge', () => {
    const points = waypoints(3);

    expect(points[0].legStart).toBe(PROFILE_BOX.left);
    expect(points[2].legEnd).toBeCloseTo(PROFILE_BOX.width - PROFILE_BOX.right);
    expect(points[2].y).toBeCloseTo(PROFILE_BOX.top);
  });

  test('rejects an empty log', () => {
    expect(() => waypoints(0)).toThrow(RangeError);
  });
});

describe('profilePath', () => {
  test('takes off from the ground and flies one climb and one level leg per waypoint', () => {
    const d = profilePath(waypoints(3));

    expect(d.startsWith(`M ${PROFILE_BOX.left} ${PROFILE_BOX.ground}`)).toBe(true);
    expect(d.match(/C /g)).toHaveLength(3);
    expect(d.match(/L /g)).toHaveLength(3);
  });
});

describe('legAt', () => {
  test('maps an x position to the leg it falls on', () => {
    const points = waypoints(3);

    expect(legAt(points[0].legStart, points)).toBe(0);
    expect(legAt(points[1].x, points)).toBe(1);
    expect(legAt(PROFILE_BOX.width, points)).toBe(2);
  });
});

describe('routeShare', () => {
  test('maps scroll progress inside the range to 0–1 and clamps outside it', () => {
    expect(routeShare(0, [0.1, 0.9])).toBe(0);
    expect(routeShare(0.5, [0.1, 0.9])).toBeCloseTo(0.5);
    expect(routeShare(1, [0.1, 0.9])).toBe(1);
  });
});

describe('progressForLeg', () => {
  test('rewinds: the newest leg comes first in the scroll, the oldest last', () => {
    const range = [0.04, 0.96];
    const targets = [0, 1, 2].map((i) => progressForLeg(i, 3, range));

    expect(targets[2]).toBeLessThan(targets[1]);
    expect(targets[1]).toBeLessThan(targets[0]);
    targets.forEach((t) => {
      expect(t).toBeGreaterThan(range[0]);
      expect(t).toBeLessThan(range[1]);
    });
  });
});
