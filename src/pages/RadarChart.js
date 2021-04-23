import React from "react";
import { Radar } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const RadarChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;
  return (
    <>
      {" "}
      <Radar></Radar>{" "}
    </>
  );
};

export default RadarChart;
