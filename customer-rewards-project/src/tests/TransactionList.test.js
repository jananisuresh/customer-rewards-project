import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';// Ensure this import is correct
import TransactionList from '../components/TransactionList';

test('renders transactions list', () => {
  const transactions = [
    { id: 't1', description: 'Purchase 1' },
    { id: 't2', description: 'Purchase 2' },
    { id: 't3', description: 'Purchase 3' }
  ];

  render(<TransactionList transactions={transactions} />);

  transactions.forEach(transaction => {
    if (transaction.description) {
      expect(screen.getByText(transaction.description)).toBeInTheDocument();
    }
  });
});
