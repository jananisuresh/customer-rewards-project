import { render, screen } from '@testing-library/react';
import CustomerRewards from '../components/CustomerRewards';

const mockTransactions = [
  {
    transaction_id: '1',
    customer_name: 'John Doe',
    customer_id: 'C001',
    purchased_product: 'Product A',
    price: 100,
    purchased_date: '2024-01-15'
  }
];

const mockRewards = {
  C001: 100
};

test('renders customer rewards table', () => {
  render(<CustomerRewards transactions={mockTransactions} rewards={mockRewards} />);

  // Check if table headers are rendered
  expect(screen.getByText(/Month/i)).toBeInTheDocument();
  expect(screen.getByText(/Customer ID/i)).toBeInTheDocument();
  expect(screen.getByText(/Points/i)).toBeInTheDocument();

  // Check if customer data is rendered
  expect(screen.getByText(/Jan 2024/i)).toBeInTheDocument();
  expect(screen.getByText(/C001/i)).toBeInTheDocument();
  expect(screen.getByText(/100/i)).toBeInTheDocument();
});
