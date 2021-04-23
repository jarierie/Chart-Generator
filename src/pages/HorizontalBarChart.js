import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const HorizontalBarChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;

  return (
    <>
      <HorizontalBar></HorizontalBar>
      <h1>Horizontal motherfucker</h1>
    </>
  );
};

export default HorizontalBarChart;
