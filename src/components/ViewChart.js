import React from "react";

import {
  Bar,
  Bubble,
  Doughnut,
  HorizontalBar,
  Line,
  Pie,
  Polar,
  Radar,
  Scatter,
} from "react-chartjs-2";

const ViewChart = ({ data }) => {
  const { title, legend, scales, datasets } = data;

  const getChart = () => {
    switch (data.type) {
      case "line":
        return (
          <Line
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          />
        );
      case "bar":
        return (
          <Bar
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Bar>
        );
      case "horizontalbar":
        return (
          <HorizontalBar
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></HorizontalBar>
        );
      case "pie":
        return (
          <Pie
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Pie>
        );
      case "bubble":
        return (
          <Bubble
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          />
        );
      case "polar":
        return (
          <Polar
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Polar>
        );
      case "radar":
        return (
          <Radar
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Radar>
        );
      case "scatter":
        return (
          <Scatter
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Scatter>
        );
      case "doughnut":
        return (
          <Doughnut
            data={{
              labels: data.data,
              datasets: datasets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Doughnut>
        );
      default:
        return;
    }
  };
  return <>{getChart()}</>;
};

export default ViewChart;
