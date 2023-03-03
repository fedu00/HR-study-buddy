// import "./App.css";
import React from "react";
import UsersList from "./usersList/UsersList";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Rood.styles";
import { GloballStyle } from "../assets/icons/styles/GlobalStyle";
import { theme } from "../assets/icons/styles/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainTemplate from "../components/templates/maintemplate/MainTemplate";
import AddUserForm from "./Form/AddUserForm";
import Dashboard from "./Dashboard";
// import UsersProvider from "../providers/UsersProvider";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GloballStyle />
        <MainTemplate>
          {/* <UsersProvider> */}
          <Wrapper>
            <Routes>
              <Route exact path="/" element={<Navigate to="/group/A" />} />
              <Route path="/add-user" element={<AddUserForm />} />
              <Route path="/group/:id" element={<Dashboard />} />
            </Routes>
          </Wrapper>
          {/* </UsersProvider> */}
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
