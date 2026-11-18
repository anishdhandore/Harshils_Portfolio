// A figure framed like a plate in a technical report: image, corner
// registration marks and a numbered caption ("FIG. 03 — V-n diagram").
import React from 'react';
import styled from 'styled-components';

/**
 * @param {{ src: string, alt: string, caption?: string, figure?: number, tone?: 'paper' | 'night', width?: number, height?: number, eager?: boolean, className?: string }} props
 */
const Plate = ({ src, alt, caption, figure, tone = 'paper', width = 1600, height = 1000, eager = false, className }) => (
  <Figure className={className} $tone={tone}>
    <Frame $tone={tone}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </Frame>
    {caption && (
      <figcaption>
        {figure !== undefined && <span className="fig">Fig. {String(figure).padStart(2, '0')}</span>}
        {caption}
      </figcaption>
    )}
  </Figure>
);

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  figcaption {
    display: flex;
    gap: 0.75rem;
    font-size: var(--text-label);
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: ${({ $tone }) => ($tone === 'night' ? 'var(--color-night-muted)' : 'var(--color-ink-soft)')};
  }

  .fig {
    flex-shrink: 0;
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: ${({ $tone }) => ($tone === 'night' ? 'var(--color-amber)' : 'var(--color-amber-ink)')};
    font-variant-numeric: tabular-nums;
  }
`;

const Frame = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: ${({ $tone }) => ($tone === 'night' ? '#16171a' : '#ffffff')};
  box-shadow: ${({ $tone }) =>
    $tone === 'night'
      ? '0 0 0 1px rgba(255, 255, 255, 0.08), 0 40px 80px -30px rgba(0, 0, 0, 0.7)'
      : '0 0 0 1px rgba(17, 17, 17, 0.08)'};

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* registration marks */
  &::after {
    content: '';
    position: absolute;
    inset: 8px;
    pointer-events: none;
    --c: ${({ $tone }) => ($tone === 'night' ? 'rgba(236, 236, 236, 0.5)' : 'rgba(17, 17, 17, 0.35)')};
    background:
      linear-gradient(var(--c), var(--c)) top left / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) top left / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) top right / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) top right / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom left / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom left / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom right / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom right / 1px 10px no-repeat;
  }
`;

export default Plate;
