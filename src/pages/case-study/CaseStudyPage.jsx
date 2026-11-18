// A project case study: name and outcome, the facts (role, team, timeline),
// renders on a dark band, then the engineering story and the evidence.
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'motion/react';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import Plate from './Plate';
import { Built, Evidence, Flow, NextProject, Photos, Problem, Results, Status } from './CaseSections';
import { findCaseStudy, nextCaseStudy } from './caseStudies';
import { FULL_NAME } from '../../components/hero/heroContent';

const EASE = [0.16, 1, 0.3, 1];

const rise = (delay, isReduced) => ({
  initial: isReduced ? false : { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: EASE, delay },
});

const CaseStudyPage = ({ slug }) => {
  const study = findCaseStudy(slug);
  const isReduced = Boolean(useReducedMotion());

  useEffect(() => {
    document.title = study ? `${study.name} · ${FULL_NAME}` : FULL_NAME;
    return () => {
      document.title = FULL_NAME;
    };
  }, [study]);

  if (!study) {
    return (
      <Page>
        <Header>
          <Back href="/#projects">
            <FiArrowLeft aria-hidden="true" /> All projects
          </Back>
          <Title>Project not found</Title>
          <Outcome>That page doesn’t exist. Pick a project from the files instead.</Outcome>
        </Header>
      </Page>
    );
  }

  const { name, outcome, meta, links, hero } = study;

  return (
    <Page>
      <Header>
        <Back href="/#projects">
          <FiArrowLeft aria-hidden="true" /> All projects
        </Back>
        <TitleRow>
          <motion.div {...rise(0, isReduced)}>
            <Title>{name}</Title>
          </motion.div>
          <motion.div {...rise(0.08, isReduced)}>
            <Outcome>{outcome}</Outcome>
            <Meta>
              {meta.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </Meta>
            <Links>
              {links.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                  {label} <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </Links>
          </motion.div>
        </TitleRow>
      </Header>

      <Hero aria-label={`${name} renders`}>
        <motion.div className="main" {...rise(0.15, isReduced)}>
          <Plate {...hero.main} tone="night" eager />
        </motion.div>
        {hero.side.map((media, i) => (
          <motion.div key={media.caption} className="side" {...rise(0.28 + i * 0.12, isReduced)}>
            <Plate {...media} tone="night" />
          </motion.div>
        ))}
      </Hero>

      <Problem text={study.problem} />
      <Built items={study.built} />
      <Flow steps={study.flow} />
      <Results items={study.results} />
      <Evidence items={study.evidence} />
      <Photos items={study.photos} />
      <Status text={study.status} />
      <NextProject study={nextCaseStudy(slug)} />
      <Spacer />
    </Page>
  );
};

const Page = styled.main`
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
`;

const Header = styled.header`
  max-width: var(--content-max);
  margin: 0 auto;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(1.5rem, 1rem + 2vw, 3rem)) var(--space-gutter) 0;
  box-sizing: content-box;
`;

const Back = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-ink-soft);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-decoration: none;
  transition: color var(--duration-fast) ease;

  &:hover {
    color: var(--color-ink);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(1.5rem, 1rem + 3vw, 4rem);
  margin-top: clamp(1.5rem, 1rem + 2vw, 3rem);

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(3rem, 1.5rem + 5vw, 6.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;
`;

const Outcome = styled.p`
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 1.05rem + 1vw, 1.85rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
  max-width: 30ch;
`;

const Meta = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 2rem;
  margin-top: clamp(1.5rem, 1rem + 1.5vw, 2.25rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);

  dt {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  dd {
    margin-top: 0.3rem;
    line-height: 1.4;
  }

  @media (max-width: 479px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.75rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.8rem 1.1rem;
    border-radius: var(--radius-control);
    background: var(--color-ink);
    color: var(--color-paper);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color var(--duration-fast) ease, transform var(--duration-fast) var(--ease-out-expo);
  }

  a:hover {
    background: #2b2b2b;
  }

  a:active {
    transform: scale(0.97);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`;

/* renders on a dark band: the main view large, two supporting views beside it */
const Hero = styled.section`
  margin: clamp(2.5rem, 2rem + 3vw, 4.5rem) clamp(8px, 1vw, 16px) 0;
  padding: clamp(2rem, 1.5rem + 3vw, 4.5rem) var(--space-gutter);
  border-radius: var(--radius-panel);
  background:
    radial-gradient(ellipse 55% 60% at 35% 40%, rgba(242, 165, 0, 0.08), transparent 70%),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 64px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 64px 100%,
    var(--color-night);
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  grid-template-rows: auto auto;
  gap: clamp(1rem, 0.5rem + 2vw, 2rem);
  align-content: start;

  .main {
    grid-row: 1 / span 2;
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    .main {
      grid-row: auto;
    }
  }
`;

const Spacer = styled.div`
  height: clamp(3rem, 2rem + 4vw, 6rem);
`;

export default CaseStudyPage;
