// Wordmark: a flying-wing planform (Nimbus V4's outline, simplified) and the
// name set in tracked caps. The mark banks gently toward the pointer.
import React from 'react';
import styled from 'styled-components';

/** The flying-wing mark on its own; inherits currentColor. */
export const WingMark = ({ size = 26, className }) => (
  <svg
    className={className}
    width={size}
    height={Math.round(size * 0.55)}
    viewBox="0 0 48 26"
    aria-hidden="true"
    focusable="false"
  >
    {/* swept wing, cargo pod and the twin fins at the tips */}
    <path d="M24 2 L46 19 L44 22 L24 12.5 L4 22 L2 19 Z" fill="currentColor" />
    <path d="M24 2 L27.5 6 L27 15 L24 13.5 L21 15 L20.5 6 Z" fill="currentColor" opacity="0.55" />
    <path d="M46 19 L47 13 L44.5 18.5 Z M2 19 L1 13 L3.5 18.5 Z" fill="currentColor" />
  </svg>
);

const Logo = ({ name }) => (
  <Mark data-logo>
    <WingMark />
    <span>{name}</span>
  </Mark>
);

const Mark = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--nav-ink);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    color: var(--color-amber);
    transition: transform 0.5s var(--ease-out-expo);
  }

  a:hover & svg,
  a:focus-visible & svg {
    transform: rotate(-12deg) translateY(-1px);
  }
`;

export default Logo;
