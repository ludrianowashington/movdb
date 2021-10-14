import { useContext, useState } from "react";
import { useRouter } from "next/router";

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

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchMulti() {
  const router = useRouter();
  const { results } = useContext(SearchContext);

  function showMediaType(type, result){
    if (type === 'movie'){
      return (
        <>
          <div>
            <Title>{result.title}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
          <Description>{result.overview}</Description>
        </>
      )
    } else if (type === "tv") {
      return (
        <>
          <div>
            <Title>{result.name}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
          <Description>{result.overview}</Description>
        </>
      )
    } else if (type === "person") {
      return (
        <>
          <div>
            <Title>{result.title}</Title>
            <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
          </div>
          <Description>{result.overview}</Description>
        </>
      )
    }
  }
  
  console.log(results)
  return (
    <Container>
      <Lists>
        <h1>Search </h1>
        {results.map((result) => (
          <ItemList key={result.id}>
            <SectionLeft>
              <ImgPoster
                alt="Poster Image"
                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                width={92}
                height={143}
                layout="responsive"
              />
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
