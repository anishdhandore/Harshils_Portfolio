// Amber "+" callout from hermeus.com's aircraft diagrams. Hover, focus or
// click opens a small spec card; Escape or clicking elsewhere closes it.
import React, { useEffect, useId, useRef, useState } from 'react';
import styled from 'styled-components';

/**
 * @param {{ x: number, y: number, title: string, body: string }} props
 *   x, y: marker position as fractions (0–1) of the parent box
 */
const Hotspot = ({ x, y, title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardId = `hotspot-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const rootRef = useRef(null);
  // keep the card inside the frame: open away from the nearest edge, and
  // centre it under markers in the middle third
  const align = x < 1 / 3 ? 'right' : x > 2 / 3 ? 'left' : 'center';
  const opensUp = y > 0.6;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [isOpen]);

  return (
    <Root
      ref={rootRef}
      style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setIsOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setIsOpen(false)}
    >
      <Marker
        type="button"
        aria-expanded={isOpen}
        aria-controls={cardId}
        aria-label={title}
        onClick={() => setIsOpen((open) => !open)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        data-open={isOpen}
      >
        <span aria-hidden="true" />
      </Marker>
      <Card id={cardId} role="note" data-open={isOpen} $align={align} $opensUp={opensUp}>
        <strong>{title}</strong>
        <span>{body}</span>
      </Card>
    </Root>
  );
};

const SIZE = 24;

const PLACEMENT = {
  right: 'left: calc(100% + 10px);',
  left: 'right: calc(100% + 10px);',
  center: 'left: 50%;',
};

const Root = styled.div`
  position: absolute;
  z-index: 2;
  width: ${SIZE}px;
  height: ${SIZE}px;
  margin: -${SIZE / 2}px 0 0 -${SIZE / 2}px;
`;

const Marker = styled.button`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 2px;
  background: var(--color-amber);
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(242, 165, 0, 0.45);
  animation: hotspot-ping 2.8s var(--ease-out-expo) infinite;
  transition: transform var(--duration-fast) var(--ease-out-expo);

  /* the plus */
  span,
  span::after {
    position: absolute;
    width: 10px;
    height: 1.25px;
    background: #111111;
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  span::after {
    content: '';
    left: 0;
    transform: rotate(90deg);
  }

  &[data-open='true'] span {
    transform: rotate(45deg);
  }

  &:hover {
    transform: scale(1.12);
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }

  @keyframes hotspot-ping {
    0% { box-shadow: 0 0 0 0 rgba(242, 165, 0, 0.5); }
    70%, 100% { box-shadow: 0 0 0 12px rgba(242, 165, 0, 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Card = styled.span`
  position: absolute;
  ${({ $align }) => PLACEMENT[$align]}
  ${({ $align, $opensUp }) => {
    if ($align !== 'center') return $opensUp ? 'bottom: 0;' : 'top: 0;';
    return $opensUp ? 'bottom: calc(100% + 10px);' : 'top: calc(100% + 10px);';
  }}
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: max-content;
  max-width: min(15rem, 62vw);
  padding: 0.7rem 0.85rem;
  border-radius: 2px;
  background: rgba(248, 248, 248, 0.94);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px -12px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(17, 17, 17, 0.06);
  font-family: var(--font-body);
  pointer-events: none;
  opacity: 0;
  translate: ${({ $align }) => ($align === 'center' ? '-50% 0' : '0 0')};
  transform: translateY(4px);
  transition: opacity var(--duration-fast) ease, transform var(--duration-normal) var(--ease-out-expo);

  strong {
    font-size: var(--text-label);
    font-weight: 700;
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink);
  }

  span {
    font-size: 0.8125rem;
    line-height: 1.45;
    color: var(--color-ink-soft);
  }

  &[data-open='true'] {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default Hotspot;
