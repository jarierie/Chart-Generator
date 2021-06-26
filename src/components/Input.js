import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActionCreator } from "../actions/addActionCreator";
import { Link } from "react-router-dom";
import { pushDataActionCreator } from "../actions/pushDataActionCreator";
import { GithubPicker } from "react-color";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { addOptionTitleCreator } from "../actions/addOptionTitleCreator";
import { addOptionLegendCreator } from "../actions/addOptionLegendCreator";
import { barTypeAction } from "../actions/barTypeAction";
import InputComponent from "./InputComponent";

const FontContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #0d0d0d;
`;

const AbsoluteContainer = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  margin-left: 50%;
  z-index: 9999;
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
  // color
  const [colorString, setColorString] = useState("#0d0d0d");
  const [focus, setFocus] = useState(false);
  const [barType, setBarType] = useState("line");
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
  const addBarType = useDispatch();

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

  const handleBarTypeChange = (e) => {
    setBarType(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    const labels = labelString.split(" ");

    addDispatch(addActionCreator(labels));
    pushDispatch(pushDataActionCreator(datasets));
    addTitleDispatch(addOptionTitleCreator(titleOption));
    addLegendDispatch(addOptionLegendCreator(legendOption));
    addBarType(barTypeAction(barType));
  };

  const handleColorChange = (color) => {
    setColorString(color.hex);
    setFocus(false);
  };

  return (
    <>
      <FontContainer>
        {/* <Hero>
          <iframe
            title='asdasd'
            src='https://giphy.com/embed/NGp9QCXJcBPuU'
            width='480'
            height='270'
            frameBorder='0'
            allowFullScreen
          ></iframe>
          <p>
            <a href='https://giphy.com/gifs/mrw-car-somebody-NGp9QCXJcBPuU'>
              {" "}
            </a>
          </p>
          <h1>Make me a damn chart!</h1>
        </Hero> */}
        <Flex align='center' justifyContent='center'>
          <Box
            color='white'
            borderRadius='10px'
            boxShadow='xl'
            mt='5'
            bg='gray.800'
            p='20'
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
                  <InputComponent
                    formLabel='Labels'
                    name='labels'
                    onChange={handleLabelChange}
                    value={labelString}
                    type='text'
                  ></InputComponent>
                  <InputComponent
                    formLabel='Label'
                    name='label'
                    onChange={handleDataSetChange}
                    type='text'
                  ></InputComponent>
                  <InputComponent
                    formLabel='Background Color'
                    name='backgroundColor'
                    onChange={handleDataSetChange}
                    type='text'
                  ></InputComponent>
                  <InputComponent
                    formLabel='Border Color'
                    name='borderColor'
                    onChange={handleDataSetChange}
                    type='text'
                  ></InputComponent>
                  <InputComponent
                    formLabel='Border Width'
                    name='borderWidth'
                    onChange={handleDataSetChange}
                    type='number'
                  ></InputComponent>
                  <InputComponent
                    formLabel='Data'
                    name='data'
                    onChange={handleDataArrayChange}
                    type='text'
                  ></InputComponent>
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
                    Top
                  </option>
                  <option value='right' style={{ color: "black" }}>
                    Right
                  </option>
                  <option value='bottom' style={{ color: "black" }}>
                    Bottom
                  </option>
                  <option value='left' style={{ color: "black" }}>
                    Left
                  </option>
                </Select>
                <FormLabel>Label Font Color</FormLabel>
                <Input
                  onChange={labelsChange}
                  value={legendOption.labels.fontColor}
                  name='labelFontColor'
                ></Input>

                <Select
                  value={barType}
                  onChange={handleBarTypeChange}
                  name='chartType'
                >
                  <option value='line' style={{ color: "black" }}>
                    Line
                  </option>
                  <option value='bar' style={{ color: "black" }}>
                    Bar
                  </option>
                  <option value='horizontalbar' style={{ color: "black" }}>
                    Horizontal Bar
                  </option>
                  <option value='pie' style={{ color: "black" }}>
                    Pie
                  </option>
                  <option value='bubble' style={{ color: "black" }}>
                    Bubble
                  </option>
                  <option value='polar' style={{ color: "black" }}>
                    Polar
                  </option>
                  <option value='radar' style={{ color: "black" }}>
                    Radar
                  </option>
                  <option value='scatter' style={{ color: "black" }}>
                    Scatter
                  </option>
                </Select>
                {/* <Select placeholder='nice one pota' color='white'>
                  <option>Nice one boss</option>
                  <option>bwahaha</option>
                </Select> */}
              </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Link to='/chart'>
                <Button border='none' width='250px' bgColor='green.700' mt='5'>
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
