import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActionCreator } from "../actions/addActionCreator";
import { Link } from "react-router-dom";
import { pushDataActionCreator } from "../actions/pushDataActionCreator";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { addOptionTitleCreator } from "../actions/addOptionTitleCreator";
import { addOptionLegendCreator } from "../actions/addOptionLegendCreator";

const FontContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #0d0d0d;
`;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  height: 400px;
  background-color: transparent;
  color: "white";

  h1 {
    font-family: "Verdana";
    color: white;
    font-size: 50px;
  }
`;

const Inputs = () => {
  const [labelString, setLabel] = useState([]);
  const [datasets, setData] = useState([]);
  const [titleOption, setTitleOption] = useState({
    display: true,
    text: "Please put a title",
    fontSize: 36,
    fontColor: "",
  });
  const [legendOption, setLegendOption] = useState({
    display: Boolean,
    position: "top",
    labels: {
      fontColor: "",
    },
  });

  const addDispatch = useDispatch();
  const pushDispatch = useDispatch();
  const addTitleDispatch = useDispatch();
  const addLegendDispatch = useDispatch();

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const handleDataSetChange = (e) => {
    setData({ ...datasets, [e.target.name]: e.target.value });
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
  //  legend and title function handlers
  const handleTitleChange = (e) =>
    setTitleOption({ ...titleOption, [e.target.name]: e.target.value });
  const handleTitleDisplay = (e) => {
    let value;
    if (e.target.value === "Visible") {
      value = true;
    } else {
      value = false;
    }
    setTitleOption({
      ...titleOption,
      display: value,
    });
  };

  const handleLegendDisplay = (e) => {
    let value;
    if (e.target.value === "Visible") {
      value = true;
    } else {
      value = false;
    }
    setLegendOption({
      ...legendOption,
      display: value,
    });
  };

  const handleLegendChange = (e) => {
    setLegendOption({
      ...legendOption,
      position: e.target.value,
    });
  };

  const labelsChange = (e) => {
    setLegendOption({
      ...legendOption,
      labels: {
        fontColor: e.target.value,
      },
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const labels = labelString.split(" ");

    addDispatch(addActionCreator(labels));
    pushDispatch(pushDataActionCreator(datasets));
    addTitleDispatch(addOptionTitleCreator(titleOption));
    addLegendDispatch(addOptionLegendCreator(legendOption));
  };

  useEffect(() => {
    console.log(legendOption);
  }, [legendOption]);

  return (
    <>
      <FontContainer>
        <Hero>
          <iframe
            src='https://giphy.com/embed/NGp9QCXJcBPuU'
            width='480'
            height='270'
            frameBorder='0'
            class='giphy-embed'
            allowFullScreen
          ></iframe>
          <p>
            <a href='https://giphy.com/gifs/mrw-car-somebody-NGp9QCXJcBPuU'></a>
          </p>
          <h1>Make me a damn chart!</h1>
        </Hero>
        <Flex align='center' justifyContent='center'>
          <Box
            color='white'
            borderRadius='10px'
            boxShadow='xl'
            mt='5'
            bg='gray.800'
            p={50}
          >
            <Box textAlign='center'>
              <Heading>Create a Chart</Heading>
            </Box>
            <Box
              minWidth='100%'
              width='550px'
              display='flex'
              justifyContent='space-between'
            >
              <Box my={4} textAlign='left'>
                <form>
                  <FormControl>
                    <FormLabel>Labels</FormLabel>
                    <Input
                      onChange={handleLabelChange}
                      value={labelString}
                      name='labels'
                      mb='15'
                      width='100%'
                      type='text'
                      name='labels'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Label</FormLabel>
                    <Input
                      onChange={handleDataSetChange}
                      mb='15'
                      width='100%'
                      type='text'
                      name='label'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Background Color</FormLabel>
                    <Input
                      onChange={handleDataSetChange}
                      mb='15'
                      width='100%'
                      type='text'
                      name='backgroundColor'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Border Color</FormLabel>
                    <Input
                      onChange={handleDataSetChange}
                      mb='15'
                      width='100%'
                      type='text'
                      name='borderColor'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Border Width</FormLabel>
                    <Input
                      onChange={handleDataSetChange}
                      mb='15'
                      width='100%'
                      type='number'
                      name='borderWidth'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Data</FormLabel>
                    <Input
                      onChange={handleDataArrayChange}
                      mb='15'
                      width='100%'
                      type='text'
                      name='data'
                      autoComplete='off'
                    ></Input>
                  </FormControl>
                </form>
              </Box>
              {/* OPTIONS */}
              {/* title options */}
              <Box my='4'>
                <FormLabel>Show Title</FormLabel>
                <Select onChange={handleTitleDisplay} name='display'>
                  <option value='Visible' style={{ color: "black" }}>
                    Visible
                  </option>
                  <option value='Hidden' style={{ color: "black" }}>
                    Hidden
                  </option>
                </Select>
                <FormLabel>Title text</FormLabel>
                <Input onChange={handleTitleChange} name='text'></Input>
                <FormLabel>Font Size</FormLabel>
                <Input
                  onChange={handleTitleChange}
                  name='fontSize'
                  type='number'
                ></Input>
                <FormLabel>Font Color</FormLabel>
                <Input onChange={handleTitleChange} name='fontColor'></Input>
                {/* legend options */}
                <FormLabel>Show Title</FormLabel>
                <Select onChange={handleLegendDisplay} name='display'>
                  <option value='Visible'>Visible</option>
                  <option value='Hidden'>Hidden</option>
                </Select>
                <FormLabel>Legend Position</FormLabel>
                <Select
                  value={legendOption.position}
                  onChange={handleLegendChange}
                  name='display'
                >
                  <option value='top' style={{ color: "black" }}>
                    top
                  </option>
                  <option value='right' style={{ color: "black" }}>
                    right
                  </option>
                  <option value='bottom' style={{ color: "black" }}>
                    bottom
                  </option>
                  <option value='left' style={{ color: "black" }}>
                    left
                  </option>
                </Select>
                <FormLabel>Label Font Color</FormLabel>
                <Input
                  onChange={labelsChange}
                  value={legendOption.labels.fontColor}
                  name='labelFontColor'
                ></Input>
                {/* <Select placeholder='nice one pota' color='white'>
                  <option>Nice one boss</option>
                  <option>bwahaha</option>
                </Select> */}
              </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Link to='/chart'>
                <Button
                  border='none'
                  width='100%'
                  width='250px'
                  bgColor='green.700'
                  mt='5'
                >
                  Save Chart
                </Button>
              </Link>

              <Button
                onClick={submit}
                border='none'
                width='250px'
                bgColor='purple.500'
                mt='5'
              >
                Create Chart
              </Button>
            </Box>
          </Box>
        </Flex>
      </FontContainer>
    </>
  );
};

export default Inputs;
