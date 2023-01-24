import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Logo = styled.div`
  height: 90px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 10px;
    text-align: end;
  }
`;
export const StyledLink = styled(NavLink)`
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

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
