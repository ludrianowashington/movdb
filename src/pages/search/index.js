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
  const { searchResult } = useContext(SearchContext);

  console.log(searchResult);

  return (
    <Container>
      <Lists>
        <h1>Search </h1>
        {/* {data.map((result) => (
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
              <div>
                <Title>{result.title}</Title>
                <SubTitle>{getFormattedDate(result.release_date)}</SubTitle>
              </div>
              <Description>{result.overview}</Description>
            </SectionRight>
          </ItemList>
        ))} */}
      </Lists>
    </Container>
  );
}
