import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { Weights } from './components/Dashboard/Weights/Weights';
import { AddWeight } from './components/Dashboard/Weights/AddWeight';

const App = () => {
  const [token, setToken] = useState('');
  const [userDetails, setUserDetails] = useState({});

  const handleToken = tokenRecieved => {
    setToken(tokenRecieved);
  };

  return (
    <Router basename="/Weight-Tracker/">
      <Container maxWidth="sm">
        <Switch>
          <Route path="/register" render={() => <RegisterForm />} />

          <Route
            path="/login"
            render={() => (
              <LoginForm
                setUserDetails={setUserDetails}
                handleToken={handleToken}
              />
            )}
          />

          <Route
            exact
            path="/weights"
            render={() => <Weights userDetails={userDetails} token={token} />}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
