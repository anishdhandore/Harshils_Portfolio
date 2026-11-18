import nimbusPreview from '../../images/nimbus/photo-team.webp';
import jagerPreview from '../../images/jager/render-hero.webp';

/**
 * Projects in the hangar, listed like a parts list on a drawing sheet.
 * - `index`: drawing number shown in the list and on the title block
 * - `preview`: the image shown on the drawing sheet (1600×1000)
 * - `figures`: three key design values for the sheet's readout
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
    preview: nimbusPreview,
    previewAlt: 'The Nimbus team behind the aircraft at the Mission Bay flight field',
    figures: [
      { value: '1.57 m', label: 'Span' },
      { value: '800 g', label: 'Payload' },
      { value: '14.3', label: 'Cruise L/D' },
    ],
  },
  {
    index: '02',
    slug: 'jager-qrf',
    name: 'Jäger-QRF',
    year: '2026',
    kind: 'Conceptual design',
    hook: 'A hybrid VTOL that hovers over a fire and drops two suppression payloads.',
    tech: ['MATLAB', 'AVL', 'Mission sizing', 'Flight dynamics'],
    preview: jagerPreview,
    previewAlt: 'Jäger-QRF render releasing two red suppression payloads',
    figures: [
      { value: '~51 mph', label: 'Cruise' },
      { value: '1.5 mi', label: 'Range' },
      { value: '55 lb', label: 'Gross weight' },
    ],
  },
];
