// Hermeus-style section kicker: a small index number and an uppercase,
// letter-spaced label, e.g. "02  FEATURED WORK".
import React from 'react';
import styled from 'styled-components';

/**
 * @param {{ index?: string, children: React.ReactNode, tone?: 'paper' | 'night', className?: string }} props
 */
const SectionLabel = ({ index, children, tone = 'paper', className }) => (
  <Label className={className} $tone={tone}>
    {index && (
      <Index aria-hidden="true" $tone={tone}>
        {index}
      </Index>
    )}
    <span>{children}</span>
  </Label>
);

const Label = styled.p`
  display: inline-flex;
  align-items: baseline;
  gap: 0.9rem;
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 400;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: ${({ $tone }) => ($tone === 'night' ? 'var(--color-night-muted)' : 'var(--color-ink-soft)')};
`;

const Index = styled.span`
  font-variant-numeric: tabular-nums;
  color: ${({ $tone }) => ($tone === 'night' ? 'var(--color-amber)' : 'var(--color-amber-ink)')};
`;

export default SectionLabel;
