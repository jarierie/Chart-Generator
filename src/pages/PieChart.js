import React from "react";
import { Pie } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const PieChart = () => {
  const { data: dataFromStore } = useGetData();
  const { data, dataSets, title, legend, scales } = dataFromStore;
  return (
    <>
      {" "}
      <Pie></Pie>{" "}
    </>
  );
};

export default PieChart;
