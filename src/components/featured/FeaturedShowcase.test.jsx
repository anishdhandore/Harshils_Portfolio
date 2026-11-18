import { render, screen } from '@testing-library/react';
import FeaturedShowcase from './FeaturedShowcase';
import { FEATURED, CHAPTERS } from './featuredContent';

describe('FeaturedShowcase', () => {
  test('is a labelled section anchored at #work', () => {
    const { container } = render(<FeaturedShowcase />);

    expect(container.querySelector('section#work')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: FEATURED.name })).toBeInTheDocument();
  });

  test('shows every Nimbus screen on the flight display with alt text', () => {
    render(<FeaturedShowcase />);

    CHAPTERS.forEach(({ alt }) => {
      expect(screen.getByRole('img', { name: alt })).toBeInTheDocument();
    });
  });

  test('lists every chapter and marks the first one as current', () => {
    render(<FeaturedShowcase />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(CHAPTERS.length);
    expect(items[0]).toHaveAttribute('aria-current', 'step');
    expect(items[1]).not.toHaveAttribute('aria-current');
  });

  test('links to the case study, and out to the code in a new tab', () => {
    render(<FeaturedShowcase />);

    expect(screen.getByRole('link', { name: /case study/i })).toHaveAttribute('href', `/work/${FEATURED.slug}`);
    const code = screen.getByRole('link', { name: /github/i });
    expect(code).toHaveAttribute('href', FEATURED.url);
    expect(code).toHaveAttribute('target', '_blank');
    expect(code).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  test('shows the role and timeline', () => {
    render(<FeaturedShowcase />);

    expect(screen.getByText(FEATURED.role)).toBeInTheDocument();
    expect(screen.getByText(FEATURED.timeline)).toBeInTheDocument();
  });
});
