import { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar"
import axios from "axios";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]); // Transaction history

  // Fetch data from the backend
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dashboard");
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div>
        {/* Navbar */}
        <DashboardNavbar />

        {/* Latest Transactions */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-black-800 mb-6">
            Transaction History
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
  )
}

export default TransactionHistory