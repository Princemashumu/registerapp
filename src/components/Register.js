import React, { useState } from 'react'
import RegisterStyle from '../components/RegisterStyle.css'
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import styled from 'styled-components';

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Alert = styled.div`
  background-color:green;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 80%;
  border-radius:25px;
`;

const Register = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();


  const handleSignup = (username,email, password) => {
    // Save the credentials to local storage
    const credentials = { username,email, password};
    localStorage.setItem('credentials', JSON.stringify(credentials));
    // Show success alert
    alert('Account created successfully!');
    // Redirect to login page
    navigate('/login');
  };
  return (
    <>
    <div className="RegisterNavBar">
    <div clasname="CompanyName">
      <h1>ERStaff</h1>
    </div>
        <div className="Button1">
        <a href='Login'>
        <button>LOGIN</button>
        </a>
        </div>
        <div className="CompanyLogo"><img src="Applogo.png"></img></div>
  </div>
    <div className="RegisterWrapper">
    <div className="Header">
      <h2>FAST EASY EFFECTIVE.</h2>
      <p>Way To Design and Manage employees Effeciently. </p>
    </div>
    
        <div className="Main">
        {signupSuccess && (
        <AlertOverlay>
          <Alert>Account created successfully!</Alert>
        </AlertOverlay>
      )}
        <AuthForm handleSubmit={handleSignup} formType="signup" />
        </div>
  <div className="Footer">
    <p>Media and Graphics Prince Mashumu 2024</p>
</div>
  </div>
  <p id="socmed-container">
    <a href="https://www.facebook.com/eTvStaff/">
      <img id="fb-img" width="25" src="https://i.imgur.com/6ye5lwf.png" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/eTvStaff/">
      <img id="ig-img" width="25" src="https://i.imgur.com/SEsRzFL.png" alt="Instagram" />
    </a>
    <a href="https://www.twitter.com/eTvStaff/">
      <img id="twitter-img" width="25" src="https://i.imgur.com/y8o23cc.png" alt="Twitter" />
    </a>
  </p>
  </>
  )
}

export default Register