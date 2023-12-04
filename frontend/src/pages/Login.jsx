// src/App.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import './Login.css';

const Login = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async() => {
    // Add your authentication logic here
   
    console.log('Logging in with:', email, password);
    
    try {
      const response = await axios.post('http://localhost:5000/api/login',{email,password}, {
        headers: {
            'Content-Type': 'application/json'
        }
      });
      console.log('Login response:', response.data);
      // Handle successful login (e.g., set authentication token, redirect)
      if (email && password)   
          navigate('/')
        } catch (error) {
            console.error('Login error:', error);
            // Handle login failure (show error message)
        }

     
     
  };

  

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login to House Allotment System</h2>
        <form>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button"  onClick={handleSubmit} >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
