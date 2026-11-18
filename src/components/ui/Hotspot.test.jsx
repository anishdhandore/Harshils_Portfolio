import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hotspot from './Hotspot';

const SPOT = { x: 0.3, y: 0.4, title: 'Swept wing', body: '28.3° sweep.' };

describe('Hotspot', () => {
  test('is a labelled button that controls its spec card', () => {
    render(<Hotspot {...SPOT} />);

    const button = screen.getByRole('button', { name: SPOT.title });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById(button.getAttribute('aria-controls'))).toHaveTextContent(SPOT.body);
  });

  test('opens on focus and closes with Escape', async () => {
    const user = userEvent.setup();
    render(<Hotspot {...SPOT} />);
    const button = screen.getByRole('button', { name: SPOT.title });

    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  test('is placed by fractions of its parent', () => {
    const { container } = render(<Hotspot {...SPOT} />);

    expect(container.firstChild).toHaveStyle({ left: '30%', top: '40%' });
  });
});
