// Experience as an airport departure board on black: each role is a flight,
// newest at the top, every character on a split-flap tile. When the board
// scrolls into view the tiles clatter into place row by row. Choosing a row
// opens its detail panel below; the newest flight is open by default.
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import SplitFlap from './SplitFlap';
import SectionLabel from '../ui/SectionLabel';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useLocalTime } from '../../hooks/useLocalTime';
import { TIME_ZONE } from '../hero/heroContent';
import { boardDate, cell, statusOf } from './board';
import { formatSpan } from './scale';
import { ROLES } from './experienceData';

const EASE = [0.16, 1, 0.3, 1];
const ROW_STAGGER_MS = 220;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatMonth = (ym) => `${MONTHS[Number(ym.slice(5, 7)) - 1]} ${ym.slice(0, 4)}`;

// newest flight first, as on a real departure board
const FLIGHTS = [...ROLES].reverse();

// Board columns, by screen size: [key, label, width in tiles]
const COLUMNS = {
  wide: [['flight', 'Flight', 4], ['dest', 'Destination', 19], ['via', 'Via', 16], ['date', 'Date', 6], ['status', 'Status', 9]],
  medium: [['flight', 'Flight', 4], ['dest', 'Destination', 19], ['date', 'Date', 6], ['status', 'Status', 9]],
  narrow: [['flight', 'Flight', 4], ['dest', 'Destination', 19]],
};

const cellText = (key, role, status) => {
  switch (key) {
    case 'flight':
      return role.code;
    case 'dest':
      return role.board.destination;
    case 'via':
      return role.board.via;
    case 'date':
      return boardDate(role.start);
    default:
      return status;
  }
};

const toneOf = (key, status) => {
  if (key === 'status') return status === 'LANDED' ? 'muted' : 'amber';
  if (key === 'flight') return 'amber';
  return 'ink';
};

