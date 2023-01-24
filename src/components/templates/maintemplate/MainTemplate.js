import React from "react";
import NavBar from "../../molecues/navBar/NavBar";
import { Wrapper } from "./MainTemplate.styles";
import styled from "styled-components";
import SearchBar from "../../organism/SearchBar";
import NewsSection from "./newsSection/NewSection";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
