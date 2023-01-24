import styled from "styled-components";
import { ViewWrapper } from "../../../molecues/viewWrapper/ViewWrapper";

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 50px;
  color: ${({ theme }) => theme.colors.darkGrey};
  overflow-y: scroll;
`;
export const NewsSectionHeader = styled.h2`
  /* color: red; */
  /* border: 1px solid black; */
  width: 100%;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 25px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;
