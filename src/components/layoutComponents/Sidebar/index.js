import styled from "styled-components";

import Link from "../../Items/Link";

// Styling component
const Container = styled.div`
  width: 25rem;
  min-height: 80vh;

  padding: 2.2%;
  
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
const SideContainer = styled.ul`
  width: 100%;

  margin-top: 3rem;
  margin-left: 0.7rem;

  padding-bottom: 5px;

  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.line};

  /*background-color: ${({ theme }) => theme.colors.background}; */
`;
const HeadList = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  margin-bottom: 5px;

  padding: 19px 15px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Line = styled.hr`
  color: 1px solid ${({ theme }) => theme.colors.line};
`;

const Item = styled.li`
  height: 3rem;

  display: flex;
  justify-content: center;

  padding: 5px 30px;

  transition: ease-in-out 0.3s;
  &:hover {
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const Text = styled.span`
  font-family: sans-serif;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textLight};
`;

// Function Main
export default function SideBar() {
  return (
    <>
      <Container>
        <SideContainer>
          <HeadList>
            <Text>Resultado da busca</Text>
          </HeadList>
          <Item>
            <Link href="#" value={172}>
              Todos
            </Link>
          </Item>
          <Line />
          <Item>
            <Link href="#" value={12}>
              Filmes
            </Link>
          </Item>
          <Line />
          <Item>
            <Link href="#" value={112}>
              Series
            </Link>
          </Item>
          <Line />
          <Item>
            <Link href="#" value={2}>
              Pessoas
            </Link>
          </Item>
        </SideContainer>
      </Container>
    </>
  );
}
