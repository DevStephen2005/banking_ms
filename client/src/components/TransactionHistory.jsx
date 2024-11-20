/* eslint-disable react/prop-types */

const TransactionHistory = ({ transactions }) => {
  // If transactions is undefined or null, use an empty array
  if (!transactions) transactions = [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="text-left border-b-2 border-gray-200">
              <th className="py-2 px-4 font-semibold">Transaction Date</th>
              <th className="py-2 px-4 font-semibold">Transaction Type</th>
              <th className="py-2 px-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No transactions yet.
                </td>
              </tr>
            ) : (
              transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">
                    {new Date(transaction.date).toLocaleDateString()}{' '}
                    {new Date(transaction.date).toLocaleTimeString()}
                  </td>
                  <td
                    className={`py-3 px-4 ${
                      transaction.type === 'Deposit' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {transaction.type}
                  </td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      transaction.type === 'Deposit' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {transaction.type === 'Deposit' ? '+' : '-'}$
                    {transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
