import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import LoginStyle from '../components/LoginStyle.css'


const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };
  const handleLogin = (username,email,password) => {
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    if (storedCredentials && storedCredentials.username === username && storedCredentials.email === email && storedCredentials.password === password) {
      alert('Login successful!');
      navigate('/Home');
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <>
    
    <div className="LoginNavBar">
    <div clasname="CompanyName">
      <h1>ERStaff</h1>
    </div>
        <div className="Button2">
          <a href='Register'><button>SIGNUP</button></a>
        
        </div>
    <div className="CompanyLogo"><img src="Applogo.png"></img></div>
  </div>

  <div className="LoginWrapper">
    <div className="Header">
      <h2>FAST EASY EFFECTIVE.</h2>
      <p>Way To Design and Manage employees Effeciently. </p>
    </div>
  <div className="main">
    <mainChild>
    <AuthForm handleSubmit={handleLogin} formType="login" />
    </mainChild>
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

export default Login