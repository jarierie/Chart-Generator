import React from "react";
import { Line } from "react-chartjs-2";
import useGetData from "../hooks/useGetData";

const LineChart = () => {
  const { data: dataFromStore } = useGetData();
  const { datas, dataSets, title, legend, scales } = dataFromStore;
  return (
    <>
      {" "}
      <Line></Line> <h1>Hahahah line chart to gago</h1>
    </>
  );
};

export default LineChart;
