import React from "react";
import { Bubble } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const BubbleChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;

  return (
    <>
      <Bubble
        data={{
          labels: data,
          datasets: dataSets,
        }}
        options={{
          title,
          legend,
          scales,
        }}
      ></Bubble>{" "}
      <h1></h1>
    </>
  );
};

export default BubbleChart;
