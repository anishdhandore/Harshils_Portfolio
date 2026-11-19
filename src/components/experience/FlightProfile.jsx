// The route chart: altitude bands, a dashed planned route, the flown route
// drawn in amber as you scroll, waypoint markers with their idents, and the
// aircraft riding the tip of the flown route. Positions are written straight
// to SVG attributes on scroll (no re-render per frame).
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMotionValueEvent } from 'motion/react';
import { PROFILE_BOX, legAt, profilePath, waypoints } from './routeGeometry';

const BOX = PROFILE_BOX;
const LEVELS = [0.25, 0.5, 0.75, 1];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/** "2024-09" → "SEP ’24" */
const legDate = (ym) => `${MONTHS[Number(ym.slice(5, 7)) - 1]} ’${ym.slice(2, 4)}`;

/**
 * @param {{
 *   roles: {code: string, start: string}[],
 *   share: import('motion/react').MotionValue<number>,  route flown, 0–1
 *   active: number,
 *   isStatic: boolean,
 *   onLeg: (i: number) => void,
 *   onSelect: (i: number) => void,
 * }} props
 */
const FlightProfile = ({ roles, share, active, isStatic, onLeg, onSelect }) => {
  const points = waypoints(roles.length);
  const d = profilePath(points);
  const flownRef = useRef(null);
  const craftRef = useRef(null);

  // place the aircraft and the flown line for a share of the route
  const fly = (t) => {
    const path = flownRef.current;
    const craft = craftRef.current;
    if (!path || !craft || typeof path.getTotalLength !== 'function') return;
    const total = path.getTotalLength();
    const at = Math.max(0.01, Math.min(total - 0.01, t * total));
    if (!isStatic) path.style.strokeDashoffset = String(total - at);
    const p = path.getPointAtLength(at);
    const q = path.getPointAtLength(Math.min(total, at + 1));
    const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    if (!isStatic) craft.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle})`);
    onLeg(legAt(p.x, points));
  };

  useMotionValueEvent(share, 'change', fly);

  useEffect(() => {
    const path = flownRef.current;
    if (path && typeof path.getTotalLength === 'function') {
      const total = path.getTotalLength();
      path.style.strokeDasharray = isStatic ? 'none' : String(total);
    }
    fly(share.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatic]);

  // with reduced motion the route is drawn in full and the aircraft parks on the active waypoint
  const parked = points[active];

  return (
    <Chart>
      <svg viewBox={`0 0 ${BOX.width} ${BOX.height}`} aria-hidden="true" focusable="false">
        {/* flight levels */}
        {LEVELS.map((f) => {
          const y = BOX.ground - f * (BOX.ground - BOX.top);
          return (
            <g key={f} className="level">
              <line x1={BOX.left} x2={BOX.width - BOX.right} y1={y} y2={y} />
              <text x={BOX.left - 10} y={y} textAnchor="end" dominantBaseline="middle">
                FL{String(Math.round(f * 400)).padStart(3, '0')}
              </text>
            </g>
          );
        })}
        <line className="ground" x1={BOX.left} x2={BOX.width - BOX.right} y1={BOX.ground} y2={BOX.ground} />

        {/* leg dividers and dates */}
        {points.map(({ legStart }, i) => (
          <g key={roles[i].code} className="leg">
            <line x1={legStart} x2={legStart} y1={BOX.top - 10} y2={BOX.ground + 6} />
            <text x={legStart + 6} y={BOX.ground + 24}>
              {legDate(roles[i].start)}
            </text>
          </g>
        ))}

        <path className="planned" d={d} />
        <path ref={flownRef} className="flown" d={d} />

        {/* waypoints: a diamond and the ident above it */}
        {points.map(({ x, y }, i) => (
          <g key={roles[i].code} className="wpt" data-state={i < active ? 'past' : i === active ? 'active' : 'ahead'}>
            <rect x={x - 6} y={y - 6} width={12} height={12} transform={`rotate(45 ${x} ${y})`} />
            <text x={x} y={y - 18} textAnchor="middle">
              {roles[i].code}
            </text>
          </g>
        ))}

        {/* the aircraft: a swept-wing glyph pointing along +x */}
        <g ref={craftRef} transform={isStatic ? `translate(${parked.x} ${parked.y})` : undefined} className="craft">
          <path d="M 14 0 L -9 -10 L -4 0 L -9 10 Z" />
        </g>
      </svg>

      {/* click targets over the waypoints, for jumping to a role */}
      {points.map(({ x, y }, i) => (
        <WptButton
          key={roles[i].code}
          type="button"
          style={{ left: `${(x / BOX.width) * 100}%`, top: `${(y / BOX.height) * 100}%` }}
          aria-label={`Go to ${roles[i].code}: ${roles[i].role}`}
          aria-current={i === active ? 'step' : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </Chart>
  );
};

const Chart = styled.div`
  position: relative;

  svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
    font-family: var(--font-body);
  }

  .level line {
    stroke: rgba(236, 236, 236, 0.07);
    stroke-width: 1;
  }

  .level text,
  .leg text {
    fill: rgba(236, 236, 236, 0.38);
    font-size: 11px;
    letter-spacing: 0.08em;
  }

  .ground {
    stroke: rgba(236, 236, 236, 0.35);
    stroke-width: 1;
  }

  .leg line {
    stroke: rgba(236, 236, 236, 0.09);
    stroke-dasharray: 2 4;
  }

  .planned {
    fill: none;
    stroke: rgba(236, 236, 236, 0.22);
    stroke-width: 1.5;
    stroke-dasharray: 4 6;
  }

  .flown {
    fill: none;
    stroke: var(--color-amber);
    stroke-width: 2.5;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px rgba(242, 165, 0, 0.45));
  }

  .wpt rect {
    fill: #0b0c0e;
    stroke: rgba(236, 236, 236, 0.4);
    stroke-width: 1.5;
    transition: fill var(--duration-normal) ease, stroke var(--duration-normal) ease;
  }

  .wpt text {
    fill: rgba(236, 236, 236, 0.45);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    transition: fill var(--duration-normal) ease;
  }

  .wpt[data-state='past'] rect {
    fill: var(--color-amber);
    stroke: var(--color-amber);
  }

  .wpt[data-state='active'] rect {
    fill: #0b0c0e;
    stroke: var(--color-amber);
    stroke-width: 2.5;
  }

  .wpt[data-state='active'] text,
  .wpt[data-state='past'] text {
    fill: #ececec;
  }

  .craft path {
    fill: #ececec;
    stroke: #0b0c0e;
    stroke-width: 1.5;
  }

  @media (max-width: 640px) {
    .level text,
    .leg text,
    .wpt text {
      display: none;
    }
  }
`;

/* invisible hit area centred on each waypoint */
const WptButton = styled.button`
  position: absolute;
  width: 36px;
  height: 36px;
  margin: -18px 0 0 -18px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: rgba(242, 165, 0, 0.14);
  }

  &:focus-visible {
    outline: 2px solid var(--color-amber);
    outline-offset: 2px;
  }
`;

export default FlightProfile;
