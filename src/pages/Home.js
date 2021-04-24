import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* Just for centering the mock H1 */
  justify-content: center;
  h2 {
    font-size: 200px;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <Nav></Nav>
        <h2> This is the fucking Home Page</h2>
      </Container>
    </>
  );
};

export default Home;
