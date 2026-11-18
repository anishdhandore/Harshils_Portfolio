import React, { useId } from 'react';
import styled from 'styled-components';
import { WingMark } from '../navbar/Logo';

export const CARD_ACCENT = '#f2a500';
const CARD_INK = '#111111';
const GLASS_INK = '#ececec';

/**
 * Back: a graphite file cover with a drafting grid, a title block in the
 * corner (like a technical drawing) and the flying-wing mark.
 */
export const CardBack = () => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const grid = `grid-${uid}`;
  return (
    <Face $isBack aria-hidden="true" data-card-back>
      <svg viewBox="0 0 100 140" preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <pattern id={grid} width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M5 0H0V5" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="100" height="140" fill="#1a1b1e" />
        <rect width="100" height="140" fill={`url(#${grid})`} />
        {/* drawing border and title block */}
        <rect x="5" y="5" width="90" height="130" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.5" />
        <path d="M55 118H95M55 118V135M75 118V135" stroke="#ffffff" strokeWidth="0.3" opacity="0.5" />
        {/* amber index tab */}
        <rect x="5" y="5" width="16" height="6" fill={CARD_ACCENT} />
      </svg>
      <BackMark>
        <WingMark size={64} />
      </BackMark>
    </Face>
  );
};

/**
 * Front: one image of the aircraft fills the card. The name is a slim caption
 * along the bottom; when the card is picked (`isActive`) it grows into a teaser.
 */
export const CardFront = ({ project, headingId, isActive, isDimmed }) => {
  const { index, name, year, hook, kind, screen } = project;
  return (
    <Face as="article" aria-labelledby={headingId} data-active={isActive} $isFront>
      <Screen src={screen} alt="" loading="lazy" decoding="async" aria-hidden="true" />
      <Tint aria-hidden="true" />

      <Tab aria-hidden="true">{index}</Tab>
      <Kind>{kind}</Kind>

      <Glass>
        <Name id={headingId}>{name}</Name>
        <Year>{year}</Year>
        <Reveal>
          <RevealInner>
            <Hook>{hook}</Hook>
            <Cue aria-hidden="true">
              Open file <Arrow>→</Arrow>
            </Cue>
          </RevealInner>
        </Reveal>
      </Glass>

      <Shade aria-hidden="true" $isOn={isDimmed} />
    </Face>
  );
};

const ACTIVE = "[data-active='true'] &";
const EASE_OUT = 'var(--ease-out-expo)';

const Face = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: var(--card-radius);
  background: ${({ $isFront }) => ($isFront ? '#0c0c0e' : '#1a1b1e')};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  color: ${GLASS_INK};
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: ${({ $isBack }) => ($isBack ? 'rotateY(180deg)' : 'none')};
`;

const BackMark = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: ${CARD_ACCENT};

  svg {
    width: 42%;
    height: auto;
  }
`;

const Screen = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 0.9s ${EASE_OUT};

  ${ACTIVE} {
    transform: scale(1.07);
  }
`;

const Tint = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 10, 12, 0.25), transparent 30%, transparent 55%, rgba(10, 10, 12, 0.55));
`;

/* amber file tab, top left */
const Tab = styled.span`
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 4%;
  padding: 0.35em 0.55em;
  background: ${CARD_ACCENT};
  color: ${CARD_INK};
  font: 700 max(calc(var(--card-width) * 0.06), 11px) / 1 var(--font-body);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
`;

const Kind = styled.span`
  position: absolute;
  z-index: 2;
  right: 5%;
  top: 4%;
  padding: 0.45em 0.7em;
  background: rgba(17, 17, 17, 0.78);
  color: ${GLASS_INK};
  font-size: max(calc(var(--card-width) * 0.04), 8px);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
`;

const Glass = styled.div`
  position: absolute;
  z-index: 2;
  left: 5%;
  right: 5%;
  bottom: 4%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  column-gap: 0.6em;
  padding: 5.5% 7%;
  border-radius: 2px;
  /* near-solid dark glass: backdrop-filter doesn't render inside the 3D card flip */
  background: linear-gradient(180deg, rgba(30, 31, 34, 0.95), rgba(14, 15, 17, 0.97));
  border-top: 2px solid ${CARD_ACCENT};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  font-size: max(calc(var(--card-width) * 0.048), 9.5px);
`;

const Name = styled.h3`
  min-width: 0;
  font-family: var(--font-display);
  font-size: 1.3em;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Year = styled.p`
  color: rgba(236, 236, 236, 0.6);
  font-size: 0.9em;
  font-variant-numeric: tabular-nums;

  @media (max-width: 639px) {
    display: none;
  }
`;

/* collapsed to zero height until the card is picked, then unfolds */
const Reveal = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.5s ${EASE_OUT}, opacity 0.3s ease;

  ${ACTIVE} {
    grid-template-rows: 1fr;
    opacity: 1;
  }
`;

const RevealInner = styled.div`
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  padding-top: 0.7em;
  margin-top: 0.7em;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

const Hook = styled.p`
  line-height: 1.4;
  color: rgba(236, 236, 236, 0.88);
`;

const Cue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  margin-top: 0.35em;
  padding: 0.5em 0.9em;
  background: ${GLASS_INK};
  color: ${CARD_INK};
  font-size: 0.85em;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
`;

const Arrow = styled.span`
  display: inline-block;
  transform: translateX(-0.3em);
  transition: transform 0.6s ${EASE_OUT} 0.1s;

  ${ACTIVE} {
    transform: translateX(0.15em);
  }
`;

/* dims the cards that aren't picked */
const Shade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  border-radius: inherit;
  background: #000000;
  opacity: ${({ $isOn }) => ($isOn ? 0.5 : 0)};
  transition: opacity 0.35s ease;
  pointer-events: none;
`;
