import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const Weight = ({ token, deleteWeight, editWeight, weight }) => {
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
      {weight.id}, {weight.weight_value}
      <DeleteIcon onClick={() => handleDelete(weight.id)} />
      <EditIcon />
    </div>
  );
};
