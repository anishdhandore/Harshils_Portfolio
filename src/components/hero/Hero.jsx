// Hero: a telemetry strip; "I'm Harshil Patel." with a statement and actions
// on the left; Harshil flying his plane on the right; and a spec
// strip along the bottom.
//
// Choreography (seconds): telemetry 0 → name letters focus in 0.15–0.8 →
// orbit swoosh draws under the name 0.75–1.85 → statement words 0.9–1.5 →
// lede, actions, socials → specs. The plane flies in alongside from 0.3.
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import TelemetryBar from './TelemetryBar';
import HeroFlyer from './HeroFlyer';
import CopyEmailButton from './CopyEmailButton';
import { EMAIL, GREETING, HEADLINE, KICKER, LEDE, RESUME_URL, SOCIALS, SPECS } from './heroContent';

const EASE = [0.16, 1, 0.3, 1];
const NAME_START = 0.15;
const LETTER_STAGGER = 0.032;
const WORD_STAGGER = 0.045;

const nameLetters = [...GREETING.name];
const nameEnd = NAME_START + 0.25 + nameLetters.length * LETTER_STAGGER;
const SWOOSH_START = nameEnd - 0.05;
const STATEMENT_START = nameEnd + 0.1;
const words = HEADLINE.split(' ');
const headlineEnd = STATEMENT_START + words.length * WORD_STAGGER;

const fade = (delay) => ({
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: EASE } },
});

// Letters of the name come into focus and settle, like hermeus.com's blurred title
const letterIn = (index) => ({
  hidden: { opacity: 0, y: '0.35em', filter: 'blur(12px)' },
  shown: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { delay: NAME_START + 0.25 + index * LETTER_STAGGER, duration: 0.9, ease: EASE },
  },
});

// Statement words focus in place (no rise)
const focusIn = (index) => ({
  hidden: { opacity: 0, filter: 'blur(10px)' },
  shown: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { delay: STATEMENT_START + index * WORD_STAGGER, duration: 0.9, ease: EASE },
  },
});

// The orbit swoosh from his logo draws itself under the name, then its
// tip (a small amber craft) arrives at the end of the arc
const swooshDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: SWOOSH_START, duration: 1.1, ease: [0.65, 0, 0.35, 1] }, opacity: { delay: SWOOSH_START, duration: 0.2 } },
  },
};

const swooshTip = {
  hidden: { opacity: 0, scale: 0 },
  shown: { opacity: 1, scale: 1, transition: { delay: SWOOSH_START + 1, duration: 0.5, ease: EASE } },
};

/**
 * @param {{ imageSrc?: string, imageAlt?: string, label?: object, hotspots?: object[] }} props
 */
/**
 * @param {{ flyerSrc?: string, flyerStill?: string, flyerAlt?: string }} props
 */
