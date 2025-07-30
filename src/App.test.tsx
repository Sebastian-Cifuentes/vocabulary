import React from 'react';
import { render, screen } from '@testing-library/react';
import { Vocabulary } from './Vocabulary';

test('renders learn react link', () => {
  render(<Vocabulary />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
