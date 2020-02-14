import React, { useState } from 'react';
import { GoalWeight } from './GoalWeight';
import { StartWeight } from './StartWeight';
import { Weights } from '../Weights/Weights';

export const Overview = ({ token }) => {
  return (
    <React.Fragment>
      <StartWeight token={token}></StartWeight>
      <GoalWeight token={token}></GoalWeight>
      <Weights token={token}></Weights>
    </React.Fragment>
  );
};
