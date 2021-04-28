import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import styled from "styled-components";
import MapInput from "./MapInput";
import Nav from "./Nav";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Test = () => {
  const data = [
    {
      name: "Dallangayan Oeste",
      location: [120.3407, 16.63],
      data: Number,
    },
    {
      name: "Santiago Norte",
      location: [120.3392, 16.6157],
      data: Number,
    },
    {
      name: "Santiago Sur",
      location: [120.3349, 16.6098],
      data: Number,
    },
    {
      name: "Tanqui",
      location: [120.3232, 16.6107],
      data: Number,
    },
  ];

  const [submitState, setSubmitState] = useState(false);
  //Method
  const handleSubmit = () => {
    setSubmitState(!submitState);
  };

  return (
    <>
      <Nav></Nav>
      <Container>
        {data.map((dataItem) => {
          return (
            <>
              <MapInput
                key={dataItem.name}
                submitState={submitState}
                location={dataItem.location}
                name={dataItem.name}
                data={dataItem.data}
              ></MapInput>
            </>
          );
        })}
        <Button
          width='200px'
          bg='purple.300'
          mt='10px'
          disabled={submitState ? true : false}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default Test;
