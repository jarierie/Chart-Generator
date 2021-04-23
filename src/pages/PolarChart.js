import React from "react";
import { Polar } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const PolarChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;
  return (
    <>
      {" "}
      <Polar></Polar>{" "}
    </>
  );
};

export default PolarChart;
