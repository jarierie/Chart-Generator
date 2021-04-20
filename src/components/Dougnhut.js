import React from "react";
import styled from "styled-components";
import {
  Doughnut,
  Bar,
  Bubble,
  Radar,
  HorizontalBar,
  defaults,
} from "react-chartjs-2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightcoral;
`;

const DoughnutChart = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [10000, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <>
      <Container>
        <HorizontalBar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },

            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "black",
              },
            },
          }}
        />
      </Container>
    </>
  );
};

export default DoughnutChart;
