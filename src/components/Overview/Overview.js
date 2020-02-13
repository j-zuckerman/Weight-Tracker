import React, { useState } from 'react';
import { GoalWeight } from './GoalWeight';
import { StartWeight } from './StartWeight';

export const Overview = ({ token }) => {
  return (
    <React.Fragment>
      <StartWeight token={token}></StartWeight>
      <GoalWeight token={token}></GoalWeight>
    </React.Fragment>
  );
};
