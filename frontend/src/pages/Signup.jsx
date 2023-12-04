import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Signup.css';
// import Header from '../components/Header';

const Signup = () => {
  const navigate = useNavigate()
  

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here (send data to backend, etc.)
    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log('Signup successful:', response.data);
      navigate('/')
      // Handle success (redirect, show message, etc.)
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error (show error message, etc.)
    }

     
  };
 
     
  
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Hostel Allotment System </h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
