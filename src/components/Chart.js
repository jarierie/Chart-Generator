import { Bar, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Chart = () => {
  const state = {
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "burlywood",
        borderColor: "white",
        borderWidth: 2,
        data: [500, 400, 80, 81, 56],
      },
    ],
    labels: ["January", "February", "March", "April", "May"],
  };
  const data = useSelector((state) => state);
  useEffect(() => {
    console.log(data.data);
  });

  return (
    <>
      {data ? <Bar data={state} options={data.options} /> : <h1> puta nman</h1>}
    </>
  );
};

export default Chart;
