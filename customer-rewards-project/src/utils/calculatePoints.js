// src/utils/calculatePoints.js
export function calculatePoints(transactions, rewards) {
  const points = {};

  transactions.forEach(({ customer_id, price }) => {
    if (!points[customer_id]) {
      points[customer_id] = 0;
    }

    // Calculate points based on price, e.g., 1 point per dollar
    points[customer_id] += price;
  });

  return points;
}
