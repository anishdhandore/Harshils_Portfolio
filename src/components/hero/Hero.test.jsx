import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';
import { EMAIL, HEADLINE, PORTRAIT, SPECS } from './heroContent';

describe('Hero', () => {
  test('introduces Harshil by name in the page h1', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1, name: 'I’m Harshil Patel.' })).toBeInTheDocument();
  });

  test('follows the name with the headline statement', () => {
    render(<Hero />);

    expect(screen.getByText((_, el) => el?.tagName === 'P' && el.textContent.trim() === HEADLINE)).toBeInTheDocument();
  });

  test('shows local time and availability in the telemetry strip', () => {
    render(<Hero />);

    expect(screen.getByText(/local time/i)).toBeInTheDocument();
    expect(screen.getByText(/open to/i)).toBeInTheDocument();
  });

  test('reads out the Nimbus V4 design specs', () => {
    render(<Hero />);

    const specs = screen.getByLabelText(/design specifications/i);
    SPECS.forEach(({ value }) => expect(specs).toHaveTextContent(value));
  });

  test('reserves a slot with a placeholder when no portrait is set', () => {
    render(<Hero />);

    expect(screen.getByRole('img', { name: /portrait placeholder/i })).toBeInTheDocument();
  });

  test('shows the portrait, described for screen readers, with a decorative orbit', () => {
    const { container } = render(<Hero portraitSrc="/portrait.webp" portraitAlt={PORTRAIT.alt} />);

    const img = screen.getByRole('img', { name: PORTRAIT.alt });
    expect(img).toHaveAttribute('src', '/portrait.webp');
    expect(img).toHaveAttribute('fetchpriority', 'high');
    container.querySelectorAll('figure svg').forEach((svg) => expect(svg).toHaveAttribute('aria-hidden', 'true'));
  });

  test('copies the email and confirms it', async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    render(<Hero />);

    await user.click(screen.getByRole('button', { name: /copy email/i }));

    expect(writeText).toHaveBeenCalledWith(EMAIL);
    expect(await screen.findByText(/email copied/i)).toBeInTheDocument();
  });

  test('links to LinkedIn, GitHub and the CV', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', expect.stringContaining('github.com'));
    expect(screen.getByRole('link', { name: /cv/i })).toHaveAttribute('href', expect.stringMatching(/\.pdf$/));
  });
});
