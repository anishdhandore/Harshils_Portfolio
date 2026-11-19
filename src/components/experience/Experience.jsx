// Experience as a flight log on a black field: a flight profile (altitude over
// route) where each role is a waypoint and the route climbs at each one. As you
// scroll, the amber route draws on and the aircraft flies it; the readout below
// shows the leg the aircraft is on.
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import FlightProfile from './FlightProfile';
import SectionLabel from '../ui/SectionLabel';
import { progressForLeg, routeShare } from './routeGeometry';
import { formatSpan } from './scale';
import { ROLES } from './experienceData';

const RANGE = [0.04, 0.96];
const SCROLL_SPRING = { stiffness: 70, damping: 22, mass: 0.8, restDelta: 0.0005 };
const EASE = [0.16, 1, 0.3, 1];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatMonth = (ym) => {
  const [y, m] = ym.split('-');
  return `${MONTHS[Number(m) - 1]} ${y}`;
};

const Experience = ({ now = new Date() }) => {
  const sectionRef = useRef(null);
  const isReduced = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, SCROLL_SPRING);
  const share = useTransform(isReduced ? scrollYProgress : smooth, (p) => routeShare(p, RANGE));

  const [active, setActive] = useState(0);
  const onLeg = (i) => setActive((prev) => (prev === i ? prev : i));

  // jump the page to the scroll position where the aircraft reaches waypoint i
  const goToLeg = (i) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + progressForLeg(i, ROLES.length, RANGE) * travel, behavior: isReduced ? 'auto' : 'smooth' });
  };

  const role = ROLES[active];
  const isCurrent = role.end === null;

  return (
    <Section id="experience" ref={sectionRef} aria-labelledby="experience-heading" $count={ROLES.length}>
      <Sticky>
        <Inner>
          <Header>
            <div>
              <SectionLabel index="04" tone="night">
                Flight log
              </SectionLabel>
              <h2 id="experience-heading">Experience</h2>
            </div>
            <Legend aria-hidden="true">
              <span>
                <i className="flown" /> Flown
              </span>
              <span>
                <i className="planned" /> Route
              </span>
              <span>
                Wpt {String(active + 1).padStart(2, '0')} / {String(ROLES.length).padStart(2, '0')}
              </span>
            </Legend>
          </Header>

          <FlightProfile
            roles={ROLES}
            share={share}
            active={active}
            isStatic={isReduced}
            onLeg={onLeg}
            onSelect={goToLeg}
          />

          <Readout>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={role.code}
                initial={isReduced ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={isReduced ? { opacity: 0 } : { opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: EASE }}
                aria-live="polite"
              >
                <Main>
                  <Kicker>
                    <span className="code">{role.code}</span>
                    {isCurrent && (
                      <span className="live">
                        <i aria-hidden="true" /> Current
                      </span>
                    )}
                    <span>
                      {formatMonth(role.start)} — {isCurrent ? 'Present' : formatMonth(role.end)}
                    </span>
                    <span className="muted">{formatSpan(role.start, role.end, now)}</span>
                  </Kicker>
                  <Role>{role.role}</Role>
                  <Company>
                    {role.company}
                    <span> · {role.location}</span>
                  </Company>
                  <Summary>{role.summary}</Summary>
                  {role.highlights.length > 0 && (
                    <Highlights>
                      {role.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </Highlights>
                  )}
                </Main>

                <Side>
                  {role.metric && (
                    <Cell>
                      <span className="label">Readout</span>
                      <b>{role.metric.value}</b>
                      <span className="sub">{role.metric.label}</span>
                    </Cell>
                  )}
                  <Cell>
                    <span className="label">Impact</span>
                    <p>{role.impact}</p>
                  </Cell>
                  <Tags>
                    {role.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </Tags>
                </Side>
              </motion.article>
            </AnimatePresence>
          </Readout>
        </Inner>

        {/* the full log, for screen readers and anyone skimming */}
        <VisuallyHidden as="ol">
          {ROLES.map((r) => (
            <li key={r.code}>
              {r.role}, {r.company}, {formatMonth(r.start)} to {r.end ? formatMonth(r.end) : 'present'}
            </li>
          ))}
        </VisuallyHidden>
      </Sticky>
    </Section>
  );
};

const INK = '#ececec';
const MUTED = 'rgba(236, 236, 236, 0.55)';
const LINE = 'rgba(236, 236, 236, 0.12)';
const SHORT = '(max-height: 820px)';
const MOBILE = '(max-width: 899px)';

const Section = styled.section`
  position: relative;
  height: ${({ $count }) => $count * 75 + 60}vh;
  background: #08090b;
  color: ${INK};
  font-family: var(--font-body);
  overflow: clip;
  overflow-anchor: none;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  /* a fine instrument grid and a low horizon glow */
  background:
    radial-gradient(ellipse 70% 50% at 50% 100%, rgba(242, 165, 0, 0.06), transparent 70%),
    linear-gradient(rgba(236, 236, 236, 0.025) 1px, transparent 1px) 0 0 / 100% 48px,
    linear-gradient(90deg, rgba(236, 236, 236, 0.025) 1px, transparent 1px) 0 0 / 48px 100%;
`;

const Inner = styled.div`
  height: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(0.75rem, 2vh, 1.75rem)) var(--space-gutter)
    clamp(1.25rem, 3vh, 2.5rem);
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: clamp(0.75rem, 2.5vh, 2rem);
  box-sizing: content-box;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    margin-top: 0.5rem;
    font-family: var(--font-display);
    font-size: clamp(2rem, 1.4rem + 2vw, 3.25rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 0.95;
  }
`;

const Legend = styled.div`
  display: flex;
  gap: 1.25rem;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: ${MUTED};
  font-variant-numeric: tabular-nums;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    width: 22px;
    height: 0;
    border-top: 2px solid var(--color-amber);
  }

  i.planned {
    border-top: 2px dashed rgba(236, 236, 236, 0.35);
  }

  @media (max-width: 640px) {
    span:not(:last-child) {
      display: none;
    }
  }
`;

const Readout = styled.div`
  min-height: 0;
  border-top: 1px solid ${LINE};
  padding-top: clamp(0.9rem, 2.5vh, 1.75rem);

  article {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
    gap: clamp(1.25rem, 1rem + 2vw, 3.5rem);
  }

  @media ${MOBILE} {
    article {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }
  }
`;

const Main = styled.div`
  min-width: 0;
`;

const Kicker = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.9rem;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;

  .code {
    padding: 0.25rem 0.5rem;
    background: var(--color-amber);
    color: #111111;
    font-weight: 700;
  }

  .live {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--color-amber);
  }

  .live i {
    width: 7px;
    height: 7px;
    background: var(--color-amber);
    animation: log-blink 1.6s steps(1, end) infinite;
  }

  .muted {
    color: ${MUTED};
  }

  @keyframes log-blink {
    50% { opacity: 0.3; }
  }

  @media (prefers-reduced-motion: reduce) {
    .live i { animation: none; }
  }
`;

const Role = styled.h3`
  margin-top: 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 1.2rem + 2vw, 3rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.035em;

  @media ${SHORT} {
    margin-top: 0.6rem;
    font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.4rem);
  }
