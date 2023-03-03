import React, { useContext, useEffect, useState } from "react";
import UsersListItem from "../../components/molecues/usersListItem/UsersListItem";
import { StyledList, StyledTitle } from "./UsersList.styles";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { UsersContext } from "../../providers/UsersProvider";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersList = ({ users = [] }) => {
  return (
    <>
      <StyledTitle>studenciaki</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
