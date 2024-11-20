import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to='/dashboard'>
        <div className="text-3xl font-semibold text-gray-800 cursor-pointer pl-5">
          Darkside Banking
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-10 text-gray-700">
          <Link
            to="/dashboard"
            className="hover:text-blue-600 text-blue-600 font-large font-bold"
          >
            Dashboard
          </Link>
          <Link to="/loan" className="hover:text-blue-600 font-semibold font-large">
            Loan
          </Link>
          <Link to="/transaction-history" className="hover:text-blue-600 font-semibold font-large">
            Transactions History
          </Link>
          <Link to="/received-Requests" className="hover:text-blue-600 font-semibold">
            Received Requests
          </Link>
          <div className="relative">
            <a href="#my-requests" className="hover:text-blue-600 font-semibold">
              My Requests
            </a>
            
          </div>
        </div>

        {/* Profile Icon */}
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer">
          <Link to='/profile'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A7.978 7.978 0 0112 15c2.21 0 4.21.896 5.879 2.336M12 11a4 4 0 100-8 4 4 0 000 8zm0 8c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
            />
          </svg>
          </Link>
        </div>
        <Link to='/login'>
        <button className="btn bg-red-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">Logout</button>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
