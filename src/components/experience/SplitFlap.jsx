// A run of split-flap tiles. Once `isRunning` turns on (after `delay` ms),
// every tile spins through random characters and settles on its final one,
// left to right. Each change re-mounts the tile's glyph so a short CSS flip
// plays. With reduced motion the final text shows immediately.
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { flapFrame, settleFrames } from './board';

const FRAME_MS = 55;

/**
 * @param {{ text: string, isRunning: boolean, isStatic?: boolean, delay?: number, seed?: number, tone?: 'ink' | 'amber' | 'muted', className?: string }} props
 */
const SplitFlap = ({ text, isRunning, isStatic = false, delay = 0, seed = 0, tone = 'ink', className }) => {
  const settles = useMemo(() => settleFrames(text.length, seed), [text.length, seed]);
  const lastFrame = Math.max(0, ...settles);
  // before the board comes into view, tiles are blank
  const [shown, setShown] = useState(() => (isStatic ? text : ' '.repeat(text.length)));

  useEffect(() => {
    if (isStatic) {
      setShown(text);
      return undefined;
    }
    if (!isRunning) return undefined;
    let frame = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setShown(flapFrame(text, frame, settles));
        if (frame >= lastFrame) clearInterval(interval);
        frame += 1;
      }, FRAME_MS);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, isRunning, isStatic, delay, settles, lastFrame]);

  return (
    <Tiles className={className} aria-hidden="true" $tone={tone}>
      {[...shown].map((ch, i) => (
        // the key includes the character, so each change re-mounts the glyph and the flip plays
        // eslint-disable-next-line react/no-array-index-key
        <Tile key={i}>
          <Glyph key={ch} $isStatic={isStatic}>
            {ch === ' ' ? ' ' : ch}
          </Glyph>
        </Tile>
      ))}
    </Tiles>
  );
};

const TONES = {
  ink: '#ececec',
  amber: 'var(--color-amber)',
  muted: 'rgba(236, 236, 236, 0.5)',
};

const Tiles = styled.span`
  display: inline-flex;
  gap: var(--tile-gap, 2px);
  color: ${({ $tone }) => TONES[$tone]};
`;

const Tile = styled.span`
  position: relative;
  display: inline-grid;
  place-items: center;
  width: var(--tile-w, 1.05em);
  height: var(--tile-h, 1.5em);
  overflow: hidden;
  border-radius: 2px;
  background: linear-gradient(180deg, #1d1e22 0%, #1d1e22 49.5%, #131417 50.5%, #131417 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 1px 1px rgba(0, 0, 0, 0.6);
  perspective: 120px;

  /* the hinge between the two flaps */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.75);
  }
`;

const Glyph = styled.span`
  font-family: var(--font-condensed);
  font-weight: 700;
  font-size: var(--tile-font, 0.95em);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  ${({ $isStatic }) => ($isStatic ? '' : 'animation: flap 90ms ease-out;')}
  transform-origin: 50% 50%;

  @keyframes flap {
    from { transform: rotateX(-80deg); opacity: 0.4; }
    to { transform: rotateX(0deg); opacity: 1; }
  }
`;

export default SplitFlap;