`;

const Company = styled.p`
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;

  span {
    color: ${MUTED};
    font-weight: 400;
  }
`;

const Summary = styled.p`
  margin-top: 0.8rem;
  max-width: 58ch;
  line-height: 1.55;
  color: rgba(236, 236, 236, 0.85);

  @media ${MOBILE} {
    font-size: var(--text-sm);
  }
`;

const Highlights = styled.ul`
  list-style: none;
  margin-top: 0.9rem;
  display: grid;
  gap: 0.45rem;
  max-width: 64ch;
  font-size: var(--text-sm);
  line-height: 1.5;
  color: ${MUTED};

  li {
    position: relative;
    padding-left: 1.1rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 0.55rem;
    height: 1px;
    background: var(--color-amber);
  }

  /* short screens: the summary and readout carry it */
  @media ${SHORT} {
    li:nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-height: 700px), ${MOBILE} {
    display: none;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
`;

const Cell = styled.div`
  padding: 0.9rem 1rem;
  border: 1px solid ${LINE};
  background: rgba(236, 236, 236, 0.025);

  .label {
    display: block;
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${MUTED};
  }

  b {
    display: block;
    margin-top: 0.35rem;
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    color: var(--color-amber);
    font-variant-numeric: tabular-nums;
  }

  .sub {
    display: block;
    margin-top: 0.35rem;
    font-size: var(--text-label);
    color: ${MUTED};
  }

  p {
    margin-top: 0.4rem;
    font-size: var(--text-sm);
    line-height: 1.5;
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  li {
    padding: 0.3rem 0.55rem;
    border: 1px solid ${LINE};
    font-size: 0.6875rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${MUTED};
  }

  @media (max-height: 700px) {
    display: none;
  }
`;

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

export default Experience;
