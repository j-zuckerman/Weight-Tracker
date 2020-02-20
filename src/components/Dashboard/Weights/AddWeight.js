import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Calendar from 'react-calendar';
import { baseUrl } from '../../../api/baseURL';
import {
  FloatingActionButtonContainer,
  StyledFloatingActionButton
} from '../../Styled/FloatingActionButton';

export const AddWeight = ({ token, addWeight }) => {
  const [weightToAdd, setWeightToAdd] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleWeightToAdd = e => {
    setWeightToAdd(e.target.value);
  };

  const onChange = date => {
    setDate(date);
    console.log(date);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    axios
      .post(
        baseUrl + '/weights',
        {
          weight: weightToAdd,
          date: date
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
    <div>
      <Calendar onChange={onChange} value={date}></Calendar>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleWeightToAdd} value={weightToAdd}></TextField>

        <FloatingActionButtonContainer>
          <StyledFloatingActionButton
            variant="extended"
            size="medium"
            color="primary"
            type="submit"
          >
            Save Weight
          </StyledFloatingActionButton>
        </FloatingActionButtonContainer>
      </form>
    </div>
  );
};
