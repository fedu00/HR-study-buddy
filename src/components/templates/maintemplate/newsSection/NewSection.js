import React, { useState, useEffect } from "react";
import {
  Wrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from "./NewSection.styles";
import { ViewWrapper } from "../../../molecues/viewWrapper/ViewWrapper";
import { Button } from "../../../atoms/button/Button";
import styled from "styled-components";
import axios from "axios";

const API_TOKEN = "ff9331ab3b16060e04cd3c08894e1c";

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
        {
            allArticles {
              id
              title
              category
              content
              image {
                url
              }
            }
          }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError("Sorry, we couldn't load articles for you");
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>Uniwersity news feed</NewsSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              {content}
              {image ? <img src={image.url} alt="article image" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>{error ? error : "Loading..."}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