const Hero = ({ flyerSrc, flyerStill, flyerAlt = '' }) => {
  const isReduced = useReducedMotion();

  return (
    <Section id="home" aria-labelledby="hero-heading">
      <Inner initial={isReduced ? false : 'hidden'} animate="shown">
        <motion.div variants={fade(0)}>
          <TelemetryBar />
        </motion.div>

        <Stage>
          <Copy>
            <Kicker variants={fade(0.1)}>{KICKER}</Kicker>

            <Name id="hero-heading" aria-label={`${GREETING.lead} ${GREETING.name}.`}>
              <motion.span className="lead" variants={letterIn(-3)} aria-hidden="true">
                {GREETING.lead}
              </motion.span>
              <span className="full" aria-hidden="true">
                {nameLetters.map((ch, i) =>
                  ch === ' ' ? (
                    <span key={i} className="space">
                      {' '}
                    </span>
                  ) : (
                    <motion.span key={i} className="ch" variants={letterIn(i)}>
                      {ch}
                    </motion.span>
                  )
                )}
                <motion.span className="ch dot" variants={letterIn(nameLetters.length)}>
                  .
                </motion.span>
                <Swoosh viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="hero-swoosh" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#3fa2f7" stopOpacity="0.15" />
                      <stop offset="0.45" stopColor="#3fa2f7" />
                      <stop offset="1" stopColor="#f2a500" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M4 46 C 150 62, 380 54, 590 10"
                    fill="none"
                    stroke="url(#hero-swoosh)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    variants={swooshDraw}
                  />
                </Swoosh>
                <Tip variants={swooshTip} />
              </span>
            </Name>

            <Statement>
              {words.map((word, i) => (
                <React.Fragment key={`${word}-${i}`}>
                  <motion.span variants={focusIn(i)}>{word}</motion.span>{' '}
                </React.Fragment>
              ))}
            </Statement>

            <Lede variants={fade(headlineEnd)}>{LEDE}</Lede>

            <Actions variants={fade(headlineEnd + 0.1)}>
              <CopyEmailButton email={EMAIL} />
              <OutlineLink href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                View CV <FiArrowDownRight aria-hidden="true" />
              </OutlineLink>
            </Actions>

            <Socials variants={fade(headlineEnd + 0.18)} aria-label="Social profiles">
              {SOCIALS.map(({ label: name, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                  {name} <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </Socials>
          </Copy>

          <RenderSlot>
            <HeroFlyer src={flyerSrc} still={flyerStill} alt={flyerAlt} />
          </RenderSlot>
        </Stage>

        <SpecBlock variants={fade(headlineEnd + 0.25)} aria-label="Nimbus V4 design specifications">
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
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100svh;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(1rem, 0.75rem + 1vw, 1.75rem))
    var(--space-gutter) clamp(2rem, 1.5rem + 2vw, 3.5rem);
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  overflow-x: clip;
`;

const Inner = styled(motion.div)`
  max-width: var(--content-max);
  margin: 0 auto;
  min-height: calc(100svh - var(--nav-offset) - var(--nav-height) - 4rem);
  display: flex;
  flex-direction: column;
`;

const Stage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  align-items: center;
  gap: clamp(1.5rem, 1rem + 3vw, 4rem);
  padding: clamp(2rem, 1rem + 4vw, 5rem) 0 clamp(1.5rem, 1rem + 2vw, 3rem);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1.1rem, 0.9rem + 0.8vw, 1.6rem);
`;

const Kicker = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  &::before {
    content: '';
    width: 2rem;
    height: 2px;
    background: var(--color-amber);
  }
`;

const Name = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.95;

  .lead {
    display: inline-block;
    font-size: clamp(1.4rem, 1.1rem + 1.2vw, 2.2rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--color-ink-soft);
  }

  .full {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    padding-bottom: 0.32em; /* room for the swoosh */
    font-size: clamp(2.9rem, 1.5rem + 4.1vw, 5.1rem);
    white-space: nowrap;
  }

  .ch {
    display: inline-block;
  }

  .space {
    display: inline-block;
    width: 0.24em;
  }

  .dot {
    color: var(--color-amber);
  }

  @media (max-width: 420px) {
    .full {
      white-space: normal;
    }
  }
`;

const Swoosh = styled.svg`
  position: absolute;
  left: -2%;
  right: -4%;
  bottom: 0;
  width: 106%;
  height: 0.42em;
  overflow: visible;
  pointer-events: none;
`;

/* the craft at the end of the orbit: an amber chevron, like the wing mark */
const Tip = styled(motion.span)`
  position: absolute;
  right: -4.5%;
  bottom: 0.27em;
  width: 0.16em;
  height: 0.16em;
  background: var(--color-amber);
  clip-path: polygon(50% 0, 100% 100%, 50% 72%, 0 100%);
  transform-origin: center;
  rotate: 62deg;
`;

const Statement = styled.p`
  max-width: 22ch;
  font-family: var(--font-display);
  font-size: clamp(1.45rem, 1.05rem + 1.4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  text-wrap: balance;

  span {
    display: inline-block;
  }
`;

const Lede = styled(motion.p)`
  max-width: 40ch;
  font-size: var(--text-lead);
  line-height: 1.5;
  color: var(--color-ink-soft);
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.4rem;
`;

/* outlined counterpart to the filled email button */
const OutlineLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 1.1rem;
  border: 1px solid var(--color-ink);
  border-radius: var(--radius-control);
  color: var(--color-ink);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color var(--duration-fast) ease, color var(--duration-fast) ease,
    transform var(--duration-fast) var(--ease-out-expo);

  svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &:hover {
    background: var(--color-amber);
    border-color: var(--color-amber);
  }

  &:hover svg {
    transform: translate(2px, 2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`;

const Socials = styled(motion.nav)`
  display: flex;
  gap: 1.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-ink-soft);
    font-size: var(--text-sm);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
  }

  a:hover {
    color: var(--color-ink);
    border-color: var(--color-amber);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`;

const RenderSlot = styled.div`
  /* let the aircraft run past the content edge toward the viewport edge */
  margin-right: calc(-1 * min(var(--space-gutter), 4rem));

  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

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

const SpecBlock = styled(motion.section)`
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

export default Hero;
