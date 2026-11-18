// Closing section and footer: a dark panel that bookends the project files,
// with a word-by-word headline (as in the hero), an attitude indicator that
// banks toward the cursor, contact rows that reveal in sequence and a
// full-width wordmark, as on hermeus.com.
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import AttitudeIndicator from './AttitudeIndicator';
import SectionLabel from '../ui/SectionLabel';
import CopyEmailButton from '../hero/CopyEmailButton';
import { useLocalTime } from '../hero/StatusBar';
import { AVAILABILITY, EMAIL, FULL_NAME, SOCIALS, TIME_ZONE } from '../hero/heroContent';

const EASE = [0.16, 1, 0.3, 1];
const WORD_STAGGER = 0.05;

// Two-tone headline, like the hero: `strong` words in full white
const HEADLINE = [
  { text: 'Let’s build', strong: true },
  { text: 'something', strong: false },
  { text: 'that', strong: false },
  { text: 'flies.', strong: true },
];
const WORDS = HEADLINE.flatMap((p) => p.text.split(' ').map((word) => ({ word, strong: p.strong })));

const hrefOf = (label) => SOCIALS.find((s) => s.label === label).href;

const CHANNELS = [
  { label: 'Email', handle: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'LinkedIn', handle: 'in/harshilpatel2060', href: hrefOf('LinkedIn'), external: true },
  { label: 'GitHub', handle: 'patelharshil2060', href: hrefOf('GitHub'), external: true },
];

const inView = { once: true, margin: '-15% 0px' };

