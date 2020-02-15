import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const Weight = ({ token, deleteWeight, editWeight, weight }) => {
  const [weightValue, setWeightValue] = useState(weight.weight_value);

  const handleWeightValue = e => {
    setWeightValue(e.target.value);
  };

  const handleEdit = async id => {
    axios
      .put(
        baseUrl + `/weights/${id}`,
        {
          weight: weightValue
        },

        {
          headers: {
            Authorization: 'bearer ' + token
          }
        }
      )
      .then(function(res) {
        console.log(res);
        editWeight(id, weightValue);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleDelete = async id => {
    axios
      .delete(
        baseUrl + `/weights/${id}`,

        {
          headers: {
            Authorization: 'bearer ' + token
          }
        }
      )
      .then(function(res) {
        console.log(res);
        deleteWeight(id);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <TextField
        id="username"
        placeholder="Username"
        value={weightValue}
        onChange={handleWeightValue}
      />

      <DeleteIcon onClick={() => handleDelete(weight.id)} />
      <EditIcon onClick={() => handleEdit(weight.id)} />
    </div>
  );
};
