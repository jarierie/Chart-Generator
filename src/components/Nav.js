import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: #413c69;
`;

const NavSplit = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: 100%;
  display: flex;
  color: white;
  align-items: center;
`;

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Link to='/'>
          <NavSplit style={{ marginLeft: "100px", fontSize: "30px" }}>
            <h1>GodDamn Chart</h1>
          </NavSplit>
        </Link>
        <NavSplit style={{ width: "500px" }}>
          <Link to='/makeChart' style={{ fontSize: "20px" }}>
            Make a Chart
          </Link>
          <Link to='/chartCollection' style={{ fontSize: "20px" }}>
            Collection
          </Link>
          <Link to='/viewMap' style={{ fontSize: "20px" }}>
            View Map
          </Link>
          <Link to='/test' style={{ fontSize: "20px" }}>
            Create Map
          </Link>
        </NavSplit>
      </NavContainer>
    </>
  );
};

export default Nav;
