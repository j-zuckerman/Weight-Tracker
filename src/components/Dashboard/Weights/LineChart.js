import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import moment from 'moment';

export const Chart = ({ weights }) => {
  let data = [];

  weights.forEach(weight => {
    const date = moment(weight.date).format('MMM Do');
    data.push({ weight: weight.weight_value, date });
  });

  console.log(data);

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <YAxis type="number" domain={[100, 300]} />
      <XAxis dataKey="date" />

      <Line type="monotone" dataKey="weight" stroke="#0CCD98" />
    </LineChart>
  );
};
