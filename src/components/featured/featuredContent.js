// Featured project: Nimbus V4. Facts come from the resume, the engineering
// portfolio PDF and github.com/patelharshil2060/Nimbus-Package-Delivery-UAV.
import cadShot from '../../images/nimbus/screen-cad.webp';
import sizingShot from '../../images/nimbus/screen-sizing.webp';
import thrustShot from '../../images/nimbus/screen-thrust.webp';
import buildShot from '../../images/nimbus/screen-build.webp';
import flightShot from '../../images/nimbus/screen-flight.webp';

export const FEATURED = {
  name: 'Nimbus V4',
  slug: 'nimbus-v4',
  summary:
    'An autonomous flying-wing cargo aircraft, optimized for a package delivery competition’s profit score, then built and flight-tested.',
  role: 'Engineer',
  timeline: 'Mar – Jun 2026',
  url: 'https://github.com/patelharshil2060/Nimbus-Package-Delivery-UAV',
  urlLabel: 'the code on GitHub',
};

/**
 * One shot per screen, in scroll order. `focus` is the region that lifts off
 * the display, as fractions of the 1180×820 screen (x, y = top-left corner).
 * `word` is the oversized title behind the display.
 */
export const CHAPTERS = [
  {
    title: 'Flying-wing architecture',
    body: 'Swept wing, blended lifting-body fuselage and twin fins, integrated into one composite airframe.',
    word: 'Nimbus',
    screen: cadShot,
    alt: 'Nimbus V4 CAD assembly: swept flying wing with a lifting-body cargo fuselage',
    focus: { x: 0.32, y: 0.38, w: 0.28, h: 0.34 },
  },
  {
    title: 'Sized to the constraints',
    body: 'A MATLAB–AVL workflow and CMA-ES optimizer ran 13,000+ evaluations to land the design point.',
    word: 'Sizing',
    screen: sizingShot,
    alt: 'Constraint diagram of thrust loading against wing loading, with the design point marked',
    focus: { x: 0.765, y: 0.57, w: 0.18, h: 0.16 },
  },
  {
    title: 'Propulsion characterized',
    body: 'Thrust modelled against airspeed for the 10×4.7 propeller, then checked on the bench.',
    word: 'Thrust',
    screen: thrustShot,
    alt: 'Plot of thrust against flight speed for a 10 by 4.7 propeller',
    focus: { x: 0.07, y: 0.12, w: 0.26, h: 0.26 },
  },
  {
    title: 'Built by the team',
    body: 'CAD-driven manufacturing, propulsion bench tests and system integration at the field.',
    word: 'Build',
    screen: buildShot,
    alt: 'The team preparing the Nimbus airframe on a field table',
    focus: { x: 0.28, y: 0.6, w: 0.5, h: 0.3 },
  },
  {
    title: 'Flight day',
    body: 'Ground-roll tested and flown at Mission Bay Park, San Diego.',
    word: 'Flight',
    screen: flightShot,
    alt: 'The Nimbus team standing behind the aircraft at the flight field',
    focus: { x: 0.2, y: 0.7, w: 0.62, h: 0.26 },
  },
];
