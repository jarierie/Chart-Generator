import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #0d0d0d;
  flex-direction: column;
  /* Just for centering the mock H1 */

  h2 {
    font-size: 200px;
    color: white;
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
