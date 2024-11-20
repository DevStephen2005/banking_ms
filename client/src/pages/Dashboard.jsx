import { useState, useEffect } from "react";
import axios from "axios";
import DashboardNavbar from "../components/DashboardNavbar";
import { toast } from "react-toastify";

// Helper function to get the current month and day
const getCurrentDate = () => {
  const currentDate = new Date();
  const options = { month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  const [month, day] = formattedDate.split(' ');
  return { month, day };
};

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const { month, day } = getCurrentDate(); // Use current date here

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dashboard");
        setBalance(response.data.balance);
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboard();
  }, []);

  const handleTransaction = async (type) => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0) {
      try {
        const response = await axios.post("http://localhost:8000/api/dashboard", {
          type,
          amount,
        });
        setBalance(response.data.balance);
        setTransactions(response.data.transactions);
        setTransactionAmount("");
        toast.success("Transaction Success");
      } catch (error) {
        console.error("Error processing transaction:", error);
        alert(error.response?.data || "An error occurred");
      }
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <DashboardNavbar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome back, Stephen
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center">
            <h2 className="text-lg text-gray-600">Balance:</h2>
            <p className="text-3xl font-bold text-gray-800">
              ${balance.toFixed(2)}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Deposit/Withdraw
            </h2>
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Enter Amount"
              className="w-full mb-2 px-3 py-2 border rounded-md text-gray-600"
            />
            <button
              onClick={() => handleTransaction("Deposit")}
              className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 font-semibold mb-2"
            >
              DEPOSIT
            </button>
            <button
              onClick={() => handleTransaction("Withdraw")}
              className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 font-semibold"
            >
              WITHDRAW
            </button>
          </div>

          {/* Updated Date Widget */}
          <div className="bg-white shadow-md rounded-lg flex items-center justify-center text-gray-800 font-bold text-2xl">
            <div className="text-center">
              <div>{month}</div>
              <div>{day}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Latest Transactions
          </h2>
          <table className="w-full text-left text-gray-800">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Transaction Date</th>
                <th className="pb-2">Transaction Type</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-2 text-center text-gray-500">
                    No transactions yet.
                  </td>
                </tr>
              ) : (
                transactions.map((transaction, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">
                      {new Date(transaction.date).toLocaleDateString()}{" "}
                      {new Date(transaction.date).toLocaleTimeString()}
                    </td>
                    <td
                      className={`py-2 ${
                        transaction.type === "Deposit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type}
                    </td>
                    <td
                      className={`py-2 ${
                        transaction.type === "Deposit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "Deposit" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
