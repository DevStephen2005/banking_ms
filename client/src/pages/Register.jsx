import { useState } from "react";
import axios from 'axios';
import "../css/register.css";
import "../css/home.css";
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
    setFormData('')
  }
  

  return (
    <>
      <div className="register">
          <h2>BANKING REGISTRATION</h2>
          </div>
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="Type Your First Name"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
            {errors.firstname && <p className="error-text">{errors.firstname}</p>}
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Type Your Last Name"
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
            {errors.lastname && <p className="error-text">{errors.lastname}</p>}
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Type Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Full Address</label>
            <input
              type="text"
              name="fullAddress"
              placeholder="Type Your Full Address"
              value={formData.fullAddress}
              onChange={handleInputChange}
              required
            />
            {errors.fullAddress && <p className="error-text">{errors.fullAddress}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type 6 or more characters"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype Your Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Type Your Mobile Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              placeholder="Type Your Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
            {errors.postalCode && <p className="error-text">{errors.postalCode}</p>}
          </div>
          <button type="submit" className="register_btn" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="foot mt-4">
          <span>Already a member?</span>
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
          <span className="clear" onClick={clearInputs}>Clear</span>

        </div>
        </form>
      </div>
    </>
  );
};

export default Register;
