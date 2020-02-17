import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export const Chart = ({ weights }) => {
  let data = [];

  weights.forEach(weight => {
    data.push({ weight: weight.weight_value, date: weight.date });
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
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />

      <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
    </LineChart>
  );
};
