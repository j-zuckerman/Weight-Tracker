import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';
import Calendar from 'react-calendar';
import { baseUrl } from '../../../api/baseURL';
import { StyledButton } from '../../Styled/Button';
import { StyledCalendar } from '../../Styled/Calendar';

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

    //Call to API register endpoint
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
        <TextField
          InputProps={{ style: { color: 'white' } }}
          onChange={handleWeightToAdd}
          value={weightToAdd}
        ></TextField>

        <StyledButton type="submit"> Save</StyledButton>
      </form>
    </div>
  );
};
