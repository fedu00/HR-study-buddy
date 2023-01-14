import React from "react";
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
