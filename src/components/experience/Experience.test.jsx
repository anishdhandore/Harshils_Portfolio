import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Experience from './Experience';
import { ROLES } from './experienceData';

const NOW = new Date(2026, 10, 18); // Nov 2026
const newest = ROLES[ROLES.length - 1];
const oldest = ROLES[0];

describe('Experience departure board', () => {
  test('is a labelled section anchored at #experience', () => {
    const { container } = render(<Experience now={NOW} />);

    expect(container.querySelector('section#experience')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument();
  });

  test('lists every flight, newest first', () => {
    render(<Experience now={NOW} />);

    const rows = within(screen.getByRole('list', { name: /newest first/i })).getAllByRole('button');
    expect(rows).toHaveLength(ROLES.length);
    expect(rows[0]).toHaveAccessibleName(new RegExp(`^${newest.role}, ${newest.company}`));
    expect(rows[rows.length - 1]).toHaveAccessibleName(new RegExp(`^${oldest.role}, ${oldest.company}`));
  });

  test('announces each flight’s status from its dates', () => {
    render(<Experience now={NOW} />);

    expect(screen.getByRole('button', { name: new RegExp(`^${newest.role}.*on duty$`) })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: new RegExp(`^${oldest.role}.*landed$`) })).toBeInTheDocument();
  });

  test('opens the newest flight first, with its full detail', () => {
    render(<Experience now={NOW} />);

    const article = within(screen.getByRole('article'));
    expect(article.getByRole('heading', { level: 3, name: newest.role })).toBeInTheDocument();
    expect(article.getByText(newest.impact)).toBeInTheDocument();
    newest.tags.forEach((t) => expect(article.getByText(t)).toBeInTheDocument());
    expect(screen.getByRole('button', { name: new RegExp(`^${newest.role}`) })).toHaveAttribute('aria-pressed', 'true');
  });

  test('choosing another flight shows its detail', async () => {
    const user = userEvent.setup();
    render(<Experience now={NOW} />);

    await user.click(screen.getByRole('button', { name: new RegExp(`^${oldest.role}`) }));

    expect(await screen.findByRole('heading', { level: 3, name: oldest.role })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: new RegExp(`^${oldest.role}`) })).toHaveAttribute('aria-pressed', 'true');
  });

  test('every flight has a unique four-letter flight number and board labels', () => {
    const codes = ROLES.map((r) => r.code);

    codes.forEach((c) => expect(c).toMatch(/^[A-Z]{4}$/));
    expect(new Set(codes).size).toBe(codes.length);
    ROLES.forEach(({ board }) => {
      expect(board.destination.length).toBeLessThanOrEqual(19);
      expect(board.via.length).toBeLessThanOrEqual(16);
    });
  });
});
