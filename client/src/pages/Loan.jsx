import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DashboardNavbar from '../components/DashboardNavbar';
import { Link } from 'react-router-dom';

const Loan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [loanSubmitted, setLoanSubmitted] = useState(false); // New state to track submission

  const handleRequestLoan = async () => {
    if (!loanAmount || loanAmount <= 0) {
      setMessage('Please enter a valid loan amount.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      const response = await axios.post(
        'http://localhost:8000/api/request-loan', // Adjust API URL as needed
        { loanAmount }
      );

      // Display toast notification
      toast.success(`Loan request submitted successfully for $${loanAmount}!`);
      setLoanSubmitted(true); // Set submission state to true
      setLoanAmount('');
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      {/* Navbar */}
      <DashboardNavbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {loanSubmitted ? (
          // Display success message and "Pay Loan Now!" button
          <div className="text-center">
            <p className="text-xl font-medium mb-4">
              You can not request a loan until you pay off your last loan.
            </p>
          </div>
        ) : (
          // Display loan request form
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Request a loan</h2>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Loan amount"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {message && <p className="mb-4 text-red-500">{message}</p>}
            <button
              onClick={handleRequestLoan}
              className={`w-full bg-blue-500 text-white font-medium py-2 mb-2 rounded-md ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Request loan now!'}
            </button>
            <Link to='/dashboard'>
            <button
              onClick={() => setLoanAmount('')}
              className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Cancel
            </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Loan;
