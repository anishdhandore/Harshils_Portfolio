// Harshil's portrait in a circular "porthole", circled by a tilted orbit with
// a small aircraft flying along it (the orbit from his HP logo). The aircraft
// passes behind his head on the far side and in front of him on the near side.
//
// Motion:
// 1. entrance: the disc scales up, the portrait rises into it, the orbit draws
// 2. idle: a slow float, and the aircraft circles continuously
// 3. pointer: the whole piece tilts in 3D toward the cursor, with the portrait
//    moving a little more than the disc for depth (mouse only)
// With reduced motion everything is static and the aircraft parks on the orbit.
import React, { useId } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { FiImage } from 'react-icons/fi';

const SIZE = 960; // intrinsic size of the square portrait
const EASE = [0.16, 1, 0.3, 1];
const MAX_TILT_DEG = 9;
const SPRING = { stiffness: 110, damping: 17, mass: 0.6 };
const ORBIT_S = 9; // seconds per lap

// Orbit geometry in a 0–100 box over the square stage
const ORBIT = { cx: 50, cy: 56, rx: 60, ry: 15, tilt: -12 };
const ORBIT_PATH = `M ${ORBIT.cx - ORBIT.rx} ${ORBIT.cy} a ${ORBIT.rx} ${ORBIT.ry} 0 1 0 ${ORBIT.rx * 2} 0 a ${ORBIT.rx} ${ORBIT.ry} 0 1 0 ${-ORBIT.rx * 2} 0`;

const disc = {
  hidden: { scale: 0.86, opacity: 0 },
  shown: { scale: 1, opacity: 1, transition: { delay: 0.25, duration: 1.2, ease: EASE } },
};

const rise = {
  hidden: { y: '9%', opacity: 0, filter: 'blur(10px)' },
  shown: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { delay: 0.45, duration: 1.3, ease: EASE } },
};

// the near arc draws on: a single dash the length of the path slides into place
const orbitIn = {
  hidden: { strokeDashoffset: 100, opacity: 0 },
  shown: {
    strokeDashoffset: 0,
    opacity: 1,
    transition: { delay: 0.9, duration: 1.4, ease: [0.65, 0, 0.35, 1], opacity: { delay: 0.9, duration: 0.2 } },
  },
};

const fadeIn = (delay) => ({
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { delay, duration: 0.6 } },
});

/** 3D tilt and parallax toward the pointer over the stage (mouse only). */
const usePointerTilt = (isEnabled) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]), SPRING);
  const portraitX = useSpring(useTransform(px, [0, 1], [-12, 12]), SPRING);
  const portraitY = useSpring(useTransform(py, [0, 1], [-8, 8]), SPRING);

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

  return {
    stage: { rotateX, rotateY },
    portrait: { x: portraitX, y: portraitY },
    onPointerMove,
    onPointerLeave,
  };
};

/**
 * One half of the orbit (and the aircraft while it's on that half).
 * `half`: 'back' renders under the portrait, 'front' over it.
 */
