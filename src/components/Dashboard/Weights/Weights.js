//Display all weights
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Redirect } from 'react-router-dom';
import { baseUrl } from '../../../api/baseURL';
import { Weight } from './Weight';
import { Chart } from './LineChart';
import { Progress } from './Progress';
import {
  StyledFloatingActionButton,
  FloatingActionButtonContainer
} from '../../Styled/FloatingActionButton';
import { AddWeight } from './AddWeight';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export const Weights = ({ token, userDetails }) => {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [weights, setWeights] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        console.log(res);
        setWeights(weights.concat(res.data));

        setCurrentWeight(res.data[res.data.length - 1].weight_value);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  const addWeight = weight => {
    setWeights(weights.concat(weight));
  };

  const deleteWeight = id => {
    setWeights(weights.filter(weight => weight.id !== id));
    console.log(weights);
  };

  const editWeight = (id, weight) => {
    setWeights(
      weights.map(weight => {
        if (weight.id !== id) return weight;
        return { ...weight, weight_value: weight };
      })
    );
  };

  useEffect(() => {
    fetchWeights();
  }, []);

  return (
    <div>
      <Chart weights={weights} currentWeight={currentWeight} />

      <Progress userDetails={userDetails} currentWeight={currentWeight} />

      <List>
        {weights.map(weight => (
          <Weight weight={weight} token={token} />
        ))}
      </List>

      <FloatingActionButtonContainer>
        <StyledFloatingActionButton
          onClick={handleOpen}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          New Weight
        </StyledFloatingActionButton>
      </FloatingActionButtonContainer>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AddWeight token={token} addWeight={addWeight} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
