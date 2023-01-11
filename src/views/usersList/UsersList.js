import React, { useState } from "react";
import PropTypes from "prop-types";
import { users as userData } from "../../data/users";
// import { Button } from "../../atoms/button/Button";
// import FormField from "../../molecues/formField/FormField";
import UsersListItem from "../../components/molecues/usersListItem/UsersListItem";
import { StyledList, StyledTitle } from "./UsersList.styles";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { UserShape } from "../../assets/types/types";

const UsersList = ({ users, deleteUsers }) => {
  return (
    <>
      <ViewWrapper>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem
              userData={userData}
              key={userData.name}
              deleteUser={deleteUsers}
            />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

UsersList.popTypes = {
  usersData: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
