//Display all weights
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';
import { AddWeight } from './AddWeight';
import { Weight } from './Weight';

export const Weights = ({ token }) => {
  const [weights, setWeights] = useState([]);

  const addWeight = weight => {
    setWeights(weights.concat(weight));
  };

  const deleteWeight = id => {
    setWeights(weights.filter(weight => weight.id !== id));
    console.log(weights);
  };

  const editWeight = weight => {};
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
        <Weight
          weight={weight}
          deleteWeight={deleteWeight}
          editWeight={editWeight}
          token={token}
        />
      ))}
      <AddWeight token={token} addWeight={addWeight}></AddWeight>
    </div>
  );
};
