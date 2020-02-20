import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom';
import { baseUrl } from '../../api/baseURL';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [startWeight, setStartWeight] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleStartWeight = e => {
    setStartWeight(e.target.value);
  };
  const handleGoalWeight = e => {
    setGoalWeight(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();

    //Call to API register endpoint
    axios
      .post(baseUrl + '/users/register', {
        username: username,
        password: password,
        goalWeight: goalWeight,
        startWeight: startWeight
      })
      .then(function(res) {
        setUsername('');
        setPassword('');
        setGoalWeight('');
        setStartWeight('');

        setIsRegistered(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if (isRegistered) return <Redirect to="/login" />;
  else
    return (
      <>
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            fullWidth
          />
          <TextField
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            fullWidth
          />

          <TextField
            placeholder="Start Weight"
            value={startWeight}
            onChange={handleStartWeight}
            fullWidth
          />

          <TextField
            placeholder="Goal Weight"
            value={goalWeight}
            onChange={handleGoalWeight}
            fullWidth
          />

          <Button variant="contained" color="primary" type="submit" m={5}>
            Register
          </Button>

          <Link to="/login">Already have an account? Login here</Link>
        </form>
      </>
    );
};
