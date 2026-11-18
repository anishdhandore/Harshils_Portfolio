// A cockpit attitude indicator that banks and pitches toward the pointer:
// Harshil's counterpart to the follow-eyes. The horizon card moves; the amber
// aircraft symbol stays fixed, as in a real instrument.
import React, { useEffect, useId, useRef } from 'react';
import styled from 'styled-components';
import { useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from 'motion/react';

const MAX_ROLL_DEG = 35;
const MAX_PITCH_DEG = 18;
const PX_PER_DEG = 2.2; // pitch ladder spacing in SVG units
const SPRING = { stiffness: 60, damping: 14, mass: 1 };
const R = 100; // instrument radius in SVG units

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/** Pointer position relative to the instrument, as roll/pitch targets. */
const usePointerAttitude = (ref, isEnabled) => {
  const roll = useMotionValue(0);
  const pitch = useMotionValue(0);

  useEffect(() => {
    if (!isEnabled) return undefined;
    const onMove = (e) => {
      const box = ref.current?.getBoundingClientRect();
      if (!box) return;
      const nx = (e.clientX - (box.left + box.width / 2)) / (window.innerWidth / 2);
      const ny = (e.clientY - (box.top + box.height / 2)) / (window.innerHeight / 2);
      // bank toward the pointer; nose up when it's above the instrument
      roll.set(clamp(nx, -1, 1) * MAX_ROLL_DEG);
      pitch.set(clamp(-ny, -1, 1) * MAX_PITCH_DEG);
    };
    const onLeave = () => {
      roll.set(0);
      pitch.set(0);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [ref, isEnabled, roll, pitch]);

  return { roll, pitch };
};

const LADDER = [-20, -15, -10, -5, 5, 10, 15, 20];
const BANK_TICKS = [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60];

/**
 * @param {{ size?: number, className?: string }} props
 */
const AttitudeIndicator = ({ size = 200, className }) => {
  const rootRef = useRef(null);
  const isReduced = Boolean(useReducedMotion());
  const clipId = `ai-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const target = usePointerAttitude(rootRef, !isReduced);
  const roll = useSpring(target.roll, SPRING);
  const pitch = useSpring(target.pitch, SPRING);
  const horizonRef = useRef(null);
  const pointerRef = useRef(null);

  // Written straight to the SVG attributes: no re-render per frame. The
  // horizon rolls opposite to the aircraft and drops as the nose rises.
  const draw = () => {
    const r = roll.get();
    const p = pitch.get();
    horizonRef.current?.setAttribute('transform', `rotate(${(-r).toFixed(2)}) translate(0 ${(p * PX_PER_DEG).toFixed(2)})`);
    pointerRef.current?.setAttribute('transform', `rotate(${(-r).toFixed(2)})`);
  };
  useMotionValueEvent(roll, 'change', draw);
  useMotionValueEvent(pitch, 'change', draw);

  return (
    <Root ref={rootRef} className={className} style={{ width: size, height: size }} data-attitude aria-hidden="true">
      <svg viewBox={`${-R - 8} ${-R - 8} ${(R + 8) * 2} ${(R + 8) * 2}`} width="100%" height="100%">
        <defs>
          <clipPath id={clipId}>
            <circle r={R - 14} />
          </clipPath>
        </defs>

        {/* bezel */}
        <circle r={R + 6} fill="#1a1b1e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* moving horizon card */}
        <g clipPath={`url(#${clipId})`}>
          <g ref={horizonRef}>
            <rect x={-R * 2} y={-R * 3} width={R * 4} height={R * 3} fill="#2c4a63" />
            <rect x={-R * 2} y={0} width={R * 4} height={R * 3} fill="#4a3826" />
            <line x1={-R * 2} x2={R * 2} y1={0} y2={0} stroke="#ececec" strokeWidth="1.5" />
            {LADDER.map((deg) => {
              const y = -deg * PX_PER_DEG;
              const half = deg % 10 === 0 ? 22 : 11;
              return (
                <g key={deg}>
                  <line x1={-half} x2={half} y1={y} y2={y} stroke="#ececec" strokeWidth="1" opacity="0.85" />
                  {deg % 10 === 0 && (
                    <text x={half + 5} y={y} fill="#ececec" fontSize="7" dominantBaseline="middle" opacity="0.8">
                      {Math.abs(deg)}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </g>

        {/* fixed bank scale */}
        {BANK_TICKS.map((deg) => {
          const long = deg % 30 === 0;
          return (
            <line
              key={deg}
              x1={0}
              x2={0}
              y1={-(R - 2)}
              y2={-(R - (long ? 12 : 7))}
              stroke="#ececec"
              strokeWidth={long ? 1.6 : 1}
              transform={`rotate(${deg})`}
            />
          );
        })}
        {/* bank pointer turns with the horizon */}
        <path ref={pointerRef} d={`M0 ${-(R - 14)} l-5 9 h10 z`} fill="#f2a500" />

        {/* fixed aircraft symbol */}
        <g stroke="#f2a500" strokeWidth="4" strokeLinecap="square" fill="none">
          <path d="M-52 0 H-20 L-12 8" />
          <path d="M52 0 H20 L12 8" />
        </g>
        <rect x={-2.5} y={-2.5} width={5} height={5} fill="#f2a500" />
      </svg>
    </Root>
  );
};

const Root = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  svg {
    display: block;
    font-family: var(--font-body);
  }
`;

export default AttitudeIndicator;
