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
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PolarChart from "../pages/PolarChart";

const Chart = () => {
  const [state, setState] = useState({
    labels: null,
    dataSets: null,
  });
  const nice = {
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "burlywood",
        borderColor: "white",
        borderWidth: 2,
        data: [500, 400, 80, 81, 56],
      },
    ],
    labels: ["January", "February", "March", "April", "May"],
  };
  const data = useSelector((state) => state);

  // **** We can get rid of this useEffect hook because we can just use the data we got from the redux store directly

  // useEffect(() => {
  //   setState({
  //     labels: data.data,
  //     datasets: data.dataSets,
  //   });
  //   console.log(data);
  // }, []);

  const { title, legend, scales } = data;

  useEffect(() => {
    console.log(data);
  }, []);

  const getChart = () => {
    switch (data.type) {
      case "line":
        return (
          <Line
            data={{
              labels: data.data,
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
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
              datasets: data.dataSets,
            }}
            options={{
              title: title,
              legend: legend,
              scales: scales,
            }}
          ></Doughnut>
        );
    }
  };

  return <>{data ? getChart() : <h1> puta nman</h1>}</>;
};

export default Chart;
