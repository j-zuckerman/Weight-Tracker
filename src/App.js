import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { Overview } from './components/Dashboard/Overview/Overview';

const App = () => {
  const [token, setToken] = useState('');

  const handleToken = tokenRecieved => {
    setToken(tokenRecieved);
  };

  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/register" render={() => <RegisterForm />} />

          <Route
            path="/login"
            render={() => <LoginForm handleToken={handleToken} />}
          />

          <Route path="/overview" render={() => <Overview token={token} />} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
