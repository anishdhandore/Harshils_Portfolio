import React from 'react';
import styled from 'styled-components';
import { SPECS } from './featuredContent';

const NimbusDesignValues = () => (
  <SpecBlock aria-label="Nimbus V4 design specifications">
    <SpecsTitle>
      <span>Nimbus V4</span>
      Design values
    </SpecsTitle>
    <Specs>
      {SPECS.map(({ value, label: name }, i) => (
        <div key={name}>
          <dt>
            <span className="i">{String(i + 1).padStart(2, '0')}</span>
            {name}
          </dt>
          <dd>{value}</dd>
        </div>
      ))}
    </Specs>
  </SpecBlock>
);

const SpecsTitle = styled.p`
  display: flex;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span {
    color: var(--color-ink);
    font-weight: 700;
  }
`;

const SpecBlock = styled.section`
  width: min(calc(100% - 2 * var(--space-gutter)), var(--content-max));
  margin-inline: auto;
  margin-bottom: clamp(2rem, 5vw, 4rem);
  border-top: 1px solid var(--color-ink);
`;

const Specs = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.9rem 1rem 0 0;
  }

  div + div {
    padding-left: 1rem;
    border-left: 1px solid var(--color-line);
  }

  dt {
    display: flex;
    gap: 0.6rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .i {
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  dd {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 1.2rem + 1.4vw, 2.6rem);
    font-weight: 400;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.25rem;

    div:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }
  }
`;

export default NimbusDesignValues;
