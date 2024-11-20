import { Link } from 'react-router-dom';
import header from '../assets/images/header.png'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-green-400 text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow">
        <div className="text-center md:text-left md:w-1/2 p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Online Banking System</h2>
          <p className="text-lg mb-4">
            Developed by using MERN Stack.<br />
            React JS | Node JS | MongoDB
          </p>
          <Link to='/register'
            className="bg-red-500 text-white px-6 py-3 text-lg font-semibold rounded hover:bg-red-700"
          >
            Register Now
          </Link>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            src={header}
            alt="Header"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home
