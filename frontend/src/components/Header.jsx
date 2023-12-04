// Header.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    // Add your logic for handling the login button click
    console.log('Login button clicked');
    // You can navigate to a login page or show a login modal, etc.
    navigate('/login');
  };

  const handleSignUp = () => {
    // Add your logic for handling the signUp button click
    console.log('SignUp button clicked');
    // You can navigate to a sign-up page or show a sign-up modal, etc.
    navigate('/Signup');
  };
 
  return (
    <header  >
      <h1>Hostel Allotment</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
           
 
          <Button   style={{ marginLeft: '5rem', marginRight:'1rem',background:'red',color:'white' }} 
             onClick={handleLogin} >Login</Button>
          <Button style={{ background:'red',color:'white' }} 
             onClick={handleSignUp} >SignUp</Button>
           
        </ul>

      </nav>
    </header>
  );
};

export default Header;
