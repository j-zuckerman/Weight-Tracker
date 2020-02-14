//Display all weights
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';

export const Weights = ({ token }) => {
  const [weights, setWeights] = useState([]);

  function fetchWeights() {
    console.log(token);
    axios
      .get(baseUrl + '/weights', {
        headers: {
          Authorization: 'bearer ' + token
        }
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchWeights();
  }, []);
  return <div>Weights</div>;
};
