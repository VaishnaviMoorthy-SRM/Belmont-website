import React from "react";
import { LineChart } from "@mui/x-charts";
import {
  ResponsiveChartContainer,
  LinePlot,
  useDrawingArea,
  useYScale,
  useXScale,
} from "@mui/x-charts";

function Graph({ RXA, RXD, RXS, madin, madout }) {
  // Calculate the number of data points
  const numDataPoints = RXA.length;
  console.log(numDataPoints);
  const maddata = [parseInt(madin), parseInt(madout)];
  const xLabels = [0, 10, 20];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LineChart
        xAxis={[{ data: xLabels, label: "No Of Sessions" }]}
        yAxis={[
          { id: "linearAxis", scaleType: "linear" },
          { id: "logAxis", scaleType: "log" },
        ]}
        series={[
          { data: RXA, name: "RXA", curve: "linear", label: "Anxiety" },
          { data: RXD, name: "RXD", curve: "linear", label: "Depression" },
          { data: RXS, name: "RXS", curve: "linear", label: "Stress" },
          // { data: [10,20,0], name: "madra", curve: "linear", label: "madrass" },
        ]}
        width={500}
        height={300}
      ></LineChart>
      <LineChart
        xAxis={[{ data: [0, 10], label: "No Of Sessions" }]}
        yAxis={[
          { id: "linearAxis", scaleType: "linear" },
          { id: "logAxis", scaleType: "log" },
        ]}
        series={[
          {
            data: maddata,
            name: "Madras Score",
            curve: "linear",
            label: "MADRAS Score",
          },
        ]}
        width={400}
        height={250}
      ></LineChart>
    </div>
  );
}

export default Graph;
