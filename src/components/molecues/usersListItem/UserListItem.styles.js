import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
  div p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0px 20px;
  }
  div p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 10px 20px;
  }
`;
