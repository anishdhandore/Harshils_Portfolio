import { fireEvent, render, screen } from '@testing-library/react';
import Hangar from './Hangar';
import { PROJECTS } from './projects';

const [first, second] = PROJECTS;

describe('Hangar', () => {
  test('is a labelled section anchored at #projects', () => {
    const { container } = render(<Hangar />);

    expect(container.querySelector('section#projects')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Project files' })).toBeInTheDocument();
  });

  test('lists every project as a link to its case study', () => {
    render(<Hangar />);

    PROJECTS.forEach(({ name, slug }) => {
      expect(screen.getByRole('link', { name: `${name}: view case study` })).toHaveAttribute('href', `/work/${slug}`);
    });
  });

  test('shows the first project on the drawing sheet to begin with', () => {
    render(<Hangar />);

    expect(screen.getByRole('img', { name: first.previewAlt })).toHaveAttribute('src', first.preview);
    first.figures.forEach(({ value }) => expect(screen.getByText(value)).toBeInTheDocument());
  });

  test('focusing another project swaps the drawing and marks its row', () => {
    render(<Hangar />);
    const link = screen.getByRole('link', { name: `${second.name}: view case study` });

    fireEvent.focus(link);

    expect(link.closest('li')).toHaveAttribute('data-active', 'true');
    second.figures.forEach(({ value }) => expect(screen.getByText(value)).toBeInTheDocument());
  });
});
