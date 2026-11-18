// Harshil in his aircraft, cut out of the sky and flying free over the page.
// Motion, in order:
// 1. fly-in: he enters from the right, nose-first, banking, and eases to a hover
// 2. cruise: a slow bob and roll (CSS, compositor-only) with speed lines
//    streaming off the tail
// 3. the whole aircraft pitches and yaws toward the pointer (springs, mouse only)
// The light still frame paints first; the animated loop fades in once loaded.
// With reduced motion, only the still frame is shown and nothing moves.
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { FiImage } from 'react-icons/fi';

// intrinsic size of the cut-out loop
const WIDTH = 840;
const HEIGHT = 367;
const EASE = [0.16, 1, 0.3, 1];
const MAX_TILT_DEG = 8;
const TILT_SPRING = { stiffness: 90, damping: 16, mass: 0.7 };
// speed lines trail off the tail: vertical position (fraction of height), length, delay
const STREAKS = [
  { top: 0.3, length: 0.22, delay: 0 },
  { top: 0.52, length: 0.34, delay: 0.55 },
  { top: 0.64, length: 0.2, delay: 1.1 },
  { top: 0.76, length: 0.28, delay: 0.3 },
];

const flyIn = {
  hidden: { x: '38%', y: '-10%', rotate: 9, opacity: 0, scale: 0.9 },
  shown: {
    x: '0%',
    y: '0%',
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 1.9,
      ease: EASE,
      opacity: { delay: 0.3, duration: 0.5 },
    },
  },
};

/** Preload `src` and report when it's ready to show. */
const useLoaded = (src, isEnabled) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!src || !isEnabled) return undefined;
    let isCancelled = false;
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => !isCancelled && setIsLoaded(true);
    // the still frame stays up if the loop fails to load
    img.onerror = () => !isCancelled && setIsLoaded(false);
    img.src = src;
    return () => {
      isCancelled = true;
    };
  }, [src, isEnabled]);
  return isLoaded;
};

/** Pitch and yaw toward the pointer anywhere over the hero half (mouse only). */
const usePointerAttitude = (isEnabled) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]), TILT_SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT_DEG * 1.4, MAX_TILT_DEG * 1.4]), TILT_SPRING);
  // the plane drifts a little toward the pointer too
  const x = useSpring(useTransform(px, [0, 1], [-14, 14]), TILT_SPRING);
  const y = useSpring(useTransform(py, [0, 1], [-10, 10]), TILT_SPRING);

  const onPointerMove = (e) => {
    if (!isEnabled || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return { style: { rotateX, rotateY, x, y }, onPointerMove, onPointerLeave };
};

/**
 * @param {{ src?: string, still?: string, alt?: string }} props
 */
const HeroFlyer = ({ src, still, alt }) => {
  const isReduced = Boolean(useReducedMotion());
  const isLoopReady = useLoaded(src, !isReduced);
  const attitude = usePointerAttitude(!isReduced);

  if (!src && !still) {
    return (
      <Placeholder role="img" aria-label="Hero animation placeholder">
        <FiImage aria-hidden="true" />
        <span>Hero animation goes here</span>
      </Placeholder>
    );
  }

  return (
    <Airspace onPointerMove={attitude.onPointerMove} onPointerLeave={attitude.onPointerLeave}>
      <Entry variants={flyIn}>
        <Cruise $isOn={!isReduced}>
          <Attitude style={isReduced ? undefined : attitude.style}>
            {!isReduced && (
              <Streaks aria-hidden="true">
                {STREAKS.map(({ top, length, delay }) => (
                  <i
                    key={top}
                    style={{ top: `${top * 100}%`, width: `${length * 100}%`, animationDelay: `${delay}s` }}
                  />
                ))}
              </Streaks>
            )}
            <Aircraft>
              <img
                className="still"
                src={still ?? src}
                alt={alt}
                width={WIDTH}
                height={HEIGHT}
                loading="eager"
                fetchpriority="high"
              />
              {!isReduced && src && (
                <img
                  className="loop"
                  src={isLoopReady ? src : undefined}
                  alt=""
                  aria-hidden="true"
                  width={WIDTH}
                  height={HEIGHT}
                  data-ready={isLoopReady}
                />
              )}
            </Aircraft>
          </Attitude>
        </Cruise>
      </Entry>
    </Airspace>
  );
};

const Airspace = styled.figure`
  position: relative;
  display: grid;
  place-items: center;
  padding: clamp(1rem, 4vw, 3rem) 0;
  perspective: 1200px;
`;

const Entry = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: min(100%, 46rem);
`;

/* slow bob and roll; offset periods so the motion never visibly repeats */
const Cruise = styled.div`
  ${({ $isOn }) => ($isOn ? 'animation: flyer-bob 5.8s ease-in-out infinite, flyer-roll 8.3s ease-in-out infinite;' : '')}

  @keyframes flyer-bob {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -14px; }
  }

  @keyframes flyer-roll {
    0%, 100% { rotate: -1.2deg; }
    50% { rotate: 1.4deg; }
  }
`;

const Attitude = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
`;

const Aircraft = styled.div`
  position: relative;
  aspect-ratio: ${WIDTH} / ${HEIGHT};
  /* a soft shadow that follows the silhouette, not a box */
  filter: drop-shadow(0 28px 22px rgba(17, 17, 17, 0.16));

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .loop {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .loop[data-ready='true'] {
    opacity: 1;
  }
`;

/* speed lines streaming off the tail (to the right: the plane flies left) */
const Streaks = styled.div`
  position: absolute;
  left: 94%;
  top: 0;
  bottom: 0;
  width: 40%;
  pointer-events: none;

  i {
    position: absolute;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(17, 17, 17, 0.28), rgba(17, 17, 17, 0));
    transform-origin: left center;
    opacity: 0;
    animation: streak 1.6s cubic-bezier(0.3, 0, 0.2, 1) infinite;
  }

  @keyframes streak {
    0% { opacity: 0; transform: translateX(-10%) scaleX(0.2); }
    25% { opacity: 1; }
    100% { opacity: 0; transform: translateX(45%) scaleX(1); }
  }
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  aspect-ratio: 4 / 3;
  background: var(--color-surface);
  color: var(--color-ink-soft);
  font-size: var(--text-sm);

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.5;
  }
`;

export default HeroFlyer;
