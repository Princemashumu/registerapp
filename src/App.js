

import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import AddEmployeeModal from './pages/AddEmployeeModal.js';
import EmployeeData from './components/EmployeeData.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Add login logic here
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    // Add signup logic here
    setIsAuthenticated(true);
  };

  return (
    <Router>
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/Home" /> : <Login handleLogin={handleLogin} />}
      />
      <Route
        path="/Register"
        element={isAuthenticated ? <Navigate to="/login" /> : <Register handleSignup={handleSignup} />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/EmployeeData" element={<EmployeeData/>}/>
    </Routes>
 
    
  </Router>
  );
};


export default App;