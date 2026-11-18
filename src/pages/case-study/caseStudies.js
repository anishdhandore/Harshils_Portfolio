// Case study content, one entry per project file (same order as the deck).
// Facts come from the resume, Documents/Harshil Patel_Engineering Portfolio.pdf
// and each project's GitHub README. Numbers are design values, not measured
// flight performance, and are labelled that way on the page.
import nimbusCad3 from '../../images/nimbus/cad-3.webp';
import nimbusCad2 from '../../images/nimbus/cad-2.webp';
import nimbusBay from '../../images/nimbus/payload-bay.webp';
import nimbusLaunch from '../../images/nimbus/photo-launch.webp';
import nimbusPrep from '../../images/nimbus/photo-prep.webp';
import nimbusBench from '../../images/nimbus/photo-bench.webp';
import nimbusTeam from '../../images/nimbus/photo-team.webp';
import nimbusCtol from '../../images/nimbus/plot-ctol-constraint-diagram.webp';
import nimbusThrust from '../../images/nimbus/plot-thrust-vs-speed-10x47.webp';
import nimbusVn from '../../images/nimbus/plot-v-n-diagram-maneuver-envelope.webp';
import nimbusSm from '../../images/nimbus/plot-sm-vs-battery-position.webp';
import nimbusMission from '../../images/nimbus/plot-mission-profile-3d.webp';
import nimbusPolar from '../../images/nimbus/plot-drag-polar-cl-vs-cd.webp';
import jagerHero from '../../images/jager/render-hero.webp';
import jagerFront from '../../images/jager/render-front.webp';
import jagerSide from '../../images/jager/render-side.webp';
import jagerMission from '../../images/jager/plot-missionprofiles.webp';
import jagerSizing from '../../images/jager/plot-sizing-constraint.webp';
import jagerVn from '../../images/jager/plot-vndiagram-final.webp';
import jagerSm from '../../images/jager/plot-staticmargin.webp';
import jagerPolar from '../../images/jager/plot-cl-vs-cd-polar.webp';

/**
 * @typedef {{src: string, alt: string, caption: string}} Media
 * @typedef {object} CaseStudy
 * @property {string} slug
 * @property {string} name
 * @property {string} outcome    one sentence: what the aircraft does
 * @property {{label: string, value: string}[]} meta   role, team, timeline, course
 * @property {{label: string, href: string}[]} links
 * @property {{main: Media, side: [Media, Media]}} hero   renders for the dark band
 * @property {string} problem
 * @property {{title: string, body: string}[]} built   his contributions
 * @property {{label: string, detail: string}[]} flow  how the design process fit together
 * @property {{value: string, label: string}[]} results   key design figures
 * @property {Media[]} evidence   analysis plots
 * @property {Media[]} photos     build and test photos (optional)
 * @property {string} status      what was and wasn't demonstrated
 */

