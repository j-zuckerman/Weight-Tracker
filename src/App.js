import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { Overview } from './components/Overview/Overview';

const App = () => {
  const [token, setToken] = useState('');

  const handleToken = tokenRecieved => {
    setToken(tokenRecieved);
  };

  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/register">
            <RegisterForm></RegisterForm>
          </Route>
          <Route exact path="/login">
            <LoginForm handleToken={handleToken}></LoginForm>
          </Route>
          <Route exact path="/overview">
            <Overview token={token}></Overview>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
