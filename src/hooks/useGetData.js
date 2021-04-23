import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useGetData = () => {
  const [data, setData] = useState({});
  const state = useSelector((state) => state);
  useEffect(() => {
    setData(state);
  }, []);
  return { data };
};

export default useGetData;
