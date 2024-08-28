Customer Rewards Project
Overview
This project calculates and displays customer reward points based on their transactions over a period of time. The application provides functionality to:

Fetch transaction data from a simulated API.
Calculate reward points based on specific rules.
Display transactions and rewards for each customer.
Handle loading and error states to ensure a smooth user experience.
Features
Customer Rewards Calculation: Calculates reward points based on the amount spent by customers. Points are awarded as follows:
2 points for every dollar spent over $100 in each transaction.
1 point for every dollar spent between $50 and $100 in each transaction.
Transaction Display: Shows individual transactions and accumulated rewards for each customer, aggregated by month and year.
Loading State: Displays a loading message while data is being fetched asynchronously.
Error Handling: Displays an error message if there is a problem fetching the data or if no data is returned.
Technologies Used
React: A JavaScript library for building user interfaces, particularly for single-page applications where data updates dynamically.
React Testing Library: A set of utilities to test React components, focusing on how the user interacts with them.
CSS: For styling components to create a visually appealing interface.
Jest: A testing framework to run tests and ensure application reliability.
Logger: Custom logger utility to keep track of important events and errors.
GitHub Codespaces: Used for the development environment setup and code versioning.
Project Structure
The project is organized into the following folders:

src/components: Contains all React components such as Header, TransactionList, CustomerRewards, Loading, and Error.
src/styles: Contains CSS files for styling individual components.
src/utils: Contains utility functions such as calculatePoints for reward calculation logic.
src/data: Contains the mock data used for transactions (mockData.js).
src/tests: Contains test files for all components to ensure functionality (*.test.js).
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/jananisuresh/customer-rewards-project
Navigate to the project directory:

bash
Copy code
cd customer-rewards-project
Install dependencies:

Ensure you have Node.js installed, then run:

bash
Copy code
npm install
Run the application:

Start the development server with:

bash
Copy code
npm start
The application should now be running on http://localhost:3000.

Run tests:

To run all tests and ensure everything is working correctly, use:

bash
Copy code
npm test
Usage
On application start, the transactions data will be fetched asynchronously. While the data is loading, a loading message will be displayed.
If an error occurs during data fetching, an error message will be displayed.
Once data is successfully fetched, the application will display a list of transactions and the calculated rewards for each customer.
Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any changes you'd like to make.

License
This project is licensed under the MIT License.

