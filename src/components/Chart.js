import { Bar, Doughnut, Radar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Chart = () => {
  const [state, setState] = useState({
    data: null,
    dataSets: null,
  });
  const nice = {
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
    setState({
      labels: data.data,
      datasets: data.dataSets,
    });
    console.log(data);
  }, []);

  return (
    <>
      {data ? (
        <Bar
          data={state}
          options={{
            title: data.title,
            legend: data.legend,
            scales: data.scales,
          }}
        />
      ) : (
        <h1> puta nman</h1>
      )}
    </>
  );
};

export default Chart;