const OrbitHalf = ({ half, isReduced, uid }) => {
  const clipId = `orbit-${half}-${uid}`;
  const isBack = half === 'back';
  return (
    <OrbitSvg viewBox="0 0 100 100" aria-hidden="true" focusable="false" $isFront={!isBack}>
      <defs>
        <clipPath id={clipId}>
          {/* in the tilted frame: back = above the orbit's centre line */}
          <rect x="-50" y={isBack ? -100 : ORBIT.cy} width="200" height={isBack ? 100 + ORBIT.cy : 100} />
        </clipPath>
      </defs>
      <g transform={`rotate(${ORBIT.tilt} ${ORBIT.cx} ${ORBIT.cy})`}>
        <g clipPath={`url(#${clipId})`}>
          {isBack ? (
            <motion.path
              d={ORBIT_PATH}
              fill="none"
              stroke="rgba(17, 17, 17, 0.32)"
              strokeWidth={0.22}
              strokeDasharray="0.7 1.1"
              variants={fadeIn(0.9)}
            />
          ) : (
            <motion.path
              d={ORBIT_PATH}
              fill="none"
              stroke="var(--color-amber)"
              strokeWidth={0.42}
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="100 100"
              variants={orbitIn}
            />
          )}
          <motion.g variants={fadeIn(1.9)}>
            {/* the aircraft: a small swept-wing glyph pointing along +x */}
            <g>
              <path d="M 3.2 0 L -2 -2.6 L -1.1 0 L -2 2.6 Z" fill="var(--color-amber)" stroke="#111" strokeWidth="0.2" />
              {isReduced ? (
                // parked at the front-right of the orbit
                <animateMotion dur="1s" fill="freeze" rotate="auto" keyPoints="0.62;0.62" keyTimes="0;1" calcMode="linear" path={ORBIT_PATH} />
              ) : (
                <animateMotion dur={`${ORBIT_S}s`} repeatCount="indefinite" rotate="auto" path={ORBIT_PATH} />
              )}
            </g>
          </motion.g>
        </g>
      </g>
    </OrbitSvg>
  );
};

/**
 * @param {{ src?: string, alt?: string }} props
 */
const HeroPortrait = ({ src, alt = '' }) => {
  const isReduced = Boolean(useReducedMotion());
  const tilt = usePointerTilt(!isReduced);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');

  if (!src) {
    return (
      <Placeholder role="img" aria-label="Portrait placeholder">
        <FiImage aria-hidden="true" />
        <span>Portrait goes here</span>
      </Placeholder>
    );
  }

  return (
    <Figure onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
      <Float $isOn={!isReduced}>
        <Stage style={isReduced ? undefined : tilt.stage}>
          <Disc variants={disc} aria-hidden="true" />
          <OrbitHalf half="back" isReduced={isReduced} uid={uid} />
          <Portrait variants={rise} style={isReduced ? undefined : tilt.portrait}>
            <img src={src} alt={alt} width={SIZE} height={SIZE} loading="eager" fetchpriority="high" />
          </Portrait>
          <OrbitHalf half="front" isReduced={isReduced} uid={uid} />
        </Stage>
      </Float>
    </Figure>
  );
};

const Figure = styled.figure`
  display: grid;
  place-items: center;
  padding: clamp(0.5rem, 3vw, 2rem) 0;
  perspective: 1200px;
`;

/* slow float; offset periods so it never looks looped */
const Float = styled.div`
  /* the orbit spans 120% of the disc, so leave room for it on each side */
  width: min(80%, 32rem);
  ${({ $isOn }) => ($isOn ? 'animation: portrait-float 6.5s ease-in-out infinite;' : '')}

  @keyframes portrait-float {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -12px; }
  }
`;

const Stage = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  transform-style: preserve-3d;
  will-change: transform;
`;

/* the porthole: a soft machined disc with a faint drafting grid */
const Disc = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    linear-gradient(rgba(17, 17, 17, 0.045) 1px, transparent 1px) 0 0 / 8% 8%,
    linear-gradient(90deg, rgba(17, 17, 17, 0.045) 1px, transparent 1px) 0 0 / 8% 8%,
    radial-gradient(circle at 35% 30%, #f7f7f7 0%, #e2e2e2 55%, #d2d2d2 100%);
  transform: translateZ(-40px) scale(1.055); /* pushed back; scaled to keep its apparent size */
  box-shadow:
    inset 0 0 0 1px rgba(17, 17, 17, 0.08),
    inset 0 -18px 40px rgba(17, 17, 17, 0.08),
    0 40px 60px -40px rgba(17, 17, 17, 0.45);
`;

const Portrait = styled(motion.div)`
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 18px 18px rgba(17, 17, 17, 0.12));
  }
`;

const OrbitSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  /* real depth inside the 3D stage (z-index is ignored with preserve-3d) */
  transform: ${({ $isFront }) => ($isFront ? 'translateZ(30px)' : 'translateZ(-20px)')};
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-ink-soft);
  font-size: var(--text-sm);

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.5;
  }
`;

export default HeroPortrait;
