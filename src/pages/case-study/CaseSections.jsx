// Body sections of a case study: the challenge, what he did, the design
// workflow, key figures, technical evidence, field photos, design status and
// the next project.
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import Plate from './Plate';

const EASE = [0.16, 1, 0.3, 1];

/** Fade + rise once when scrolled into view (instant with reduced motion). */
export const Reveal = ({ children, delay = 0, as = 'div', ...rest }) => {
  const isReduced = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      initial={isReduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/** Section heading with a Hermeus-style index kicker. */
const Heading = ({ id, index, children, tone }) => (
  <HeadingWrap>
    <Index aria-hidden="true" $onDark={tone === 'night'}>
      {index}
    </Index>
    <H2 id={id} $onDark={tone === 'night'}>
      {children}
    </H2>
  </HeadingWrap>
);

export const Problem = ({ text }) => (
  <Block aria-labelledby="cs-problem">
    <Reveal>
      <Heading id="cs-problem" index="01">
        The engineering challenge
      </Heading>
      <Lead>{text}</Lead>
    </Reveal>
  </Block>
);

export const Built = ({ items }) => (
  <Block aria-labelledby="cs-built">
    <Reveal>
      <Heading id="cs-built" index="02">
        What I did
      </Heading>
    </Reveal>
    <BuiltList>
      {items.map(({ title, body }, i) => (
        <Reveal as="li" key={title} delay={i * 0.06}>
          <h3>{title}</h3>
          <p>{body}</p>
        </Reveal>
      ))}
    </BuiltList>
  </Block>
);

export const Flow = ({ steps }) => (
  <Block aria-labelledby="cs-flow" $wide>
    <Reveal>
      <Heading id="cs-flow" index="03">
        Design workflow
      </Heading>
    </Reveal>
    <FlowRow>
      {steps.map(({ label, detail }, i) => (
        <Reveal as="li" key={label} delay={i * 0.08}>
          <span className="step">{String(i + 1).padStart(2, '0')}</span>
          <strong>{label}</strong>
          <span className="detail">{detail}</span>
        </Reveal>
      ))}
    </FlowRow>
  </Block>
);

export const Results = ({ items }) => (
  <Block aria-labelledby="cs-results" $wide>
    <Reveal>
      <Heading id="cs-results" index="04">
        Key figures
      </Heading>
    </Reveal>
    <ResultGrid>
      {items.map(({ value, label }, i) => (
        <Reveal as="li" key={label} delay={i * 0.06}>
          <b>{value}</b>
          <span>{label}</span>
        </Reveal>
      ))}
    </ResultGrid>
    <Note>Design values, not measured flight performance.</Note>
  </Block>
);

export const Evidence = ({ items }) => (
  <EvidenceBand aria-labelledby="cs-evidence">
    <Reveal>
      <Heading id="cs-evidence" index="05" tone="night">
        Technical evidence
      </Heading>
    </Reveal>
    <EvidenceGrid>
      {items.map((item, i) => (
        <Reveal key={item.caption} delay={(i % 2) * 0.1}>
          <Plate {...item} figure={i + 1} tone="night" width={1400} height={950} />
        </Reveal>
      ))}
    </EvidenceGrid>
  </EvidenceBand>
);

export const Photos = ({ items }) =>
  items.length > 0 && (
    <Block aria-labelledby="cs-photos" $wide>
      <Reveal>
        <Heading id="cs-photos" index="06">
          In the field
        </Heading>
      </Reveal>
      <PhotoGrid>
        {items.map((item, i) => (
          <Reveal key={item.caption} delay={(i % 2) * 0.08}>
            <Plate {...item} />
          </Reveal>
        ))}
      </PhotoGrid>
    </Block>
  );

export const Status = ({ text }) => (
  <Block aria-labelledby="cs-status">
    <Reveal>
      <StatusCard>
        <Heading id="cs-status" index="Note">
          Design status
        </Heading>
        <Lead>{text}</Lead>
      </StatusCard>
    </Reveal>
  </Block>
);

export const NextProject = ({ study }) => (
  <Next href={`/work/${study.slug}`} aria-label={`Next project: ${study.name}`}>
    <span className="label">Next project</span>
    <span className="name">
      {study.name} <span aria-hidden="true">→</span>
    </span>
    <span className="shot" aria-hidden="true">
      <img src={study.hero.main.src} alt="" width={1600} height={1000} loading="lazy" />
    </span>
  </Next>
);

/* ---------- styles ---------- */

const READING = '46rem';

const Block = styled.section`
  max-width: ${({ $wide }) => ($wide ? 'var(--content-max)' : READING)};
  margin: 0 auto;
  padding: clamp(3rem, 2rem + 4vw, 6rem) var(--space-gutter) 0;
  box-sizing: content-box;
`;

const HeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.4rem;
`;

const Index = styled.span`
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
  color: ${({ $onDark }) => ($onDark ? 'var(--color-amber)' : 'var(--color-amber-ink)')};
`;

const H2 = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ $onDark }) => ($onDark ? 'var(--color-night-ink)' : 'var(--color-ink)')};
`;

const Lead = styled.p`
  font-size: var(--text-lead);
  line-height: 1.55;
  color: var(--color-ink-soft);
  max-width: 62ch;
`;

const BuiltList = styled.ol`
  list-style: none;
  display: grid;
  gap: 1.75rem;
  counter-reset: built;

  li {
    position: relative;
    padding-left: 3rem;
    counter-increment: built;
  }

  li::before {
    content: counter(built, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 0.15rem;
    width: 2rem;
    height: 1.6rem;
    display: grid;
    place-items: center;
    background: var(--color-amber);
    color: #111111;
    font-size: 0.75rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  p {
    margin-top: 0.35rem;
    color: var(--color-ink-soft);
    line-height: 1.6;
  }
`;

const FlowRow = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1.25rem;
    border-radius: var(--radius-card);
    background: #f6f6f6;
    border: 1px solid var(--color-line);
  }

  /* connector arrows between steps */
  li:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -11px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-top: 2px solid var(--color-ink);
    border-right: 2px solid var(--color-ink);
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
  }

  .step {
    font-size: var(--text-label);
    font-weight: 700;
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  strong {
    font-size: 1.1rem;
    letter-spacing: -0.01em;
  }

  .detail {
    font-size: var(--text-sm);
    color: var(--color-ink-soft);
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    li:not(:last-child)::after {
      right: auto;
      left: 50%;
      top: auto;
      bottom: -11px;
      transform: translateX(-50%) rotate(135deg);
    }
  }
`;

const ResultGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  border-top: 1px solid var(--color-line);

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.75rem 1.5rem 1.75rem 0;
    border-bottom: 1px solid var(--color-line);
  }

  b {
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 1.6rem + 2vw, 3.5rem);
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: var(--color-ink-soft);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }
`;

const Note = styled.p`
  margin-top: 1rem;
  font-size: var(--text-label);
  color: var(--color-ink-soft);
`;

const EvidenceBand = styled.section`
  margin: clamp(3rem, 2rem + 4vw, 6rem) clamp(8px, 1vw, 16px) 0;
  padding: clamp(3rem, 2rem + 4vw, 6rem) var(--space-gutter);
  border-radius: var(--radius-panel);
  background:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 64px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 64px 100%,
    var(--color-night);

  & > * {
    max-width: var(--content-max);
    margin-left: auto;
    margin-right: auto;
  }
`;

const EvidenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 1rem + 2vw, 3rem) clamp(1rem, 0.5rem + 2vw, 2.5rem);

  @media (max-width: 799px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/* one wide lead photo, then the rest in a row of three */
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 0.5rem + 2vw, 2rem);

  & > div:first-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 699px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const StatusCard = styled.div`
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  border-left: 3px solid var(--color-amber);
  background: #f6f6f6;
`;

const Next = styled.a`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 2rem;
  max-width: var(--content-max);
  margin: clamp(4rem, 3rem + 4vw, 8rem) auto 0;
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  border-radius: var(--radius-panel);
  background: var(--color-surface);
  color: var(--color-ink);
  text-decoration: none;
  overflow: hidden;

  .label {
    grid-column: 1;
    align-self: end;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .name {
    grid-column: 1;
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 1.5rem + 3vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .name span {
    display: inline-block;
    color: var(--color-amber-ink);
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  .shot {
    grid-column: 2;
    grid-row: 1 / span 2;
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.45);
    transition: transform 0.7s var(--ease-out-expo);
  }

  .shot img {
    display: block;
    width: 100%;
    height: auto;
  }

  &:hover .name span {
    transform: translateX(0.3em);
  }

  &:hover .shot {
    transform: translateY(-6px) scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 4px;
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    .shot {
      grid-column: 1;
      grid-row: auto;
    }
  }
`;
