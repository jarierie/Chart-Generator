import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActionCreator } from "../actions/addActionCreator";
import { Link } from "react-router-dom";
import { pushDataActionCreator } from "../actions/pushDataActionCreator";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    margin-left: 5px;
  }
`;

const Button = styled.button`
  margin-top: 12px;
`;

const Input = () => {
  const getData = useSelector((state) => state);
  const [labelString, setLabel] = useState([]);

  const [datasets, setData] = useState([]);

  const addDispatch = useDispatch();
  const pushDispatch = useDispatch();

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const handleDataSetChange = (e) => {
    setData({ ...datasets, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const labels = labelString.split(" ");
    addDispatch(addActionCreator(labels));

    pushDispatch(pushDataActionCreator(datasets));
  };

  const handleDataArrayChange = (e) => {
    const convertBorderWidthToNumber = parseInt(datasets.borderWidth);
    const dataArray = e.target.value.split(" ");
    const convertedDataArray = dataArray.map((data) => parseInt(data));
    setData({
      ...datasets,
      data: convertedDataArray,
      borderWidth: convertBorderWidthToNumber,
    });
  };
  useEffect(() => {
    console.log(datasets);
  }, [datasets]);

  return (
    <>
      {" "}
      <Container>
        <form>
          <label>
            labelString:
            <input
              value={labelString}
              onChange={handleLabelChange}
              name='labels'
              placeholder='put some data'
            ></input>
          </label>
          <label>
            labels:
            <input
              onChange={handleDataSetChange}
              name='label'
              placeholder='put some data'
            ></input>
          </label>
          <label>
            backgroundColor:
            <input
              onChange={handleDataSetChange}
              name='backgroundColor'
              placeholder='put some data'
            ></input>
          </label>
          <label>
            borderColor:
            <input
              onChange={handleDataSetChange}
              name='borderColor'
              placeholder='put some data'
            ></input>
          </label>
          <label>
            borderWidth:
            <input
              type='number'
              onChange={handleDataSetChange}
              name='borderWidth'
              placeholder='put some data'
            ></input>
          </label>
          <label>
            Data:
            <input
              onChange={handleDataArrayChange}
              name='data'
              placeholder='Data'
            ></input>
          </label>
          <Link to='/chart'>Create Chart</Link>

          <Button onClick={submit}>Send mo na boss </Button>
        </form>
      </Container>
    </>
  );
};

export default Input;
