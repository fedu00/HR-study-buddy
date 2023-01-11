import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 25px;
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
