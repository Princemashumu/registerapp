
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './pages/Home';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // Add login logic here
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     // Add signup logic here
//     setIsAuthenticated(true);
//   };
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           {isAuthenticated ? <Redirect to="/" /> : <Login handleLogin={handleLogin} />}
//         </Route>
//         <Route path="/Register">
//           {isAuthenticated ? <Redirect to="/" /> : <Register handleSignup={handleSignup} />}
//         </Route>
//         <PrivateRoute path="Home/" isAuthenticated={isAuthenticated} component={Home} />
//       </Switch>
//     </Router>
//   );
// };

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />

// );
// export default App

// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
