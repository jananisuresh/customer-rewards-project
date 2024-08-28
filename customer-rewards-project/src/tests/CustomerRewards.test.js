// src/tests/CustomerRewards.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerRewards from '../components/CustomerRewards';
import { transactions } from '../data/mockData';

test('renders customer rewards table', () => {
  render(<CustomerRewards transactions={transactions} />);

  // Ensure the table has the correct number of rows
  const rows = screen.getAllByRole('row');
  expect(rows.length).toBe(transactions.length + 1); // +1 for the header row

  // Verify specific rows' content by querying the table
  const rowsInTable = screen.getAllByRole('row');
  
  // Verify content in each row
  expect(rowsInTable[1]).toHaveTextContent('Jan 2024');
  expect(rowsInTable[1]).toHaveTextContent('Alice Johnson');
  expect(rowsInTable[1]).toHaveTextContent('C001');
  expect(rowsInTable[1]).toHaveTextContent('2250');

  expect(rowsInTable[2]).toHaveTextContent('Jan 2024');
  expect(rowsInTable[2]).toHaveTextContent('Bob Smith');
  expect(rowsInTable[2]).toHaveTextContent('C002');
  expect(rowsInTable[2]).toHaveTextContent('1450');

  expect(rowsInTable[3]).toHaveTextContent('Feb 2024');
  expect(rowsInTable[3]).toHaveTextContent('Alice Johnson');
  expect(rowsInTable[3]).toHaveTextContent('C001');
  expect(rowsInTable[3]).toHaveTextContent('150');

  expect(rowsInTable[4]).toHaveTextContent('Mar 2024');
  expect(rowsInTable[4]).toHaveTextContent('Charlie Brown');
  expect(rowsInTable[4]).toHaveTextContent('C003');
  expect(rowsInTable[4]).toHaveTextContent('1050');

  expect(rowsInTable[5]).toHaveTextContent('Mar 2024');
  expect(rowsInTable[5]).toHaveTextContent('Bob Smith');
  expect(rowsInTable[5]).toHaveTextContent('C002');
  expect(rowsInTable[5]).toHaveTextContent('250');
});
