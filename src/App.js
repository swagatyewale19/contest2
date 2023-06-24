import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

