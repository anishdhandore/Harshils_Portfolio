import React from 'react';
import styled from 'styled-components';
import SectionLabel from '../ui/SectionLabel';
import shakerPhoto from '../../images/potentiometer-shaker.webp';

const EnvironmentalTesting = () => (
  <Section id="environmental-testing" aria-labelledby="environmental-testing-heading">
    <Content>
      <div>
        <SectionLabel tone="night">Featured testing</SectionLabel>
        <Title id="environmental-testing-heading">Environmental qualification testing</Title>
        <Role>Environmental Test Engineering Intern · Sensor Systems LLC · June–August 2026</Role>
        <Summary>
          I tested precision potentiometers used in aerospace and defense applications to
          evaluate their mechanical durability and electrical stability.
        </Summary>
        <Methods>
          <div>
            <dt>Multi-axis vibration</dt>
            <dd>
              Ran three-hour cycles across the X, Y and Z axes. I used a shaker,
              accelerometers and data acquisition equipment to monitor the assembly’s
              mechanical response and electrical output under vibration.
            </dd>
          </div>
          <div>
            <dt>Clutch-release timing</dt>
            <dd>
              Used controlled-speed actuation and high-speed timing instruments to measure
              how quickly clutched assemblies released and evaluate overtravel protection.
            </dd>
          </div>
          <div>
            <dt>Full-travel linearity</dt>
            <dd>
              Used precision actuators, digital multimeters, oscilloscopes and automated
              logging to check output across the full stroke. I looked for signal
              discontinuities and compared the response with customer specifications.
            </dd>
          </div>
        </Methods>
        <Applications>
          <h3>Aircraft applications</h3>
          <p>
            A potentiometer converts motion into a voltage that varies with position.
            Aircraft systems can use that signal to monitor the position of moving components.
          </p>
        </Applications>
      </div>

      <ShakerImage
        src={shakerPhoto}
        alt="Machined aluminum fixture with circuit boards and an accelerometer on a blue shaker"
        width="1400"
        height="788"
        loading="lazy"
      />
    </Content>
  </Section>
);

const Section = styled.section`
  background: #000;
  color: var(--color-night-ink);
`;

const Content = styled.div`
  --testing-muted: #c4c4c4;
  width: min(calc(100% - 2 * var(--space-gutter)), var(--content-max));
  margin-inline: auto;
  padding-block: var(--space-section);
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  align-items: start;
  gap: clamp(2rem, 6vw, 6rem);

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 2.6vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
`;

const Role = styled.p`
  margin-top: 1rem;
  color: var(--testing-muted);
  font-size: var(--text-sm);
`;

const Summary = styled.p`
  margin-top: 1.25rem;
  line-height: 1.5;
  color: var(--testing-muted);
`;

const Methods = styled.dl`
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-amber);

  dt { font-weight: 700; }
  dd {
    margin-top: 0.25rem;
    line-height: 1.5;
    color: var(--testing-muted);
  }
`;

const Applications = styled.div`
  margin-top: 1.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-night-line);

  h3 { font-size: var(--text-base); }
  p {
    margin-top: 0.4rem;
    line-height: 1.5;
    color: var(--testing-muted);
  }
`;

const ShakerImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);

  @media (min-width: 900px) {
    align-self: center;
  }
`;

export default EnvironmentalTesting;
