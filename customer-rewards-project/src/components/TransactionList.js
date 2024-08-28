// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions }) => {
  if (!Array.isArray(transactions)) {
    return <div>Error: transactions is not an array</div>;
  }

  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.transaction_id}>{transaction.description}</li>
      ))}
    </ul>
  );
};

export default TransactionList;
