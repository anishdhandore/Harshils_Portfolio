// Instrument-style data strip across the top of the hero: labelled cells
// divided by hairlines, with a live clock and an availability light.
import React from 'react';
import styled from 'styled-components';
import { useLocalTime } from '../../hooks/useLocalTime';
import { AVAILABILITY, TELEMETRY, TIME_ZONE } from './heroContent';

const TelemetryBar = () => {
  const time = useLocalTime(TIME_ZONE);

  return (
    <Bar>
      {TELEMETRY.map(({ label, value }) => (
        <Cell key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </Cell>
      ))}
      <Cell>
        <dt>Local time</dt>
        <dd>
          <time>{time}</time>
        </dd>
      </Cell>
      <Cell $grow>
        <dt>Status</dt>
        <dd>
          <Light aria-hidden="true" />
          {AVAILABILITY}
        </dd>
      </Cell>
    </Bar>
  );
};

const Bar = styled.dl`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid var(--color-ink);
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
`;

const Cell = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.7rem 1.25rem 0.7rem 0;
  margin-right: 1.25rem;
  border-right: 1px solid var(--color-line);
  ${({ $grow }) => ($grow ? 'flex: 1; justify-content: flex-end; border-right: 0; margin-right: 0; padding-right: 0;' : '')}

  dt {
    color: var(--color-ink-soft);
  }

  dd {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-ink);
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 700px) {
    border-right: 0;
    padding-right: 0;
    ${({ $grow }) => ($grow ? 'flex-basis: 100%; justify-content: flex-start; border-top: 1px solid var(--color-line);' : '')}
  }
`;

/* a square amber annunciator light, not a pulsing dot */
const Light = styled.i`
  width: 7px;
  height: 7px;
  background: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(242, 165, 0, 0.18);
  animation: annunciator 1.6s steps(1, end) infinite;

  @keyframes annunciator {
    50% { opacity: 0.35; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default TelemetryBar;
