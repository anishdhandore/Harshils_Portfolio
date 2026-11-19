import { render, screen, within } from '@testing-library/react';
import Experience from './Experience';
import { ROLES } from './experienceData';

const NOW = new Date(2026, 10, 18);

describe('Experience', () => {
  test('is a labelled section anchored at #experience', () => {
    const { container } = render(<Experience now={NOW} />);

    expect(container.querySelector('section#experience')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument();
  });

  test('plays back newest first: starts on the most recent role with its full readout', () => {
    render(<Experience now={NOW} />);
    const first = ROLES[ROLES.length - 1];

    const article = within(screen.getByRole('article'));
    expect(article.getByRole('heading', { level: 3, name: first.role })).toBeInTheDocument();
    expect(article.getByText(first.company)).toBeInTheDocument();
    expect(article.getByText(first.code)).toBeInTheDocument();
    expect(article.getByText(first.impact)).toBeInTheDocument();
    first.tags.forEach((t) => expect(article.getByText(t)).toBeInTheDocument());
  });

  test('plots every role as a waypoint you can jump to', () => {
    const { container } = render(<Experience now={NOW} />);

    ROLES.forEach(({ code, role }) => {
      expect(screen.getByRole('button', { name: `Go to ${code}: ${role}` })).toBeInTheDocument();
    });
    expect(container.querySelectorAll('svg .wpt')).toHaveLength(ROLES.length);
    const newest = ROLES[ROLES.length - 1];
    expect(screen.getByRole('button', { name: new RegExp(`^Go to ${newest.code}`) })).toHaveAttribute('aria-current', 'step');
  });

  test('keeps the chart decorative and lists every role, newest first, for assistive tech', () => {
    const { container } = render(<Experience now={NOW} />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    const items = [...container.querySelectorAll('ol > li')].map((li) => li.textContent);
    expect(items).toHaveLength(ROLES.length);
    [...ROLES].reverse().forEach(({ role, company }, i) => {
      expect(items[i]).toMatch(new RegExp(`^${role}, ${company}`));
    });
  });

  test('every role has a unique four-letter waypoint ident', () => {
    const codes = ROLES.map((r) => r.code);

    codes.forEach((c) => expect(c).toMatch(/^[A-Z]{4}$/));
    expect(new Set(codes).size).toBe(codes.length);
  });
});
