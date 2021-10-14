import { useContext, useState } from "react";
// import { useRouter } from "next/router";

import {
  Container,
  Lists,
  ItemList,
  SectionLeft,
  SectionRight,
  ImgPoster,
  Title,
  SubTitle,
  Description
} from "./styles";

// import useSwr from "swr";

import { SearchContext } from "../../contexts/search";

import { getFormattedDate } from "../../utils/formatDate";
import { useTheme } from "styled-components";

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchMulti() {
  const { results } = useContext(SearchContext);
  const theme = useTheme();

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
