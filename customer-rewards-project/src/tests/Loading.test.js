// src/tests/Loading.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

test('renders loading message', () => {
  render(<Loading />);
  const loadingMessage = screen.getByText(/Loading.../i);
  expect(loadingMessage).toBeInTheDocument();
});
