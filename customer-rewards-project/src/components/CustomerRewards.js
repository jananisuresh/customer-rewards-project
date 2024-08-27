import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import Header from './Header';
import './CustomerRewards.css';
import mockData from '../data/mockData';

const CustomerRewards = () => {
  const [transactions, setTransactions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Fetch mock data successfully
        setTransactions(mockData);
        setError(null); // Clear any existing errors
      } catch (err) {
        setError('Error loading data');
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="error">{error}</div>;
  if (transactions === null) return <p>Loading...</p>;

  return (
    <div className="customer-rewards">
      <Header />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default CustomerRewards;
