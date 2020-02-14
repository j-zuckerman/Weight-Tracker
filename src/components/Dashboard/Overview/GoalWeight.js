import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';

export const GoalWeight = ({ token }) => {
  const [goalWeight, setGoalWeight] = useState(0);

  const handleGoalWeight = e => {
    setGoalWeight(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(token);
    //Call to API register endpoint
    axios
      .put(
        baseUrl + '/users/goal_weight',
        { weight: goalWeight },
        {
          headers: {
            Authorization: 'bearer ' + token
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
      <TextField onChange={handleGoalWeight} value={goalWeight}></TextField>
      <Button variant="contained" color="primary" type="submit">
        Edit Goal Weight
      </Button>
    </form>
  );
};
