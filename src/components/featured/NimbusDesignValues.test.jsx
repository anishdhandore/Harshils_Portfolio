import { render, screen } from '@testing-library/react';
import NimbusDesignValues from './NimbusDesignValues';
import { SPECS } from './featuredContent';

test('reads out the Nimbus V4 design specs', () => {
  render(<NimbusDesignValues />);

  const specs = screen.getByLabelText(/design specifications/i);
  SPECS.forEach(({ value }) => expect(specs).toHaveTextContent(value));
});
