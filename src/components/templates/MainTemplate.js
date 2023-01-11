import React from "react";
import styled from "styled-components";
import NavBar from "../molecues/navBar/NavBar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainTemplate;
