import styled from "styled-components";

export const StyledAverageItem = styled.div`
  background-color: ${({ average, theme }) => {
    if (Number(average) < 2) {
      return theme.colors.success;
    } else if (Number(average) < 3) {
      return theme.colors.warning;
    } else {
      return theme.colors.error;
    }
  }};
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
