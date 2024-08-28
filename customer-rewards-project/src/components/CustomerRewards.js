// src/components/CustomerRewards.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CustomerRewards.css';

const CustomerRewards = ({ transactions }) => {
  // Calculate points based on price (1 point per dollar spent)
  const calculatePoints = transactions.map(transaction => ({
    ...transaction,
    points: transaction.price,
  }));

  // Group by month, then by customer_id, and sum the points
  const groupedData = calculatePoints.reduce((acc, transaction) => {
    const { customer_id, customer_name, purchased_date, points } = transaction;
    const month = new Date(purchased_date).toLocaleString('default', { month: 'short' }) + ' ' + new Date(purchased_date).getFullYear();
    
    if (!acc[month]) {
      acc[month] = {};
    }

    if (!acc[month][customer_id]) {
      acc[month][customer_id] = { customer_name, points: 0 };
    }

    acc[month][customer_id].points += points;
    
    return acc;
  }, {});

  return (
    <div className="customer-rewards">
      <h1 className="header">Retailer Rewards Program</h1>
      <h2>Customer Rewards</h2>
      <table className="customer-rewards-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([month, customers], monthIndex) => (
            Object.entries(customers).map(([customer_id, { customer_name, points }], index) => (
              <tr key={`${month}-${customer_id}-${index}`} className={index === 0 ? 'month-row' : ''}>
                {index === 0 && (
                  <td rowSpan={Object.keys(customers).length}>{month}</td>
                )}
                <td>{customer_name}</td>
                <td>{customer_id}</td>
                <td>{points}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

CustomerRewards.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    transaction_id: PropTypes.string.isRequired,
    customer_id: PropTypes.string.isRequired,
    customer_name: PropTypes.string.isRequired,
    purchased_product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    purchased_date: PropTypes.string.isRequired,
  })).isRequired,
};

export default CustomerRewards;
