import { useContext, useState } from "react";
// import { useRouter } from "next/router";

import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 95vh;
  padding: 0 13px 13px;
`;

const Lists = styled.ul`
  width: 100%;
  height: 100%;
`;

const ItemList = styled.li`
  max-width: 95%;
  margin: 20px;
  text-decoration: none;
  list-style: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  flex-direction: "row";
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionLeft = styled.div`
  width: 10%;
`;

const SectionRight = styled.div`
  width: 90%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
`;

const ImgPoster = styled(Image)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 19px;
  font-weight: bold;
  font-family: sans-serif;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  font-family: sans-serif;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  font-family: sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;


// import useSwr from "swr";

import { SearchContext } from "../../contexts/search";

import { getFormattedDate } from "../../utils/formatDate";
// import { useTheme } from "styled-components";

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchMulti() {
  const { results } = useContext(SearchContext);
  

  function showMediaType(type, result){
    const isOverview = result.overview;
    
    if (type === 'movie'){
      return (
        <>
          <div>
            <Title>{result.title}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
          {isOverview && <Description>{result.overview}</Description>}
        </>
      )
    } else if (type === "tv") {
      return (
        <>
          <div>
            <Title>{result.name}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
          {isOverview && <Description>{result.overview}</Description>}
        </>
      )
    } else if (type === "person") {
      return (
        <>
          <div>
            <Title>{result.name}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
        </>
      )
    }
  }
  
  
  
  return (
    <Container>
      <Lists>
        {results.map((result) => (
          <ItemList key={result.id}>
            <SectionLeft>
              {!result.poster_path ?
                (<ImgPoster
                  src={`https://fakeimg.pl/92x143/0d253f/aaa?font_size=28&text=MovDB&font=yanone`}
                  width={92}
                  height={143}
                  layout="responsive"
                />
              ) : (<ImgPoster
                alt="Poster Image"
                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                width={92}
                height={143}
                layout="responsive"
              />)
              }
            </SectionLeft>
            <SectionRight>
              {showMediaType(result.media_type, result)}
            </SectionRight>
          </ItemList>
        ))}
      </Lists>
    </Container>
  );
}
