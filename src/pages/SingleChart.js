import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ViewChart from "../components/ViewChart";

const SingleChart = ({ match }) => {
  const [data, setData] = useState(null);
  const initialData = useSelector((state) => state.charts);
  useEffect(() => {
    const chartArray = initialData.find(
      (data) => data.title.text === match.params.text
    );

    setData(chartArray);
  }, [initialData, match.params.text]);

  return (
    <>
      <Nav></Nav>

      {data ? <ViewChart data={data}></ViewChart> : <h1> Ginegenerate pa</h1>}
    </>
  );
};

export default SingleChart;
