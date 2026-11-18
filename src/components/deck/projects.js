import nimbusCard from '../../images/cards/nimbus.webp';
import jagerCard from '../../images/cards/jager.webp';

/**
 * Project files, dealt in order.
 * - `index`: file number shown on the card's tab
 * - `screen`: one image of the aircraft, filling the card
 * - `hook`: one line revealed on hover
 * - `kind`: built hardware or a paper study
 * Facts come from the resume, the portfolio PDF and each project's GitHub README.
 */
export const PROJECTS = [
  {
    index: '01',
    slug: 'nimbus-v4',
    name: 'Nimbus V4',
    year: '2026',
    kind: 'Built & flown',
    hook: 'A flying-wing cargo UAV, optimized for profit, then built and flown at Mission Bay.',
    tech: ['MATLAB', 'AVL', 'CMA-ES', 'CAD'],
    screen: nimbusCard,
    links: [{ label: 'GitHub', href: 'https://github.com/patelharshil2060/Nimbus-Package-Delivery-UAV' }],
  },
  {
    index: '02',
    slug: 'jager-qrf',
    name: 'Jäger-QRF',
    year: '2026',
    kind: 'Conceptual design',
    hook: 'A hybrid VTOL that hovers over a fire and drops two suppression payloads.',
    tech: ['MATLAB', 'AVL', 'Mission sizing', 'Flight dynamics'],
    screen: jagerCard,
    links: [{ label: 'GitHub', href: 'https://github.com/patelharshil2060/Jager-Firefighter-Drone' }],
  },
];
