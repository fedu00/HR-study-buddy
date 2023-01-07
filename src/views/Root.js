// import "./App.css";
import React from "react";
import UsersList from "../components/organisms/usersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GloballStyle } from "../assets/icons/styles/GlobalStyle";
import { theme } from "../assets/icons/styles/theme";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GloballStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
