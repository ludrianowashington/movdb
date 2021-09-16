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

const ListItem = styled.li``;

export default function Home({ lists }) {
  return (
    <Container>
      <Lists>
        {/*lists.map((list) => (
          <ListItem>{list.title}</ListItem>
        ))*/}
      </Lists>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch();
  return;
}
