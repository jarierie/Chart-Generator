import React from "react";
import { useGetData } from "../hooks/useGetData";
import { Pie,  } from "react-chartjs-2";

const PieChart = () => {
  const { data } = useGetData();
  console.log(data);
  return (
    <>
      <h1> Hahahha</h1>
      <Pie></Pie>
    </>
  );
};

export default PieChart;
