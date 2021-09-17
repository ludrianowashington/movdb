import api from '../services/api'

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 95vh;

  padding: 13px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Lists = styled.ul`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.terciary};
`;

export default function Home({results, error}) {
  if(error) return <div>An error occured: {error.message}</div>;
  return (
    <Container>
      <Lists>
        {results.map((result)=>(
          <li key={result.id}>
            <div>{result.poster_path}</div>
            <div>{result.title}</div>
            <div>{result.overview}</div>
          </li>
        ))}
      </Lists>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const res = await api.get(`search/movie`, {
    params: {
      api_key: '786b9a46aa4a85bcb9938a204bbe76a5', 
      query: 'avengers', 
      language: 'en-US', 
      page: 1, 
      include_adult: false
    }
  });
  const results = res.data.results;

  if (!results) return 

  return {
    props: {
      results
    }
  }
}
