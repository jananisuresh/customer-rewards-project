// src/utils/calculatePoints.js
export function calculatePoints(transactions) {
  const points = transactions.map(({ price }) => {
    let transactionPoints = 0;

    if (price > 100) {
      transactionPoints += 2 * (price - 100); // 2 points for each dollar over 100
      transactionPoints += 1 * 50; // 1 point for each dollar between 50 and 100
    } else if (price > 50) {
      transactionPoints += 1 * (price - 50); // 1 point for each dollar over 50 up to 100
    }

    return transactionPoints;
  });

  return points;
}
