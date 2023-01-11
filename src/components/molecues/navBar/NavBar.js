import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100vh;
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    width: 100px;
    font-family: Montserrat, sans-serif;
  }
`;
const StyledLink = styled(NavLink)`
  margin: 15px 0 0 80px;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;

  &.${"active"} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// `

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Logo>
          <p>Study</p>
          <p>Buddy</p>
        </Logo>
        <LinksWrapper>
          <StyledLink to={"/"} exact>
            users list
          </StyledLink>
          <StyledLink to={"/add-user"}>add user</StyledLink>
          {/* <StyledLink to={"/"}>cos jeszcze bedzie</StyledLink>
          <StyledLink to={"/"}>nie wiem co to</StyledLink> */}
        </LinksWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
