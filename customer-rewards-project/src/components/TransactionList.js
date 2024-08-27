import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {Object.keys(transactions).map((customer) => (
        <div key={customer}>
          <h3>Customer: {customer}</h3>
          <ul>
            {transactions[customer].map((transaction, index) => (
              <li key={index}>
                Month: {transaction.month}, Points: {transaction.points}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
