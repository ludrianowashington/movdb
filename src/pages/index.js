import Image from 'next/image'
import api from "../services/api";

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
`;

const ImgPoster = styled(Image)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export default function Home({ results, error }) {
  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <Container>
      <Lists>
        {results.map((result) => (
          <ItemList key={result.id}>
            <SectionLeft>
              <ImgPoster 
                alt='Poster Image'
                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                width={92}
                height={143}
                layout='responsive'
              />
            </SectionLeft>
            <SectionRight>
              <div>{result.title}</div>
              <div></div>
              <div>{result.overview}</div>
            </SectionRight>
          </ItemList>
        ))}
      </Lists>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const res = await api.get(`search/movie`, {
    params: {
      api_key: "786b9a46aa4a85bcb9938a204bbe76a5",
      query: "avengers",
      language: "en-US",
      page: 1,
      include_adult: false
    }
  });
  const results = res.data.results;

  if (!results) return;

  return {
    props: {
      results
    }
  };
}
