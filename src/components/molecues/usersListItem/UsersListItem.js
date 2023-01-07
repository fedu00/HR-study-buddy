import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import { Wrapper } from "./UserListItem.styles";
import UserAverageItem from "../../atoms/userAverageItem/UserAverageItem";

const UsersListItem = ({ userData: { name, average, attendance } }) => (
  <Wrapper>
    <UserAverageItem average={average} />
    <div>
      <p>{name}</p>
      <p>attendance {attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