const Experience = ({ now = new Date() }) => {
  const boardRef = useRef(null);
  const isReduced = Boolean(useReducedMotion());
  const isInView = useInView(boardRef, { once: true, amount: 0.3 });
  const isWide = useMediaQuery('(min-width: 1200px)');
  const isMedium = useMediaQuery('(min-width: 700px)');
  const columns = COLUMNS[isWide ? 'wide' : isMedium ? 'medium' : 'narrow'];
  const time = useLocalTime(TIME_ZONE);

  const [selected, setSelected] = useState(FLIGHTS[0].code);
  const role = FLIGHTS.find((f) => f.code === selected);
  const status = statusOf(role, now);

  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Inner>
        <Header>
          <SectionLabel index="04" tone="night">
            Flight log
          </SectionLabel>
          <h2 id="experience-heading">Experience</h2>
        </Header>

        <Board ref={boardRef} $columns={columns}>
          <BoardTop>
            <span className="title">
              <Plane aria-hidden="true" viewBox="0 0 24 24">
                <path d="M2 14.5 21 9l1 2-8.5 4.5L15 21l-2 .5-3.5-5L5 18l-1-1.5 3-2.5L2 14.5Z" />
              </Plane>
              Departures
            </span>
            <span className="clock">
              <span className="city">San Diego</span>
              <time>{time}</time>
            </span>
          </BoardTop>

          <ColumnLabels aria-hidden="true">
            {columns.map(([key, label]) => (
              <span key={key} className={`col col-${key}`}>
                {label}
              </span>
            ))}
          </ColumnLabels>

          <Rows aria-label="Experience, newest first">
            {FLIGHTS.map((flight, row) => {
              const flightStatus = statusOf(flight, now);
              const isSelected = flight.code === selected;
              const dates = `${formatMonth(flight.start)} to ${flight.end ? formatMonth(flight.end) : 'present'}`;
              return (
                <li key={flight.code}>
                  <RowButton
                    type="button"
                    aria-pressed={isSelected}
                    aria-controls="flight-detail"
                    aria-label={`${flight.role}, ${flight.company}, ${dates}, ${flightStatus.toLowerCase()}`}
                    onClick={() => setSelected(flight.code)}
                    data-selected={isSelected}
                  >
                    <Marker aria-hidden="true">▶</Marker>
                    {columns.map(([key, , width], col) => (
                      <span key={key} className={`col col-${key}`}>
                        <SplitFlap
                          text={cell(cellText(key, flight, flightStatus), width)}
                          isRunning={isInView}
                          isStatic={isReduced}
                          delay={row * ROW_STAGGER_MS + col * 60}
                          seed={row * 7 + col}
                          tone={toneOf(key, flightStatus)}
                        />
                      </span>
                    ))}
                    {/* phones have no status column: a small light and label instead */}
                    <MiniStatus aria-hidden="true" data-status={flightStatus}>
                      <i /> {flightStatus}
                    </MiniStatus>
                    {flightStatus === 'ON DUTY' && <Beacon aria-hidden="true" />}
                  </RowButton>
                </li>
              );
            })}
          </Rows>
        </Board>

        <Detail id="flight-detail" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={role.code}
              initial={isReduced ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={isReduced ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <Main>
                <Kicker>
                  <span className="code">{role.code}</span>
                  <span className={status === 'LANDED' ? 'muted' : 'live'}>
                    {status !== 'LANDED' && <i aria-hidden="true" />}
                    {status}
                  </span>
                  <span>
                    {formatMonth(role.start)} — {role.end ? formatMonth(role.end) : 'Present'}
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
        </Detail>
      </Inner>
    </Section>
  );
};

const INK = '#ececec';
const MUTED = 'rgba(236, 236, 236, 0.55)';
const LINE = 'rgba(236, 236, 236, 0.12)';
const MOBILE = '(max-width: 699px)';

const Section = styled.section`
  position: relative;
  padding: var(--space-section) var(--space-gutter);
  color: ${INK};
  font-family: var(--font-body);
  background:
    radial-gradient(ellipse 70% 45% at 50% 0%, rgba(242, 165, 0, 0.06), transparent 70%),
    linear-gradient(rgba(236, 236, 236, 0.025) 1px, transparent 1px) 0 0 / 100% 48px,
    linear-gradient(90deg, rgba(236, 236, 236, 0.025) 1px, transparent 1px) 0 0 / 48px 100%,
    #08090b;
`;

const Inner = styled.div`
  max-width: var(--content-max);
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: clamp(1.5rem, 1rem + 2vw, 2.5rem);

  h2 {
    margin-top: 0.5rem;
    font-family: var(--font-display);
    font-size: clamp(2rem, 1.4rem + 2vw, 3.25rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 0.95;
  }
`;

/* tile size and gaps, by breakpoint; columns are sized in tiles */
const Board = styled.div`
  --tile-w: 17px;
  --tile-h: 27px;
  --tile-gap: 2px;
  --tile-font: 16px;
  --col-gap: 18px;

  padding: clamp(0.9rem, 0.6rem + 1vw, 1.5rem);
  border: 1px solid ${LINE};
  border-radius: var(--radius-panel);
  background: linear-gradient(180deg, #0f1013, #0b0c0e);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 40px 80px -40px rgba(0, 0, 0, 0.9);
  overflow: hidden;

  .col {
    flex: none;
  }

  ${({ $columns }) =>
    $columns
      .map(
        ([key, , width]) => `
    .col-${key} { width: calc(${width} * (var(--tile-w) + var(--tile-gap))); }`
      )
      .join('')}

  @media (min-width: 700px) and (max-width: 1199px) {
    --tile-w: 18px;
    --tile-h: 28px;
  }

  @media ${MOBILE} {
    /* rows stack (flight number above destination), so 19 tiles fill the width */
    --tile-w: calc((100vw - 2 * var(--space-gutter) - 2 * 0.9rem - 2.4rem) / 19 - 2px);
    --tile-h: calc(var(--tile-w) * 1.45);
    --tile-font: calc(var(--tile-w) * 0.9);
    --col-gap: 6px;
    padding: 0.9rem;
  }
`;

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.8rem;
  margin-bottom: 0.6rem;
  border-bottom: 1px solid ${LINE};
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;

  .title {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    color: var(--color-amber);
  }

  .clock {
    color: ${MUTED};
    font-variant-numeric: tabular-nums;
  }

  .clock time {
    margin-left: 0.5rem;
    color: ${INK};
    white-space: nowrap;
  }

  @media ${MOBILE} {
    .city {
      display: none;
    }
  }
`;

const Plane = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

const rowLayout = `
  display: flex;
  align-items: center;
  gap: var(--col-gap);
  padding-left: 1.6rem;
`;

const ColumnLabels = styled.div`
  ${rowLayout}
  padding-bottom: 0.5rem;
  font-size: 0.625rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${MUTED};

  @media ${MOBILE} {
    display: none;
  }
`;

const Rows = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RowButton = styled.button`
  ${rowLayout}
  position: relative;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 0;
  border-radius: 2px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color var(--duration-fast) ease;

  &:hover {
    background: rgba(236, 236, 236, 0.04);
  }

  &[data-selected='true'] {
    background: rgba(242, 165, 0, 0.07);
    box-shadow: inset 2px 0 0 var(--color-amber);
  }

  &:focus-visible {
    outline: 2px solid var(--color-amber);
    outline-offset: 2px;
  }

  @media ${MOBILE} {
    flex-wrap: wrap;
    row-gap: 6px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const Marker = styled.span`
  position: absolute;
  left: 0.45rem;
  font-size: 0.6rem;
  color: var(--color-amber);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--duration-fast) ease, transform var(--duration-normal) var(--ease-out-expo);

  ${RowButton}[data-selected='true'] & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MiniStatus = styled.span`
  display: none;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: ${MUTED};

  i {
    width: 6px;
    height: 6px;
    background: currentColor;
  }

  &[data-status='ON DUTY'],
  &[data-status='IN FLIGHT'] {
    color: var(--color-amber);
  }

  @media ${MOBILE} {
    display: inline-flex;
  }
`;

/* the current flight's status light, at the right end of its row */
const Beacon = styled.i`
  position: absolute;
  right: 0.6rem;
  top: 50%;
  width: 7px;
  height: 7px;
  margin-top: -3.5px;
  background: var(--color-amber);
  box-shadow: 0 0 8px rgba(242, 165, 0, 0.8);
  animation: beacon 1.4s steps(1, end) infinite;

  @keyframes beacon {
    50% { opacity: 0.2; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media ${MOBILE} {
    top: 1.1rem;
  }
`;

const Detail = styled.div`
  margin-top: clamp(1.5rem, 1rem + 2vw, 2.5rem);

  article {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
    gap: clamp(1.25rem, 1rem + 2vw, 3.5rem);
  }

  @media (max-width: 899px) {
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
  }

  .muted {
    color: ${MUTED};
  }
`;

const Role = styled.h3`
  margin-top: 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 1.2rem + 2vw, 3rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.035em;
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
`;

export default Experience;
