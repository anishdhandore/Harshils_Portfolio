// Facts come from Documents/Resume_Harshil P.pdf and the engineering portfolio PDF.
export const NAME = 'Harshil';
export const FULL_NAME = 'Harshil Patel';
export const EMAIL = 'patelharshil2060@gmail.com';
export const RESUME_URL = '/HarshilPatelResume.pdf';
export const TIME_ZONE = 'America/Los_Angeles';
// TODO(harshil): confirm the availability line
export const AVAILABILITY = 'Open to aerospace engineering roles';

// Two-tone headline: `strong` parts render in full ink, the rest muted
export const HEADLINE = [
  { text: 'Aerospace Engineer', strong: true },
  { text: 'taking aircraft from', strong: false },
  { text: 'sizing plots', strong: true },
  { text: 'to', strong: false },
  { text: 'flight day.', strong: true },
];

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshilpatel2060' },
  { label: 'GitHub', href: 'https://github.com/patelharshil2060' },
];

export const FOCUS = ['Aircraft design & sizing', 'Flight dynamics & stability', 'Test & instrumentation'];

// Spec readout under the hero image (Nimbus V4, from the project README)
export const HERO_CAPTION = { index: '01', label: 'Nimbus V4 · Flying-wing cargo UAV' };

/**
 * Callouts on the hero render, as fractions of the image (x, y = the marker).
 * Each describes a part that is visible in the crop.
 */
export const HOTSPOTS = [
  { id: 'fuselage', x: 0.46, y: 0.43, title: 'Blended lifting-body fuselage', body: '5 L cargo bay with a clamshell payload door underneath.' },
  { id: 'wing', x: 0.3, y: 0.66, title: 'Swept wing', body: '1.57 m span, 28.3° sweep, Eppler 222 → 230 airfoils.' },
  { id: 'fin', x: 0.9, y: 0.85, title: 'Twin delta fins', body: 'Wingtip vertical surfaces, sized in the MATLAB analysis pipeline.' },
];
