import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test to verify that the component renders without crashing
test('renders App component without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

// Test to check the initial loading state
test('displays loading state initially', () => {
  render(<App />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
