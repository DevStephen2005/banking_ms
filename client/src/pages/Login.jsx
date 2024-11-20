import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one special character, and one number, and be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost:8000/login', { email, password })
        .then((result) => {
          if (result.data === 'success') {
            navigate('/dashboard');
            LoginToast();

            if (result.data === 'success' && email.trim() === "admin@gmail.com" && password.trim() === "Admin@100") {
              navigate("/adminDashboard")
            }
          } else if (result.data === 'password incorrect') {
            toast.error('Password incorrect');
            setErrors({ password: 'Password incorrect. Please try again.' });
          } else if (result.data === 'user not found') {
            toast.error('User not found');
            setErrors({ email: 'User not found. Please check your email or sign up.' });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error('An error occurred. Please try again.');
        });
    }
  };

  const LoginToast = () => toast.success('User Login success');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Banking Management System</h1>
        <form className="space-y-6" onSubmit={submitHandler}>
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-medium text-black-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-lg font-medium text-black-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          <div className="flex justify-between items-center mt-4 text-sm">
            <span>Not a member?</span>
            <Link to="/register" className="text-red-600 font-semibold">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
