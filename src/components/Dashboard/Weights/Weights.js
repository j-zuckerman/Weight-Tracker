//Display all weights
import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { baseUrl } from '../../../api/baseURL';
import { Weight } from './Weight';
import { Chart } from './LineChart';
import { Progress } from './Progress';
import { StyledFloatingActionButton } from '../../Styled/FloatingActionButton';

export const Weights = ({ token, weights, setWeights, userDetails }) => {
  const [addWeight, setAddWeight] = useState(false);
  const [currentWeight, setCurrentWeight] = useState(0);

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

        setCurrentWeight(res.data[res.data.length - 1].weight_value);
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
        <Chart weights={weights} />

        <Progress userDetails={userDetails} currentWeight={currentWeight} />

        <List>
          {weights.reverse().map(weight => (
            <Weight weight={weight} token={token} />
          ))}
        </List>

        <StyledFloatingActionButton
          onClick={handleClick}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          New Weight
        </StyledFloatingActionButton>
      </div>
    );
};
