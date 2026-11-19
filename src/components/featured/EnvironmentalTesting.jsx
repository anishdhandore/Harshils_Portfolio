import React from 'react';
import styled from 'styled-components';
import SectionLabel from '../ui/SectionLabel';
import shakerPhoto from '../../images/environmental-vibration.jpg';
import accelerometerPhoto from '../../images/environmental-instrumentation.jpg';

const EnvironmentalTesting = () => (
  <Section aria-labelledby="environmental-testing-heading">
    <div>
      <SectionLabel>Featured testing</SectionLabel>
      <Title id="environmental-testing-heading">Environmental qualification testing</Title>
      <Role>Test Engineering Intern · Sensor Systems LLC · June–August 2026</Role>
      <Summary>
        I tested aerospace components on a shaker and checked how their electrical outputs
        responded during bench verification.
      </Summary>
      <Methods>
        <div>
          <dt>Vibration qualification</dt>
          <dd>
            Mounted components on shaker fixtures and ran three-hour test cycles across
            the X, Y and Z axes. I used accelerometers and a data acquisition system to
            record the mechanical response.
          </dd>
        </div>
        <div>
          <dt>Electrical verification</dt>
          <dd>
            Used oscilloscopes and digital multimeters to check output and linearity,
            and logged the measurements.
          </dd>
        </div>
      </Methods>
    </div>

    <Gallery>
      <Figure>
        <img src={shakerPhoto} alt="NASA MMS magnetometer boom mounted on a shaker table" loading="lazy" />
        <figcaption>
          Shaker fixture reference · <a href="https://mms.gsfc.nasa.gov/spacecraft_assembly/mechanical/mechanical_03.html">NASA Goddard</a>
        </figcaption>
      </Figure>
      <Figure>
        <img src={accelerometerPhoto} alt="Engineers attaching an accelerometer to a Europa Clipper instrument" loading="lazy" />
        <figcaption>
          Accelerometer installation reference · <a href="https://science.nasa.gov/missions/europa-clipper/europa-clipper-resources/plasma-instrument-vibration-testing/">Johns Hopkins APL / Craig Weiman</a>
        </figcaption>
      </Figure>
    </Gallery>
  </Section>
);

const Section = styled.section`
  width: min(100% - 2 * var(--space-gutter), var(--content-max));
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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Figure = styled.figure`
  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: var(--radius-card);
    background: var(--color-surface);
  }

  figcaption {
    margin-top: 0.5rem;
    color: var(--color-ink-soft);
    font-size: var(--text-sm);
    line-height: 1.4;
  }

  a {
    color: inherit;
    text-underline-offset: 0.2em;
  }

  @media (max-width: 480px) {
    img { aspect-ratio: 4 / 3; }
  }
`;

export default EnvironmentalTesting;
