const calculatePoints = (transactions) => {
    // Sample function to calculate total points from transactions
    return Object.values(transactions).flat().reduce((total, transaction) => total + transaction.points, 0);
  };
  
  export default calculatePoints;
  