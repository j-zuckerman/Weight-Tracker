import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { baseUrl } from '../../api/baseURL';

export const LoginForm = ({ handleToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();

    //Call to API register endpoint
    axios
      .post(baseUrl + '/users/login', {
        username: username,
        password: password
      })
      .then(function(res) {
        handleToken(res.data.token);
      })
      .catch(function(error) {
        console.log(error);
      });

    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="username"
        placeholder="Username"
        value={username}
        onChange={handleUsername}
      />
      <TextField
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};
