import DashboardNavbar from "../components/DashboardNavbar";

const Profile = () => {
  const user = {
    name: "Stephen J",
    email: "stephen@gmail.com",
    totalTransactions: 10,
    loanStatus: "INACTIVE",
    birthYear: "Apr 15, 2005",
    balance: "$15",
  };

  return (
    <>
    {/* Navbar  */}
    <DashboardNavbar />
    
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
        <div className="space-y-4">
          {/* Name */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Name:</span>
            <span className="font-bold text-gray-800">{user.name}</span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>

          {/* Total Transactions */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Total Transactions:</span>
            <span className="text-gray-800">{user.totalTransactions}</span>
          </div>

          {/* Loan Status */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Loan Status:</span>
            <span
              className={`font-bold ${
                user.loanStatus === "INACTIVE" ? "text-red-500" : "text-green-500"
              }`}
            >
              {user.loanStatus}
            </span>
          </div>

          {/* Birth Year */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Birth Year:</span>
            <span className="text-gray-800">{user.birthYear}</span>
          </div>

          {/* Balance */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Balance:</span>
            <span className="font-bold text-green-600">{user.balance}</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Profile;
