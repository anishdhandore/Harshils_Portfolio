// One flight progress strip: channel, callsign and route printed on a paper
// strip with a coloured holder edge. Either the whole strip is a link (`href`)
// or it carries its own actions (`children`).
import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';

/**
 * @param {{ channel: string, callsign: string, handle: string, href?: string, action?: string, external?: boolean, isPrimary?: boolean, children?: React.ReactNode }} props
 */
const FlightStrip = ({ channel, callsign, handle, href, action, external, isPrimary, children }) => {
  const body = (
    <>
      <Holder aria-hidden="true" $isPrimary={isPrimary} />
      <Cell className="ch" aria-hidden="true">
        <small>Ch</small>
        {channel}
      </Cell>
      <Cell className="route">
        <span className="callsign">{callsign}</span>
        <span className="handle">{handle}</span>
      </Cell>
      <Cell className="action">
        {children ?? (
          <span className="cue">
            {action} <FiArrowUpRight aria-hidden="true" />
          </span>
        )}
      </Cell>
    </>
  );

  if (href) {
    return (
      <Strip
        as="a"
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`${callsign}: ${handle}`}
        $isLink
      >
        {body}
      </Strip>
    );
  }
  return <Strip>{body}</Strip>;
};

const Strip = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5rem 3.25rem minmax(0, 1fr) auto;
  align-items: stretch;
  min-height: 4rem;
  background: #fbf9f3;
  color: var(--color-ink);
  text-decoration: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 6px 14px -10px rgba(0, 0, 0, 0.35);
  transition: transform 0.5s var(--ease-out-expo), box-shadow 0.5s var(--ease-out-expo);

  /* strips slide along the board when picked up */
  &:hover,
  &:focus-within {
    transform: translateX(10px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 14px 24px -14px rgba(0, 0, 0, 0.45);
  }

  ${({ $isLink }) =>
    $isLink &&
    `
    &:hover .cue svg { transform: rotate(45deg); }
    &:hover .cue { background: var(--color-amber); border-color: var(--color-amber); }
    &:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 3px; }
  `}

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:focus-within {
      transform: none;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 0.5rem minmax(0, 1fr) auto;
  }
`;

const Holder = styled.span`
  background: ${({ $isPrimary }) => ($isPrimary ? 'var(--color-amber)' : '#8f8d8d')};
`;

const Cell = styled.span`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.9rem;

  & + & {
    border-left: 1px dashed rgba(17, 17, 17, 0.18);
  }

  &.ch {
    flex-direction: column;
    justify-content: center;
    gap: 0.15rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;

    small {
      font-size: 0.5625rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-ink-soft);
    }
  }

  &.route {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
    min-width: 0;
  }

  .callsign {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1rem + 0.8vw, 1.6rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .handle {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--text-sm);
    color: var(--color-ink-soft);
  }

  &.action {
    gap: 0.5rem;
  }

  .cue {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-ink);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    transition: background-color var(--duration-fast) ease, border-color var(--duration-fast) ease;

    svg {
      transition: transform var(--duration-normal) var(--ease-out-expo);
    }
  }

  /* the email strip's copy button, made compact, plus its "write" link */
  button {
    min-height: 2.25rem;
    padding: 0 0.75rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }

  .write {
    display: inline-flex;
    align-items: center;
    min-height: 2.25rem;
    padding: 0 0.75rem;
    border: 1px solid var(--color-ink);
    color: var(--color-ink);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color var(--duration-fast) ease, border-color var(--duration-fast) ease;
  }

  .write:hover {
    background: var(--color-amber);
    border-color: var(--color-amber);
  }

  .write:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
  }

  @media (max-width: 560px) {
    &.ch {
      display: none;
    }
  }
`;

export default FlightStrip;
