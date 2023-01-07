import React from "react";
import { StyledAverageItem } from "./UserAverageItem.styles";
import { theme } from "../../../assets/icons/styles/theme";

const UserAverageItem = ({ average }) => (
  <StyledAverageItem average={average} theme={theme}>
    <p>{average}</p>
  </StyledAverageItem>
);

export default UserAverageItem;
