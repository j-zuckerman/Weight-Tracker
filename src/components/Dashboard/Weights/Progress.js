import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../../Styled/ProgressBar';
import { ProgressDetails } from '../../Styled/ProgressDetails';

export const Progress = ({ currentWeight, userDetails }) => {
  function calculatePercentageOfWeightLoss() {
    let totalWeightToLose = userDetails.startWeight - userDetails.goalWeight;
    let totalWeightLossSoFar = userDetails.startWeight - currentWeight;
    console.log(totalWeightToLose);
    console.log(totalWeightLossSoFar);
    return '' + totalWeightLossSoFar / totalWeightToLose + '%';
  }

  return (
    <div>
      <div>
        <ProgressDetails>
          <h3>{userDetails.startWeight + ' lbs'} </h3>
          <h2>{currentWeight + ' lbs'}</h2>
          <h3> {userDetails.goalWeight + ' lbs'}</h3>
        </ProgressDetails>
        <ProgressBar
          width={
            '' +
            ((userDetails.startWeight - currentWeight) /
              (userDetails.startWeight - userDetails.goalWeight)) *
              100 +
            '%'
          }
        />
      </div>
    </div>
  );
};
