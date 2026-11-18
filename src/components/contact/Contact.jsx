// Contact as an air-traffic-control strip board: each way to reach Harshil is
// a flight progress strip that slides along the board on hover. Light section,
// followed by a hermeus.com-style footer with a full-width wordmark.
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import FlightStrip from './FlightStrip';
import SiteFooter from './SiteFooter';
import SectionLabel from '../ui/SectionLabel';
import CopyEmailButton from '../hero/CopyEmailButton';
import { AVAILABILITY, EMAIL, RESUME_URL, SOCIALS } from '../hero/heroContent';

const EASE = [0.16, 1, 0.3, 1];
const hrefOf = (label) => SOCIALS.find((s) => s.label === label).href;

/** Strips on the board, top to bottom. */
const STRIPS = [
  { id: 'li', callsign: 'LinkedIn', handle: 'in/harshilpatel2060', href: hrefOf('LinkedIn'), action: 'Open', external: true },
  { id: 'gh', callsign: 'GitHub', handle: 'patelharshil2060', href: hrefOf('GitHub'), action: 'Open', external: true },
  { id: 'cv', callsign: 'Résumé', handle: 'HarshilPatelResume.pdf', href: RESUME_URL, action: 'View', external: true },
];

const rise = (delay) => ({
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: EASE } },
});

// strips are "handed over" onto the board from the right, one by one
const slideIn = (delay) => ({
  hidden: { opacity: 0, x: 60 },
  shown: { opacity: 1, x: 0, transition: { delay, duration: 0.9, ease: EASE } },
});

const inView = { once: true, margin: '-15% 0px' };

const Contact = () => {
  const isReduced = Boolean(useReducedMotion());
  const hidden = isReduced ? false : 'hidden';

  return (
    <>
      <Section id="contact" aria-labelledby="contact-heading">
        <Inner initial={hidden} whileInView="shown" viewport={inView}>
          <Lead>
            <motion.div variants={rise(0)}>
              <SectionLabel index="05">Contact</SectionLabel>
            </motion.div>
            <Headline id="contact-heading" variants={rise(0.08)}>
              Cleared for <em>contact.</em>
            </Headline>
            <Note variants={rise(0.16)}>
              Working on aircraft design, flight test or analysis? I’d like to hear about it.
            </Note>
            <Status variants={rise(0.22)}>
              <Light aria-hidden="true" />
              {AVAILABILITY}
            </Status>
          </Lead>

          <Board aria-label="Ways to get in touch">
            <BoardHead variants={rise(0.1)} aria-hidden="true">
              <span>Strip board</span>
              <span>San Diego · {STRIPS.length + 1} channels open</span>
            </BoardHead>

            <motion.li variants={slideIn(0.15)}>
              <FlightStrip channel="01" callsign="Email" handle={EMAIL} isPrimary>
                <CopyEmailButton email={EMAIL} label="Copy" />
                <a className="write" href={`mailto:${EMAIL}`}>
                  Write
                </a>
              </FlightStrip>
            </motion.li>

            {STRIPS.map(({ id, callsign, handle, href, action, external }, i) => (
              <motion.li key={id} variants={slideIn(0.25 + i * 0.1)}>
                <FlightStrip
                  channel={String(i + 2).padStart(2, '0')}
                  callsign={callsign}
                  handle={handle}
                  href={href}
                  action={action}
                  external={external}
                />
              </motion.li>
            ))}
          </Board>
        </Inner>
      </Section>
      <SiteFooter />
    </>
  );
};

const Section = styled.section`
  /* strips wait offscreen-right before sliding in; don't let them widen the page */
  overflow-x: clip;
  padding: var(--space-section) var(--space-gutter);
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
`;

const Inner = styled(motion.div)`
  max-width: var(--content-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 1rem + 4vw, 5rem);
  align-items: start;

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Lead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
`;

const Headline = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 1.6rem + 4vw, 5.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;

  em {
    font-style: normal;
    color: var(--color-ink-muted);
  }
`;

const Note = styled(motion.p)`
  max-width: 36ch;
  font-size: var(--text-lead);
  line-height: 1.5;
  color: var(--color-ink-soft);
`;

const Status = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);
`;

const Light = styled.i`
  width: 7px;
  height: 7px;
  background: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(242, 165, 0, 0.18);
`;

/* the strip board: a rail the strips sit in */
const Board = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem;
  border: 1px solid var(--color-line);
  background:
    repeating-linear-gradient(180deg, transparent 0 calc(4.5rem - 1px), rgba(17, 17, 17, 0.05) calc(4.5rem - 1px) 4.5rem),
    #e2e2e2;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.06);
`;

const BoardHead = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.25rem 0.4rem;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span:first-child {
    color: var(--color-ink);
    font-weight: 700;
  }
`;

export default Contact;
