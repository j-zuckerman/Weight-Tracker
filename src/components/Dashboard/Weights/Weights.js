//Display all weights
import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { baseUrl } from '../../../api/baseURL';
import { Weight } from './Weight';

export const Weights = ({ token, weights, setWeights }) => {
  const [addWeight, setAddWeight] = useState(false);

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

  const handleClick = () => {
    setAddWeight(true);
  };

  useEffect(() => {
    fetchWeights();
  }, []);

  if (addWeight) return <Redirect to="/weights/add"></Redirect>;
  else
    return (
      <div>
        {weights.map(weight => (
          <Weight weight={weight} token={token} />
        ))}
        <Fab
          onClick={handleClick}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          New Weight
        </Fab>
      </div>
    );
};
