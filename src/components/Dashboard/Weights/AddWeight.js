import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';

export const AddWeight = ({ token, addWeight }) => {
  const [weightToAdd, setWeightToAdd] = useState(0);

  const handleWeightToAdd = e => {
    setWeightToAdd(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    //Call to API register endpoint
    axios
      .post(
        baseUrl + '/weights',
        {
          weight: weightToAdd
        },
        {
          headers: {
            Authorization: 'bearer ' + token
          }
        }
      )
      .then(function(res) {
        console.log(res);
        addWeight(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleWeightToAdd} value={weightToAdd}></TextField>
      <Button variant="contained" color="primary" type="submit">
        Add weight
      </Button>
    </form>
  );
};
