// Facts come from Documents/Resume_Harshil P.pdf, the engineering portfolio PDF
// and the Nimbus V4 README on GitHub.
export const FULL_NAME = 'Harshil Patel';
export const EMAIL = 'patelharshil2060@gmail.com';
export const RESUME_URL = '/HarshilPatelResume.pdf';
export const TIME_ZONE = 'America/Los_Angeles';
// TODO(harshil): confirm the availability line
export const AVAILABILITY = 'Open to aerospace engineering roles';

export const KICKER = 'Aerospace Engineer · UC San Diego';
export const GREETING = { lead: 'I’m', name: FULL_NAME };
export const HEADLINE = 'Designing aircraft from the first sizing plot to the last flight test.';
export const LEDE =
  'I size, analyse and build aircraft: aerodynamics, propulsion, stability and the test work that proves them.';

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshilpatel2060' },
  { label: 'GitHub', href: 'https://github.com/patelharshil2060' },
];

// Readout along the top of the hero, like an instrument data strip
export const TELEMETRY = [
  { label: 'Base', value: 'San Diego, CA' },
  { label: 'Grad', value: 'Dec 2026' },
];

// Spec strip under the render (Nimbus V4 design values, from the project README)
export const SPECS = [
  { value: '1.57 m', label: 'Wingspan' },
  { value: '800 g', label: 'Design payload' },
  { value: '28.3°', label: 'Wing sweep' },
  { value: '13,000+', label: 'Optimizer evaluations' },
];

// The hero animation: Harshil flying his aircraft, cut out of the sky
export const FLYER = {
  alt: 'Illustration of Harshil in a headset, flying a white and navy light aircraft and giving a thumbs up',
};
