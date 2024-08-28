// src/tests/Error.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../components/Error';

test('renders error message', () => {
  render(<Error message="An error occurred" />);
  const errorMessage = screen.getByText(/An error occurred/i);
  expect(errorMessage).toBeInTheDocument();
});
