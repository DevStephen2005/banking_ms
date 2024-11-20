import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-green-600 shadow-md">
        <h1 className="text-2xl font-bold text-black">Online Banking System</h1>
        <ul className="flex space-x-10">
          <li><a href="#home" className="text-white text-lg hover:underline font-semibold">Home</a></li>
          <li><a href="#about" className="text-white text-lg hover:underline font-semibold">About</a></li>
          <li><a href="#services" className="text-white text-lg hover:underline font-semibold">Services</a></li>
          <li>
            <Link to='/register' className="bg-blue-900 text-white px-3 py-2 rounded  font-semibold">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-800 font-semibold">
              Login
            </Link>
          </li>

        </ul>
      </nav>
  )
}

export default Navbar