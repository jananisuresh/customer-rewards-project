import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './components/TransactionList'; // Adjust path if necessary

function App() {
  const [transactions, setTransactions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        // Simulate fetching data with delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = {
          C1: [{ month: 1, points: 90 }, { month: 2, points: 25 }],
          C2: [{ month: 1, points: 250 }, { month: 2, points: 0 }],
        };

        setTransactions(mockData);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="App">
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
