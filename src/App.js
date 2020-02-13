import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { Overview } from './components/Overview/Overview';

const App = () => {
  const [token, setToken] = useState('');

  const handleToken = tokenRecieved => {
    setToken(tokenRecieved);
  };

  return (
    <Container maxWidth="sm">
      <RegisterForm></RegisterForm>
      <LoginForm handleToken={handleToken}></LoginForm>
      <Overview token={token}></Overview>
    </Container>
  );
};

export default App;
