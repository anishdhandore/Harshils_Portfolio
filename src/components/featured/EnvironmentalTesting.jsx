import React from 'react';
import styled from 'styled-components';
import SectionLabel from '../ui/SectionLabel';
import shakerPhoto from '../../images/potentiometer-shaker.webp';
import workflowImage from '../../images/potentiometer-workflow.webp';

const EnvironmentalTesting = () => (
  <Section aria-labelledby="environmental-testing-heading">
    <div>
      <SectionLabel>Featured testing</SectionLabel>
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
          In aircraft, these sensors can report flap or trim position to an avionics
          display, or track throttle lever position in an autothrottle system.
        </p>
        <p>
          Examples · <a href="https://www.dynoncertified.com/downloads/documentation/general/SkyView_HDX_System_Installation_Manual_Rev_T.pdf">Flap and trim sensing</a>
          {' · '}<a href="https://patents.google.com/patent/US11027854B2">Throttle lever sensing</a>
        </p>
      </Applications>
    </div>

    <Gallery>
      <Figure>
        <img src={shakerPhoto} alt="Machined aluminum fixture with circuit boards and an accelerometer on a blue shaker" width="1400" height="788" loading="lazy" />
        <figcaption>Shaker fixture and instrumentation</figcaption>
      </Figure>
      <Figure>
        <img src={workflowImage} alt="Shaker fixture connected to a data acquisition module and a display with two signal traces" width="1350" height="900" loading="lazy" />
        <figcaption>
          Vibration test workflow · Illustrative potentiometer and accelerometer traces
        </figcaption>
      </Figure>
    </Gallery>
  </Section>
);

const Section = styled.section`
  width: min(calc(100% - 2 * var(--space-gutter)), var(--content-max));
  margin-inline: auto;
  padding-block: var(--space-section);
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  align-items: start;
  gap: clamp(2rem, 6vw, 6rem);
  border-bottom: 1px solid var(--color-line);

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
  color: var(--color-ink-soft);
  font-size: var(--text-sm);
`;

const Summary = styled.p`
  margin-top: 1.25rem;
  line-height: 1.5;
  color: var(--color-ink-soft);
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
    color: var(--color-ink-soft);
  }
`;

const Applications = styled.div`
  margin-top: 1.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-line);

  h3 { font-size: var(--text-base); }
  p {
    margin-top: 0.4rem;
    line-height: 1.5;
    color: var(--color-ink-soft);
  }
  p:last-child { font-size: var(--text-sm); }
  a {
    color: inherit;
    text-underline-offset: 0.2em;
  }
`;

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
`;

const Figure = styled.figure`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-card);
    background: var(--color-surface);
  }

  figcaption {
    margin-top: 0.5rem;
    color: var(--color-ink-soft);
    font-size: var(--text-sm);
    line-height: 1.4;
  }

`;

export default EnvironmentalTesting;