const Contact = () => {
  const isReduced = Boolean(useReducedMotion());
  const time = useLocalTime(TIME_ZONE);
  const year = new Date().getFullYear();
  const hidden = isReduced ? false : 'hidden';

  return (
    <Panel id="contact" aria-labelledby="contact-heading">
      <Glow aria-hidden="true" />

      <Top initial={hidden} whileInView="shown" viewport={inView}>
        <Lead>
          <motion.div variants={fade(0)}>
            <SectionLabel index="05" tone="night">Contact</SectionLabel>
          </motion.div>
          <Status variants={fade(0.04)}>
            <Live aria-hidden="true" />
            {AVAILABILITY}
          </Status>

          <Headline id="contact-heading">
            {WORDS.map(({ word, strong }, i) => (
              <React.Fragment key={`${word}-${i}`}>
                <Mask>
                  <Word variants={rise(0.1 + i * WORD_STAGGER)} $strong={strong}>
                    {word}
                  </Word>
                </Mask>{' '}
              </React.Fragment>
            ))}
          </Headline>

          <Actions variants={fade(0.1 + WORDS.length * WORD_STAGGER)}>
            <LightCopy email={EMAIL} />
          </Actions>
        </Lead>

        <InstrumentSlot variants={fade(0.2)} aria-hidden="true">
          <AttitudeIndicator size={200} />
          <Caption>Wings level, inbox open.</Caption>
        </InstrumentSlot>
      </Top>

      <Channels initial={hidden} whileInView="shown" viewport={inView}>
        {CHANNELS.map(({ label, handle, href, external }, i) => (
          <motion.li key={label} variants={fade(i * 0.08)}>
            <Row
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${label}: ${handle}`}
            >
              <span className="label">{label}</span>
              <span className="handle">{handle}</span>
              <span className="arrow" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </Row>
          </motion.li>
        ))}
      </Channels>

      <Footer>
        <span>© {year} {FULL_NAME}</span>
        <span className="time">
          San Diego · <time>{time}</time>
        </span>
        <ToTop href="/#home">
          Back to top <FiArrowUp aria-hidden="true" />
        </ToTop>
      </Footer>

      <Wordmark aria-hidden="true">{FULL_NAME}</Wordmark>
    </Panel>
  );
};

const fade = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  shown: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: EASE } },
});

const rise = (delay) => ({
  hidden: { y: '110%' },
  shown: { y: '0%', transition: { delay, duration: 0.9, ease: EASE } },
});

/* ---------- styles ---------- */

const PANEL_INSET = 'clamp(8px, 1vw, 16px)';
const INK = 'var(--color-night-ink)';
const MUTED = 'rgba(236, 236, 236, 0.5)';
const LINE = 'var(--color-night-line)';
const MOBILE = '(max-width: 899px)';

const Panel = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0 ${PANEL_INSET} ${PANEL_INSET};
  padding: clamp(4rem, 3rem + 6vw, 9rem) calc(max(var(--space-gutter), (100vw - var(--content-max)) / 2) - ${PANEL_INSET})
    0;
  border-radius: var(--radius-panel);
  background: var(--color-night);
  color: ${INK};
  font-family: var(--font-body);
`;

/* soft light that drifts behind the headline */
const Glow = styled.div`
  position: absolute;
  inset: -30% 20% auto -10%;
  height: 80%;
  background: radial-gradient(closest-side, rgba(255, 255, 255, 0.07), transparent);
  pointer-events: none;
  animation: contact-drift 14s ease-in-out infinite alternate;

  @keyframes contact-drift {
    from { transform: translate(0, 0); }
    to { transform: translate(12%, 8%); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Top = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: clamp(2rem, 1rem + 4vw, 5rem);

  @media ${MOBILE} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Lead = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 1rem + 1vw, 2rem);
`;

const Status = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--text-sm);
  color: ${MUTED};
`;

const Live = styled.i`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-live);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: inherit;
    animation: contact-pulse 2.4s var(--ease-out-expo) infinite;
  }

  @keyframes contact-pulse {
    0% { transform: scale(1); opacity: 0.6; }
    70%, 100% { transform: scale(2.6); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { animation: none; }
  }
`;

const Headline = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 1.3rem + 5vw, 6.25rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  max-width: 14ch;
`;

const Mask = styled.span`
  display: inline-block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
  vertical-align: top;
`;

const Word = styled(motion.span)`
  display: inline-block;
  color: ${({ $strong }) => ($strong ? INK : MUTED)};
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`;

/* the hero's copy-email button, inverted for the dark panel */
const LightCopy = styled(CopyEmailButton)`
  background: ${INK};
  color: #111111;

  &:hover {
    background: var(--color-amber);
  }

  &:focus-visible {
    outline-color: ${INK};
  }
`;


const InstrumentSlot = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;

  @media ${MOBILE} {
    display: none;
  }
`;

const Caption = styled.p`
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: ${MUTED};
`;

const Channels = styled(motion.ul)`
  position: relative;
  list-style: none;
  margin-top: clamp(3.5rem, 2rem + 5vw, 7rem);
  border-top: 1px solid ${LINE};
`;

const Row = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: minmax(7rem, 1fr) minmax(0, 2fr) auto;
  align-items: center;
  gap: 1rem;
  padding: clamp(1.1rem, 0.9rem + 0.8vw, 1.6rem) 0;
  border-bottom: 1px solid ${LINE};
  color: ${INK};
  text-decoration: none;
  isolation: isolate;

  /* a soft fill sweeps in from the left on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0 calc(-1 * clamp(0.75rem, 2vw, 1.5rem));
    z-index: -1;
    border-radius: 2px;
    background: rgba(236, 236, 236, 0.05);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s var(--ease-out-expo);
  }

  .label {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 1.1rem + 1.4vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    transition: transform 0.6s var(--ease-out-expo);
  }

  .handle {
    color: ${MUTED};
    font-size: var(--text-sm);
    transition: color var(--duration-normal) ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .arrow {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2px;
    border: 1px solid ${LINE};
    transition: transform 0.6s var(--ease-out-expo), background-color var(--duration-normal) ease,
      color var(--duration-normal) ease, border-color var(--duration-normal) ease;
  }

  &:hover::before,
  &:focus-visible::before {
    transform: scaleX(1);
  }

  &:hover .label,
  &:focus-visible .label {
    transform: translateX(0.5rem);
  }

  &:hover .handle,
  &:focus-visible .handle {
    color: ${INK};
  }

  &:hover .arrow,
  &:focus-visible .arrow {
    background: var(--color-amber);
    border-color: var(--color-amber);
    color: #111111;
    transform: rotate(45deg);
  }

  &:focus-visible {
    outline: none;
  }

  @media ${MOBILE} {
    grid-template-columns: minmax(0, 1fr) auto;

    .handle {
      grid-row: 2;
      grid-column: 1;
    }

    .arrow {
      grid-row: 1 / span 2;
      grid-column: 2;
    }
  }
`;

const Footer = styled.footer`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem) 0;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: ${MUTED};

  .time {
    font-variant-numeric: tabular-nums;
  }
`;

const ToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${INK};
  text-decoration: none;

  svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &:hover svg {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid ${INK};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

/* Hermeus-style footer wordmark: the name set edge to edge, cropped by the panel */
const Wordmark = styled.p`
  margin: 0 calc(-1 * (max(var(--space-gutter), (100vw - var(--content-max)) / 2) - ${PANEL_INSET}));
  margin-bottom: -0.2em;
  padding: 0 clamp(8px, 1vw, 16px);
  font-family: var(--font-condensed);
  font-size: clamp(3.5rem, 13.2vw, 15rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 236, 236, 0.22);
  user-select: none;
  overflow: hidden;
`;

export default Contact;
