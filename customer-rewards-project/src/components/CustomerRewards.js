// src/components/CustomerRewards.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CustomerRewards.css';
import { calculatePoints } from '../utils/calculatePoints';
const CustomerRewards = ({ transactions }) => {
  // Calculate points for each transaction
  const pointsData = transactions.map(transaction => ({
    ...transaction,
    points: calculatePoints([transaction])[0], // Calculate points for the current transaction
  }));

  // Group by customer_id and month, then sum the points
  const groupedData = pointsData.reduce((acc, { customer_id, customer_name, purchased_date, points }) => {
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
      <h1 className="title">Retailer Rewards Program</h1>
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
          {Object.entries(groupedData).map(([month, customers]) =>
            Object.entries(customers).map(([customer_id, { customer_name, points }]) => (
              <tr key={`${month}-${customer_id}`}>
                <td>{month}</td>
                <td>{customer_name}</td>
                <td>{customer_id}</td>
                <td>{points}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

CustomerRewards.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transaction_id: PropTypes.string.isRequired,
      customer_id: PropTypes.string.isRequired,
      customer_name: PropTypes.string.isRequired,
      purchased_product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      purchased_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomerRewards;
