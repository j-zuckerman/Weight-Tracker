import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { baseUrl } from '../../api/baseURL';
import axios from 'axios';

export const StartWeight = ({ token }) => {
  const [startWeight, setStartWeight] = useState(0);

  const handleStartWeight = e => {
    setStartWeight(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    //Call to API register endpoint
    axios
      .put(
        baseUrl + '/users/start_weight',
        { weight: startWeight },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleStartWeight} value={startWeight}></TextField>
      <Button variant="contained" color="primary" type="submit">
        Edit Start Weight
      </Button>
    </form>
  );
};
