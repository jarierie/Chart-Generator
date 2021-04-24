import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Input from "../components/Input";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const MakeChart = () => {
  return (
    <>
      <Container>
        <Nav></Nav>
        <Input></Input>
      </Container>
    </>
  );
};

export default MakeChart;
