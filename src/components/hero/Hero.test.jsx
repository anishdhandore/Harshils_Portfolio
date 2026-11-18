import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';
import { EMAIL, FLYER, HEADLINE, SPECS } from './heroContent';

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

  test('reserves a slot with a placeholder when no animation is set', () => {
    render(<Hero />);

    expect(screen.getByRole('img', { name: /hero animation placeholder/i })).toBeInTheDocument();
  });

  test('paints the still frame first, described for screen readers', () => {
    render(<Hero flyerSrc="/loop.webp" flyerStill="/still.webp" flyerAlt={FLYER.alt} />);

    const still = screen.getByRole('img', { name: FLYER.alt });
    expect(still).toHaveAttribute('src', '/still.webp');
    expect(still).toHaveAttribute('fetchpriority', 'high');
  });

  test('keeps the decorative loop out of the accessibility tree until it has loaded', () => {
    const { container } = render(<Hero flyerSrc="/loop.webp" flyerStill="/still.webp" flyerAlt={FLYER.alt} />);

    const loop = container.querySelector('img.loop');
    expect(loop).toHaveAttribute('aria-hidden', 'true');
    expect(loop).toHaveAttribute('data-ready', 'false');
    expect(loop).not.toHaveAttribute('src');
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
