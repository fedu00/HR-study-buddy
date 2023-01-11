// import "./App.css";
import React, { useState } from "react";
import UsersList from "./usersList/UsersList";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Rood.styles";
import { GloballStyle } from "../assets/icons/styles/GlobalStyle";
import { theme } from "../assets/icons/styles/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import { users as userData } from "../data/users";
import Form from "./Form/Form";

const inicialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formValue, setFormValueformValue] = useState(inicialFormState);
  // const location = useLocation();

  const deleteUsers = (name) => {
    const filtersUsers = users.filter((user) => user.name !== name);
    setUsers(filtersUsers);
  };

  const handleInputChange = (e) => {
    setFormValueformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average,
    };
    setUsers([newUser, ...users]);
    setFormValueformValue(inicialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GloballStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={<UsersList deleteUsers={deleteUsers} users={users} />}
              />
              <Route
                path="/add-user"
                element={
                  <Form
                    formValue={formValue}
                    handleAddUser={handleAddUser}
                    handleInputChange={handleInputChange}
                  />
                }
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
