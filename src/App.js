import React from 'react';
import Container from '@material-ui/core/Container';
import { RegisterForm } from './components/RegisterForm';

const App = () => {
  return (
    <Container maxWidth="sm">
      <RegisterForm></RegisterForm>
    </Container>
  );
};

export default App;
