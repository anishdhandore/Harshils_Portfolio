import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';
import { EMAIL, HEADLINE, HERO_CAPTION, HOTSPOTS } from './heroContent';

const fullHeadline = HEADLINE.map((part) => part.text).join(' ');

describe('Hero', () => {
  test('renders the full headline as the page h1', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(fullHeadline);
  });

  test('shows local time and availability in the status bar', () => {
    render(<Hero />);

    expect(screen.getByText(/local time/i)).toBeInTheDocument();
    expect(screen.getByText(/open to/i)).toBeInTheDocument();
  });

  test('reserves an image slot with a placeholder when no render is set', () => {
    render(<Hero />);

    expect(screen.getByRole('img', { name: /aircraft placeholder/i })).toBeInTheDocument();
  });

  test('renders the aircraft instead of the placeholder when one is provided', () => {
    render(<Hero imageSrc="/nimbus.webp" imageAlt="Nimbus render" />);

    expect(screen.getByRole('img', { name: 'Nimbus render' })).toHaveAttribute('src', '/nimbus.webp');
    expect(screen.queryByRole('img', { name: /aircraft placeholder/i })).not.toBeInTheDocument();
  });

  test('labels each hotspot on the render and captions it', () => {
    render(<Hero imageSrc="/nimbus.webp" imageAlt="Nimbus render" caption={HERO_CAPTION} hotspots={HOTSPOTS} />);

    HOTSPOTS.forEach(({ title }) => {
      expect(screen.getByRole('button', { name: title })).toHaveAttribute('aria-expanded', 'false');
    });
    expect(screen.getByText(HERO_CAPTION.label)).toBeInTheDocument();
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
