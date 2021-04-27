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
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/button";
import styled from "styled-components";
import { addChartAction } from "../actions/addChartAction";

const Container = styled.div`
  margin: auto;
  width: 90%;
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

const Chart = () => {
  const data = useSelector((state) => state);
  const chartDispatch = useDispatch();

  const { title, legend, scales, type } = data;

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
      default:
        return;
    }
  };

  // Methods

  const saveChart = (e) => {
    e.preventDefault();
    chartDispatch(
      addChartAction({
        data: data.data,
        datasets: data.dataSets,
        title: title,
        type: type,
        legend: legend,
        scales: scales,
      })
    );
  };

  // Styled

  return (
    <Container>
      {data ? getChart() : <h1> maglagay ka ng chart boss</h1>}{" "}
      <Button onClick={saveChart} left='0'>
        Save Chart
      </Button>
    </Container>
  );
};

export default Chart;
