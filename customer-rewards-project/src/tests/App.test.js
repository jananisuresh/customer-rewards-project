// src/tests/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App'; 

test('renders Retailer Rewards Program header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Retailer Rewards Program/i);
  expect(headerElement).toBeInTheDocument();
});
