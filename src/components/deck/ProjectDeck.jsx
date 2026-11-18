import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import DeckCard from './DeckCard';
import { dealLayout, gridCardSize } from './dealLayout';
import { PROJECTS } from './projects';
import SectionLabel from '../ui/SectionLabel';

const DEAL_RANGE = [0.14, 0.72];
const SCROLL_SPRING = { stiffness: 120, damping: 26, restDelta: 0.0005 };
const CARD_RATIO = 7 / 5; // card, portrait
const NARROW_STAGE_PX = 640;
const FALLBACK_STAGE = { width: 1200, height: 600 };

/** Card size and layout: ~22% of a wide stage, or the biggest grid that fits a narrow one. */
const cardLayoutFor = ({ width, height }) => {
  if (width < NARROW_STAGE_PX) {
    return gridCardSize({ count: PROJECTS.length, width, height, ratio: CARD_RATIO, maxWidth: 260 });
  }
  const cardWidth = Math.round(Math.max(140, Math.min(290, width * 0.22, (height * 0.78) / CARD_RATIO)));
  return { cardWidth, cardHeight: Math.round(cardWidth * CARD_RATIO), columns: undefined };
};

const useStageSize = (ref) => {
  const [size, setSize] = useState(FALLBACK_STAGE);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return size;
};

const ProjectDeck = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const isReducedMotion = Boolean(useReducedMotion());
  const stage = useStageSize(stageRef);
  const { cardWidth, cardHeight, columns } = cardLayoutFor(stage);
  const spots = dealLayout({ count: PROJECTS.length, stageWidth: stage.width, cardWidth, cardHeight, columns });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, SCROLL_SPRING);
  const dealtForever = useMotionValue(1);
  const progress = isReducedMotion ? dealtForever : smooth;

  // re-render only when the whole hand has landed (enables hover + links)
  const [isDealt, setIsDealt] = useState(isReducedMotion);
  useMotionValueEvent(progress, 'change', (p) => setIsDealt(p >= DEAL_RANGE[1]));

  // the card being "picked" from the hand (hover or keyboard focus)
  const [pickedIndex, setPickedIndex] = useState(null);
  useEffect(() => {
    if (!isDealt) setPickedIndex(null);
  }, [isDealt]);
  const hintOpacity = useTransform(progress, [0, DEAL_RANGE[0] * 0.6, DEAL_RANGE[0]], [1, 1, 0]);

  return (
    <Section id="projects" ref={sectionRef} aria-labelledby="projects-heading" data-scroll-to="end">
      <Sticky>
        <Header>
          <SectionLabel index="03" tone="night">Project files</SectionLabel>
          <Title id="projects-heading">Two airframes, end to end</Title>
          <Lede>From mission requirements to sizing, stability and hardware.</Lede>
        </Header>

        <Stage
          ref={stageRef}
          style={{
            '--card-width': `${cardWidth}px`,
            '--card-height': `${cardHeight}px`,
            '--card-radius': '3px',
          }}
        >
          {PROJECTS.map((project, i) => (
            <DeckCard
              key={project.name}
              project={project}
              index={i}
              count={PROJECTS.length}
              progress={progress}
              spot={spots[i]}
              dealRange={DEAL_RANGE}
              isDealt={isDealt}
              pick={pickedIndex === null ? 'none' : pickedIndex === i ? 'picked' : 'other'}
              side={pickedIndex === null ? 0 : Math.sign(i - pickedIndex)}
              onPick={setPickedIndex}
            />
          ))}
          {!isReducedMotion && <Hint style={{ opacity: hintOpacity }}>Scroll to open the files</Hint>}
        </Stage>
      </Sticky>
    </Section>
  );
};

const MOBILE_QUERY = '(max-width: 899px)';
const PANEL_INSET = 'clamp(8px, 1vw, 16px)';
const TABLE_INK = '#ececec';

// Fine concrete grain for the hangar floor, generated once (SVG turbulence)
const GRAIN = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"/></filter><rect width="100%" height="100%" filter="url(#f)"/></svg>'
)}")`;

const Section = styled.section`
  position: relative;
  height: 260vh;
  margin: 0 ${PANEL_INSET};
  border-radius: var(--radius-panel);
  background: var(--color-night);
  color: ${TABLE_INK};
  font-family: var(--font-body);
  overflow: clip;
  overflow-anchor: none;

`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100svh;
  display: flex;
  flex-direction: column;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(1rem, 3vh, 2.5rem))
    calc(max(var(--space-gutter), (100vw - var(--content-max)) / 2) - ${PANEL_INSET})
    clamp(1.5rem, 5vh, 3rem);

  /* hangar floodlight, a drafting grid and floor grain */
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background:
      radial-gradient(ellipse 55% 50% at 50% 58%, rgba(255, 255, 255, 0.1), transparent 70%),
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px) 0 0 / 100% 64px,
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px) 0 0 / 64px 100%;
  }

  &::after {
    background-image: ${GRAIN};
    opacity: 0.06;
    mix-blend-mode: overlay;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 2.6vw, 4rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
`;

const Lede = styled.p`
  color: rgba(236, 236, 236, 0.62);

  @media ${MOBILE_QUERY} {
    font-size: var(--text-sm);
  }
`;

const Stage = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  margin-top: clamp(1rem, 3vh, 2rem);
`;

const Hint = styled(motion.p)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: rgba(236, 236, 236, 0.55);
  pointer-events: none;
`;

export default ProjectDeck;
