import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import { FiImage } from 'react-icons/fi';
import Hotspot from '../ui/Hotspot';

// Intrinsic size of the slot (4:5)
const SLOT_WIDTH = 960;
const SLOT_HEIGHT = 1200;
const EASE = [0.16, 1, 0.3, 1];

// The aircraft "flies in" once on load: a short glide from the right that
// settles into place, after the frame has wiped open
const flyIn = {
  initial: { x: '14%', y: '-4%', scale: 1.06, opacity: 0 },
  animate: { x: '0%', y: '0%', scale: 1, opacity: 1 },
  transition: { delay: 0.45, duration: 1.6, ease: EASE },
};

/**
 * Hero render on a measured grid, with Hermeus-style hotspots.
 * @param {{ src?: string, alt?: string, caption?: {index: string, label: string}, hotspots?: {id: string, x: number, y: number, title: string, body: string}[] }} props
 */
const HeroImage = ({ src, alt, caption, hotspots = [] }) => {
  const isReduced = Boolean(useReducedMotion());

  if (!src) {
    return (
      <Frame>
        <Placeholder role="img" aria-label="Aircraft placeholder">
          <FiImage aria-hidden="true" />
          <span>Aircraft render goes here</span>
        </Placeholder>
      </Frame>
    );
  }

  return (
    <Figure>
      <Frame>
        <Grid aria-hidden="true" />
        <Render
          src={src}
          alt={alt}
          width={SLOT_WIDTH}
          height={SLOT_HEIGHT}
          loading="eager"
          fetchpriority="high"
          {...(isReduced ? {} : flyIn)}
        />
        {hotspots.map((spot) => (
          <Hotspot key={spot.id} {...spot} />
        ))}
        <Corners aria-hidden="true" />
      </Frame>
      {caption && (
        <Caption>
          <span className="index">{caption.index}</span>
          {caption.label}
        </Caption>
      )}
    </Figure>
  );
};

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Frame = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  width: 100%;
  border-radius: var(--radius-card);
  overflow: hidden;
  background: radial-gradient(120% 90% at 70% 30%, #e4e4e4 0%, var(--color-surface) 60%, #cecece 100%);
`;

/* faint engineering grid behind the render */
const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(17, 17, 17, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 17, 17, 0.05) 1px, transparent 1px);
  background-size: 10% 8%;
  mask-image: radial-gradient(circle at 50% 50%, #000 40%, transparent 85%);
`;

const Render = styled(motion.img)`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0 24px 30px rgba(0, 0, 0, 0.18));
`;

/* registration brackets in each corner, like the frame of a technical drawing */
const Corners = styled.span`
  position: absolute;
  inset: 12px;
  pointer-events: none;
  --c: rgba(17, 17, 17, 0.45);
  background:
    linear-gradient(var(--c), var(--c)) top left / 14px 1px no-repeat,
    linear-gradient(var(--c), var(--c)) top left / 1px 14px no-repeat,
    linear-gradient(var(--c), var(--c)) top right / 14px 1px no-repeat,
    linear-gradient(var(--c), var(--c)) top right / 1px 14px no-repeat,
    linear-gradient(var(--c), var(--c)) bottom left / 14px 1px no-repeat,
    linear-gradient(var(--c), var(--c)) bottom left / 1px 14px no-repeat,
    linear-gradient(var(--c), var(--c)) bottom right / 14px 1px no-repeat,
    linear-gradient(var(--c), var(--c)) bottom right / 1px 14px no-repeat;
`;

const Caption = styled.figcaption`
  display: flex;
  gap: 0.9rem;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  .index {
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--color-ink-soft);
  font-size: var(--text-sm);

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.5;
  }
`;

export default HeroImage;
