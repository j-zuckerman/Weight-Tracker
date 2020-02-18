import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../../Styled/ProgressBar';

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
      {currentWeight}
      {userDetails.username} -- {userDetails.startWeight} --{' '}
      {userDetails.goalWeight}
    </div>
  );
};