/** @type {CaseStudy[]} */
export const CASE_STUDIES = [
  {
    slug: 'nimbus-v4',
    name: 'Nimbus V4',
    outcome: 'A profit-optimized flying-wing cargo aircraft, designed, built and flight-tested by a six-person team.',
    meta: [
      { label: 'Role', value: 'Team lead' },
      { label: 'Team', value: '6 engineers' },
      { label: 'Timeline', value: 'Mar – Jun 2026' },
      { label: 'Course', value: 'MAE 155B Aircraft Design, UC San Diego' },
    ],
    links: [{ label: 'Code & design files', href: 'https://github.com/patelharshil2060/Nimbus-Package-Delivery-UAV' }],
    hero: {
      main: { src: nimbusCad3, alt: 'Nimbus V4 CAD assembly seen from above', caption: 'Integrated CAD assembly' },
      side: [
        { src: nimbusCad2, alt: 'Nimbus V4 CAD render from below and behind', caption: 'Composite structure, rear view' },
        { src: nimbusBay, alt: 'Cross-section of the Nimbus cargo bay and payload door', caption: 'Payload bay cross-section' },
      ],
    },
    problem:
      'Develop a cargo aircraft for a package delivery competition scored on profit. Balance payload capacity and cruise efficiency against takeoff distance, stall speed, static and dynamic stability, and structural mass.',
    built: [
      {
        title: 'Led the team from design to flight',
        body: 'Led five other engineers through design, manufacturing, integration and testing of the aircraft.',
      },
      {
        title: 'Analysed every discipline',
        body: 'Contributed to the aerodynamic, propulsion, static and dynamic stability, structural and flight-performance analyses that fed the design.',
      },
      {
        title: 'Optimized against the profit score',
        body: 'Worked within the team’s coupled MATLAB–AVL workflow, where a CMA-ES optimizer ran about 13,000 evaluations across 13 design variables to settle the design point.',
      },
      {
        title: 'Turned CAD into hardware',
        body: 'Validated the design through CAD-driven manufacturing, propulsion bench testing, ground-roll testing and system-level integration.',
      },
    ],
    flow: [
      { label: 'Mission', detail: 'Competition profit function' },
      { label: 'Optimize', detail: 'CMA-ES over 13 design variables' },
      { label: 'Analyse', detail: 'Aero, CTOL sizing, AVL stability' },
      { label: 'Build & fly', detail: 'Bench, ground roll, flight test' },
    ],
    results: [
      { value: '1.57 m', label: 'Wingspan' },
      { value: '800 g', label: 'Design payload' },
      { value: '13,000+', label: 'Optimizer evaluations' },
      { value: '14.3', label: 'Cruise L/D' },
      { value: '4.9%', label: 'Static margin (AVL)' },
      { value: '3.89', label: 'Spar bending factor of safety' },
    ],
    evidence: [
      { src: nimbusCtol, alt: 'Constraint diagram of thrust loading against wing loading', caption: 'CTOL sizing: wing loading vs thrust loading, design point W/S = 87.4 N/m², T/W = 0.28' },
      { src: nimbusThrust, alt: 'Thrust against flight speed for the 10 by 4.7 propeller', caption: 'Propulsion: thrust vs airspeed, APC 10×4.7 propeller' },
      { src: nimbusVn, alt: 'V-n diagram showing the maneuver envelope', caption: 'V-n diagram: maneuver envelope, +3.8 g / −1.5 g limit loads' },
      { src: nimbusSm, alt: 'Static margin against battery position', caption: 'Stability: static margin vs battery position (AVL neutral point)' },
      { src: nimbusMission, alt: '3D mission profile with takeoff, laps, payload drop and landing', caption: 'Mission profile: takeoff, laps, payload drop and landing' },
      { src: nimbusPolar, alt: 'Aircraft drag polar, lift coefficient against drag coefficient', caption: 'Aerodynamics: aircraft drag polar' },
    ],
    photos: [
      { src: nimbusTeam, alt: 'The Nimbus team behind the aircraft at the flight field', caption: 'Flight day, Mission Bay Park' },
      { src: nimbusLaunch, alt: 'A team member setting Nimbus down on the field to launch', caption: 'Launch at the flight field' },
      { src: nimbusPrep, alt: 'The team working on the airframe at the field table', caption: 'Field integration' },
      { src: nimbusBench, alt: 'Team members checking the aircraft at the field table', caption: 'Pre-flight checks' },
    ],
    status:
      'The team manufactured the aircraft and flight-tested it at Mission Bay Park, San Diego, after propulsion bench testing, ground-roll testing and system-level integration. Figures on this page are design values rather than measured flight performance, and the plots may come from different design iterations.',
  },
  {
    slug: 'jager-qrf',
    name: 'Jäger-QRF',
    outcome: 'A hybrid VTOL firefighter that launches from the station, hovers over a fire and drops two suppression payloads within three minutes of takeoff.',
    meta: [
      { label: 'Role', value: 'Sizing, aero, propulsion & stability' },
      { label: 'Team', value: '6 engineers' },
      { label: 'Timeline', value: 'Jan – Mar 2026' },
      { label: 'Course', value: 'MAE 155A Aircraft Design, UC San Diego' },
    ],
    links: [{ label: 'Analysis files', href: 'https://github.com/patelharshil2060/Jager-Firefighter-Drone' }],
    hero: {
      main: { src: jagerHero, alt: 'Jäger-QRF render releasing two red suppression payloads', caption: 'Payload deployment concept' },
      side: [
        { src: jagerFront, alt: 'Jäger-QRF front view with four rotors and a thermal camera turret', caption: 'Front view' },
        { src: jagerSide, alt: 'Jäger-QRF side profile with fixed wing and V-tail', caption: 'Side profile' },
      ],
    },
    problem:
      'Fires can escalate before ground crews arrive. Design a rapid-response UAV with vertical takeoff, precise hover and efficient fixed-wing cruise, and reconcile hover power demand with range, payload, weight and a time-critical mission.',
    built: [
      {
        title: 'Sized the aircraft to the mission',
        body: 'Built hover and forward-flight constraints into a power-loading vs wing-loading sizing diagram, landing at W/S = 396.5 N/m² and P/W = 20.7 W/N with a 2% margin.',
      },
      {
        title: 'Modelled the aerodynamics',
        body: 'Analysed the NACA 4412 wing’s lift curve and the aircraft drag polar to set cruise performance.',
      },
      {
        title: 'Designed propulsion and weight & balance',
        body: 'Contributed to the propulsion design and the component-level weight and balance that set the CG range with and without payload.',
      },
      {
        title: 'Checked loads and stability',
        body: 'Generated the V-n envelope and ran static and dynamic stability evaluations with MATLAB and AVL.',
      },
    ],
    flow: [
      { label: 'Mission', detail: 'Climb, cruise, hover, drop, return' },
      { label: 'Size', detail: 'Hover and cruise constraints' },
      { label: 'Aero & propulsion', detail: 'NACA 4412, rotor and wing power' },
      { label: 'Loads & stability', detail: 'V-n envelope, AVL' },
    ],
    results: [
      { value: '~51 mph', label: 'Target cruise speed' },
      { value: '1.5 mi', label: 'Design one-way range' },
      { value: '2', label: 'Suppression payloads' },
      { value: '< 3 min', label: 'Takeoff to first drop' },
      { value: '55 lb', label: 'Gross weight' },
      { value: '6.31 ft', label: 'Wingspan' },
    ],
    evidence: [
      { src: jagerMission, alt: 'Altitude against time for the delivery and recon mission profiles', caption: 'Mission profiles: air delivery and recon' },
      { src: jagerSizing, alt: 'Power loading against wing loading with cruise, maneuver, hover and climb constraints', caption: 'Sizing: hover and forward-flight constraints' },
      { src: jagerVn, alt: 'V-n diagram with maneuver and gust envelopes', caption: 'V-n envelope: maneuver and gust loads' },
      { src: jagerSm, alt: 'Static margin against CG location with and without payload', caption: 'Weight & balance: static margin with and without payload' },
      { src: jagerPolar, alt: 'Lift coefficient against drag coefficient for the aircraft', caption: 'Aerodynamics: drag polar and best L/D' },
    ],
    photos: [],
    status:
      'A conceptual design supported by sizing, aerodynamic, propulsion and stability analyses. Mission parameters are targets: flight and fire-suppression performance were not demonstrated in this study.',
  },
];

export const findCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug) ?? null;

/** The next case study in deck order (wraps around). */
export const nextCaseStudy = (slug) => {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
};
