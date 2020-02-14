//Display all weights
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';
import { AddWeight } from './AddWeight';

export const Weights = ({ token }) => {
  const [weights, setWeights] = useState([]);

  const addWeight = weight => {
    setWeights(weights => [...weights, weight]);
  };
  function fetchWeights() {
    console.log(token);
    axios
      .get(baseUrl + '/weights', {
        headers: {
          Authorization: 'bearer ' + token
        }
      })
      .then(function(res) {
        console.log(res.data);
        setWeights(weights.concat(res.data));
        console.log(weights);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchWeights();
  }, []);
  return (
    <div>
      {weights.map(weight => (
        <div>
          {weight.id}, {weight.weight_value}
        </div>
      ))}
      <AddWeight token={token} addWeight={addWeight}></AddWeight>
    </div>
  );
};
