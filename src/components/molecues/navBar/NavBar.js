import React from "react";
import { NavContainer, Logo, StyledLink, LinksWrapper } from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Logo>
          <p>Study</p>
          <p>Buddy</p>
        </Logo>
        <LinksWrapper>
          <StyledLink to={"/"} exact="true">
            users list
          </StyledLink>
          <StyledLink to={"/add-user"}>add user</StyledLink>
        </LinksWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
