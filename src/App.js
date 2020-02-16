import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { Weights } from './components/Dashboard/Weights/Weights';
import { AddWeight } from './components/Dashboard/Weights/AddWeight';

const App = () => {
  const [token, setToken] = useState('');
  const [weights, setWeights] = useState([]);

  const addWeight = weight => {
    setWeights(weights.concat(weight));
  };

  const deleteWeight = id => {
    setWeights(weights.filter(weight => weight.id !== id));
    console.log(weights);
  };

  const editWeight = (id, weight) => {
    setWeights(
      weights.map(weight => {
        if (weight.id !== id) return weight;
        return { ...weight, weight_value: weight };
      })
    );
  };

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

          <Route
            exact
            path="/weights"
            render={() => (
              <Weights
                weights={weights}
                token={token}
                setWeights={setWeights}
              />
            )}
          />
          <Route
            exact
            path="/weights/add"
            render={() => (
              <AddWeight
                weights={weights}
                token={token}
                addWeight={addWeight}
              />
            )}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
