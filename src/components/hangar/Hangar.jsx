// "The hangar": projects laid out like an engineering drawing sheet. A parts
// list on the left; the selected project fills the drawing on the right, with
// a title block and a readout of its key figures. Light, not a dark panel.
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import SectionLabel from '../ui/SectionLabel';
import { PROJECTS } from './projects';

const EASE = [0.16, 1, 0.3, 1];
const ZONES_X = ['A', 'B', 'C', 'D', 'E', 'F'];
const ZONES_Y = ['1', '2', '3', '4'];

const Hangar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isReduced = Boolean(useReducedMotion());
  const active = PROJECTS[activeIndex];

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Inner>
        <Header>
          <SectionLabel index="03">The hangar</SectionLabel>
          <Title id="projects-heading">Project files</Title>
          <Lede>Two airframes, from mission requirements to sizing, stability and hardware.</Lede>
        </Header>

        <Sheet>
          <PartsList>
            <ListHead aria-hidden="true">
              <span>No.</span>
              <span>Aircraft</span>
              <span>Status</span>
            </ListHead>
            {PROJECTS.map((project, i) => {
              const isActive = i === activeIndex;
              return (
                <Row key={project.slug} data-active={isActive}>
                  <RowLink
                    href={`/work/${project.slug}`}
                    aria-label={`${project.name}: view case study`}
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                  >
                    <span className="no">{project.index}</span>
                    <span className="name">{project.name}</span>
                    <span className="kind">{project.kind}</span>
                  </RowLink>
                  <Detail>
                    <div>
                      <p>{project.hook}</p>
                      <ul>
                        {project.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <span className="open">
                        Open case study <FiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Detail>
                  {/* phones have no drawing panel: each row carries its own image */}
                  <Thumb src={project.preview} alt="" width={1600} height={1000} loading="lazy" aria-hidden="true" />
                </Row>
              );
            })}
          </PartsList>

          <Drawing aria-live="polite">
            <Zones aria-hidden="true" $axis="x">
              {ZONES_X.map((z) => (
                <span key={z}>{z}</span>
              ))}
            </Zones>
            <Zones aria-hidden="true" $axis="y">
              {ZONES_Y.map((z) => (
                <span key={z}>{z}</span>
              ))}
            </Zones>

            <Frame>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active.slug}
                  src={active.preview}
                  alt={active.previewAlt}
                  width={1600}
                  height={1000}
                  initial={isReduced ? { opacity: 0 } : { opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: isReduced ? 0.2 : 0.7, ease: EASE }}
                />
              </AnimatePresence>
              <Crosshair aria-hidden="true" />
            </Frame>

            <Readout>
              {active.figures.map(({ value, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </Readout>

            <TitleBlock aria-hidden="true">
              <span className="k">Dwg</span>
              <span className="v">HP-{active.index}</span>
              <span className="k">Title</span>
              <span className="v">{active.name}</span>
              <span className="k">Sheet</span>
              <span className="v">
                {activeIndex + 1} of {PROJECTS.length}
              </span>
            </TitleBlock>
          </Drawing>
        </Sheet>
      </Inner>
    </Section>
  );
};

const MOBILE = '(max-width: 899px)';

const Section = styled.section`
  position: relative;
  padding: var(--space-section) var(--space-gutter);
  background: #f6f6f6;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  color: var(--color-ink);
  font-family: var(--font-body);
`;

const Inner = styled.div`
  max-width: var(--content-max);
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 2.6vw, 4rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
`;

const Lede = styled.p`
  max-width: 44ch;
  color: var(--color-ink-soft);
  font-size: var(--text-lead);
  line-height: 1.5;
`;

const Sheet = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(1.5rem, 1rem + 2.5vw, 3.5rem);
  align-items: start;

  @media ${MOBILE} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const PartsList = styled.ol`
  list-style: none;
  border-top: 1px solid var(--color-ink);
`;

const grid = `
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 1rem;
`;

const ListHead = styled.li`
  ${grid}
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span:last-child {
    text-align: right;
  }
`;

const Row = styled.li`
  position: relative;
  border-bottom: 1px solid var(--color-line);

  /* amber rule marks the selected part */
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-amber);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &[data-active='true']::before {
    transform: scaleY(1);
  }

  @media ${MOBILE} {
    &::before {
      left: 0;
    }
  }
`;

const RowLink = styled.a`
  ${grid}
  padding: clamp(1rem, 0.8rem + 0.8vw, 1.5rem) 0;
  color: var(--color-ink);
  text-decoration: none;

  .no {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  .name {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1;
    transition: transform 0.5s var(--ease-out-expo), color var(--duration-fast) ease;
  }

  .kind {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
    white-space: nowrap;
  }

  ${Row}:not([data-active='true']) & .name {
    color: var(--color-ink-muted);
  }

  &:hover .name {
    transform: translateX(0.4rem);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
  }

  @media ${MOBILE} {
    padding-left: 0.9rem;

    ${Row}:not([data-active='true']) & .name {
      color: var(--color-ink);
    }
  }
`;

/* unfolds under the selected row (always open on phones) */
const Detail = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.5s var(--ease-out-expo), opacity 0.3s ease;

  ${Row}[data-active='true'] & {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  & > div {
    min-height: 0;
    overflow: hidden;
    padding-left: 4rem;
  }

  p {
    max-width: 40ch;
    color: var(--color-ink-soft);
    line-height: 1.55;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.9rem;
  }

  li {
    padding: 0.25rem 0.55rem;
    border: 1px solid var(--color-surface-strong);
    font-size: 0.6875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .open {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin: 1rem 0 1.5rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink);
  }

  @media ${MOBILE} {
    grid-template-rows: 1fr;
    opacity: 1;

    & > div {
      padding-left: 0.9rem;
    }
  }
`;

const Thumb = styled.img`
  display: none;

  @media ${MOBILE} {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1.25rem;
    border: 1px solid var(--color-line);
  }
`;

/* the drawing sheet: zone letters around a ruled border */
const Drawing = styled.div`
  position: relative;
  padding: 1.6rem;
  border: 1px solid var(--color-ink);
  background:
    linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px) 0 0 / 100% 32px,
    linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px) 0 0 / 32px 100%,
    #fbfbfb;

  @media ${MOBILE} {
    display: none;
  }
`;

const Zones = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  color: var(--color-ink-soft);
  pointer-events: none;

  ${({ $axis }) =>
    $axis === 'x'
      ? 'left: 1.6rem; right: 1.6rem; top: 0.4rem;'
      : 'top: 1.6rem; bottom: 1.6rem; left: 0.55rem; flex-direction: column; align-items: center;'}
`;

const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid var(--color-line);
  background: var(--color-surface);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* centre mark, as on a drawing */
const Crosshair = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  --c: rgba(242, 165, 0, 0.9);
  background:
    linear-gradient(var(--c), var(--c)) center / 100% 1px no-repeat,
    linear-gradient(var(--c), var(--c)) center / 1px 100% no-repeat;
  mix-blend-mode: multiply;
`;

const Readout = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1.2rem;
  margin-right: 13rem; /* clear of the title block */
  border-top: 1px solid var(--color-ink);

  div {
    padding: 0.7rem 1rem 0 0;
  }

  div + div {
    padding-left: 1rem;
    border-left: 1px solid var(--color-line);
  }

  dt {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  dd {
    margin-top: 0.35rem;
    font-size: clamp(1.25rem, 1rem + 0.8vw, 1.75rem);
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }
`;

const TitleBlock = styled.div`
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  display: grid;
  grid-template-columns: auto auto;
  width: 12rem;
  border: 1px solid var(--color-ink);
  background: #fbfbfb;
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  span {
    padding: 0.35rem 0.55rem;
    border-bottom: 1px solid var(--color-line);
  }

  span:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .k {
    color: var(--color-ink-soft);
    border-right: 1px solid var(--color-line);
  }

  .v {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
`;

export default Hangar;
