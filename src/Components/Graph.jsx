import React from 'react';
import { LineChart} from '@mui/x-charts';
import {
    ResponsiveChartContainer,
    LinePlot,
    useDrawingArea,
    useYScale,
    useXScale,
  } from '@mui/x-charts';

function Graph({ RXA, RXD, RXS }) {
  // Calculate the number of data points
  const numDataPoints = RXA.length;

   const xLabels = [10,20,30]

  return (
    <LineChart
      xAxis={[{ data: xLabels, label:'No Of Sessions' }]}
      yAxis={[
        { id: 'linearAxis', scaleType: 'linear' },
        { id: 'logAxis', scaleType: 'log' },
      ]}
      series={[
        { data: RXA, name: 'RXA', curve: 'linear' , label:'Anxiety' },
        { data: RXD, name: 'RXD', curve: 'linear',label:'Depression' },
        { data: RXS, name: 'RXS', curve: 'linear',label:'Stress' },
      ]}
      width={600}
      height={300}
    >



    </LineChart>
  );
}

export default Graph;
