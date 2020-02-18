import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { baseUrl } from '../../../api/baseURL';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { WeightContainer } from '../../Styled/WeightContainer';

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
    <React.Fragment>
      <ListItem>
        <ListItemText
          primary={weight.weight_value + ' lbs'}
          secondary={moment(weight.date).format('MMM Do')}
        />
      </ListItem>
      <Divider />
    </React.Fragment>
  );
};
