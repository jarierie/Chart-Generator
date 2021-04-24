import React from "react";
import styled from "styled-components";
import ChartCollection from "../components/ChartCollection";
import Nav from "../components/Nav";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Charts = () => {
  return (
    <>
      <Container>
        <Nav></Nav>
        <ChartCollection></ChartCollection>
      </Container>
    </>
  );
};

export default Charts;
