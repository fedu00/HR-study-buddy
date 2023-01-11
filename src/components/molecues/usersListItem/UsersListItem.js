import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import { Wrapper } from "./UserListItem.styles";
import UserAverageItem from "../../atoms/userAverageItem/UserAverageItem";
import { UserShape } from "../../../assets/types/types";

const UsersListItem = ({
  deleteUser,
  userData: { name, average, attendance },
}) => (
  <Wrapper>
    <UserAverageItem average={average} />
    <div>
      <p>{name}</p>
      <p>attendance {attendance}</p>
    </div>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
