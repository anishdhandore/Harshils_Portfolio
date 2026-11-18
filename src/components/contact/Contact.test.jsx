import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

const EMAIL = 'patelharshil2060@gmail.com';

describe('Contact', () => {
  test('is the #contact section the navbar CTA points to', () => {
    const { container } = render(<Contact />);

    expect(container.querySelector('section#contact')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Cleared for contact.' })).toBeInTheDocument();
  });

  test('puts every channel on the strip board', () => {
    render(<Contact />);

    const board = within(screen.getByRole('list', { name: /ways to get in touch/i }));
    expect(board.getByText(EMAIL)).toBeInTheDocument();
    expect(board.getByRole('link', { name: /^write$/i })).toHaveAttribute('href', `mailto:${EMAIL}`);
    expect(board.getByRole('link', { name: /^linkedin:/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(board.getByRole('link', { name: /^github:/i })).toHaveAttribute('href', expect.stringContaining('github.com'));
    expect(board.getByRole('link', { name: /^résumé:/i })).toHaveAttribute('href', expect.stringMatching(/\.pdf$/));
  });

  test('external strips open safely in a new tab', () => {
    render(<Contact />);

    ['linkedin', 'github'].forEach((name) => {
      const link = screen.getByRole('link', { name: new RegExp(`^${name}:`, 'i') });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  test('copies the email address from its strip', async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    render(<Contact />);

    await user.click(screen.getByRole('button', { name: /copy email/i }));

    expect(writeText).toHaveBeenCalledWith(EMAIL);
  });

  test('footer shows the year, section links and a way back to the top', () => {
    render(<Contact />);

    const footer = within(screen.getByRole('contentinfo'));
    expect(footer.getByText(`© ${new Date().getFullYear()} Harshil Patel. All rights reserved.`)).toBeInTheDocument();
    expect(footer.getByRole('navigation', { name: /footer/i })).toBeInTheDocument();
    expect(footer.getByRole('link', { name: /back to top/i })).toHaveAttribute('href', '/#home');
  });
});
