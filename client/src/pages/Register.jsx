import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    fullAddress: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Validates a 10-digit phone number
    const postalPattern = /^\d{5}$/; // Validates a 5-digit postal code
    const uppercasePattern = /[A-Z]/; // Validates at least one uppercase letter
  
    // Firstname and Lastname validation
    if (!formData.firstname) formErrors.firstname = "Firstname is required";
    if (!formData.lastname) formErrors.lastname = "Lastname is required";
  
    // Email validation
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
  
    // Full Address validation
    if (!formData.fullAddress) formErrors.fullAddress = "Address is required";
  
    // Password validation
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    } else if (!uppercasePattern.test(formData.password)) {
      formErrors.password = "Password must contain at least one uppercase letter";
    }
  
    // Confirm Password validation
    if (!formData.confirmPassword) {
      formErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
  
    // Phone number validation
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!phonePattern.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
    }
  
    // Postal code validation
    if (!formData.postalCode) {
      formErrors.postalCode = "Postal code is required";
    } else if (!postalPattern.test(formData.postalCode)) {
      formErrors.postalCode = "Postal code must be 5 digits";
    }
  
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Returns true if no errors
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix the errors before submitting.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:8000/register', formData)
      console.log('Form submitted successfully:', response.data);
      navigate('/login')
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const clearInputs = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      fullAddress: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      postalCode: '',
    });
  };

  return (
    <>
      <div className="text-center text-2xl font-semibold my-6">
        <h2>BANKING REGISTRATION</h2>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-black">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="Type Your First Name"
              value={formData.firstname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Type Your Last Name"
              value={formData.lastname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Type Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Full Address</label>
            <input
              type="text"
              name="fullAddress"
              placeholder="Type Your Full Address"
              value={formData.fullAddress}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.fullAddress && <p className="text-red-500 text-sm">{errors.fullAddress}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type 6 or more characters"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype Your Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Type Your Mobile Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              placeholder="Type Your Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="flex justify-between items-center mt-4">
            <span>Already a member?</span>
            <Link to="/login" className="text-blue-900 font-semibold text-lg m10-4">Login</Link>
            <span className="cursor-pointer text-red-600 font-semibold" onClick={clearInputs}>Clear Form</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
