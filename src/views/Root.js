// import "./App.css";
import React from "react";
import UsersList from "./usersList/UsersList";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Rood.styles";
import { GloballStyle } from "../assets/icons/styles/GlobalStyle";
import { theme } from "../assets/icons/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import AddUserForm from "./Form/AddUserForm";
import UsersProvider from "../providers/UsersProvider";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GloballStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/add-user" element={<AddUserForm />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
