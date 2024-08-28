// src/App.js
import React from 'react';
import CustomerRewards from './components/CustomerRewards';
import { transactions } from './data/mockData';
import './styles/App.css';

const App = () => {
  return (
    <div className="container">
      <CustomerRewards transactions={transactions} />
    </div>
  );
};

export default App;
