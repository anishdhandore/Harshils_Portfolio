// A crisp three-blade propeller drawn over the aircraft's spinner. The source
// footage only had a motion-blurred smear, so the blades are vector: they spin
// in a disc seen almost edge-on (squashed horizontally), with a faint blur
// disc behind them. The middle of the disc is masked where the spinner cone
// sits in front of the blades. Static with reduced motion.
import React, { useId } from 'react';
import styled from 'styled-components';

// Hub position and blade length in the loop's pixel space (840 × 367)
const VIEW = { width: 840, height: 367 };
const HUB = { x: 138, y: 240 };
const RADIUS = 80;
const EDGE_ON = 0.2; // horizontal squash of the disc (viewing angle)
const SPINNER = { rx: 26, ry: 35 }; // area hidden behind the spinner cone
const SPIN_S = 0.36; // seconds per revolution
const BLADES = [0, 120, 240];

// One blade, pointing up from the hub: narrow root, wide middle, rounded tip
const BLADE_PATH = `M -4 -6 C -10 -${RADIUS * 0.45} -11 -${RADIUS * 0.8} -5 -${RADIUS} Q 0 -${RADIUS + 3} 5 -${RADIUS} C 11 -${RADIUS * 0.8} 9 -${RADIUS * 0.45} 4 -6 Z`;

/** @param {{ isStatic?: boolean }} props */
const Propeller = ({ isStatic = false }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const maskId = `prop-mask-${uid}`;
  const gradId = `prop-grad-${uid}`;

  return (
    <Svg viewBox={`0 0 ${VIEW.width} ${VIEW.height}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0f1a2e" />
          <stop offset="0.55" stopColor="#24375a" />
          <stop offset="1" stopColor="#0b1322" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={VIEW.width} height={VIEW.height}>
          <rect width={VIEW.width} height={VIEW.height} fill="#fff" />
          <ellipse cx={HUB.x - 6} cy={HUB.y} rx={SPINNER.rx} ry={SPINNER.ry} fill="#000" />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <g transform={`translate(${HUB.x} ${HUB.y}) scale(${EDGE_ON} 1)`}>
          {/* faint disc swept by the blades */}
          {!isStatic && (
            <>
              <circle r={RADIUS} fill="rgba(20, 30, 50, 0.07)" />
              <circle r={RADIUS - 1} fill="none" stroke="rgba(20, 30, 50, 0.18)" strokeWidth={2} />
            </>
          )}
          <g>
            {BLADES.map((deg) => (
              <path key={deg} d={BLADE_PATH} transform={`rotate(${deg})`} fill={`url(#${gradId})`} />
            ))}
            {!isStatic && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur={`${SPIN_S}s`}
                repeatCount="indefinite"
              />
            )}
          </g>
        </g>
      </g>
    </Svg>
  );
};

const Svg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`;

export default Propeller;
