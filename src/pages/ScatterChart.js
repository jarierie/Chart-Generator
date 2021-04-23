import React from "react";
import { Scatter } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const ScatterChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;
  return (
    <>
      {" "}
      <Scatter></Scatter>{" "}
    </>
  );
};

export default ScatterChart;
