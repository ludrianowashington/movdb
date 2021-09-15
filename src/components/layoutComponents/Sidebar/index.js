import styled from "styled-components";

import Link from "../../Items/Link";

// Styling component
const Container = styled.div`
  width: 25rem;
  min-height: 80vh;

  padding: 2.2%;
  
  /* background-color: ${({ theme }) => theme.colors.background}; */
`
const SideContainer = styled.ul`
  width: 100%;
  height: 20rem;

  margin-top: 3rem;
  margin-left: .7rem;

  border-radius: 10px;

  /* background-color: ${({theme}) => theme.colors.background}; */

`
const HeadList = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  padding: 19px 15px;

  background-color: ${({theme}) => theme.colors.secondary};
`

const Item = styled.li`
  height: 3.5rem;

  display: flex;
  justify-content: center;
  
  padding: 5px 30px;

  transition: ease-in-out .3s;
  &:hover {
    cursor: pointer;

    background-color: ${({theme}) => theme.colors.hover};
  }
`


const Text = styled.span`
  font-family: sans-serif;
  font-size: 22px;
  color: ${({theme}) => theme.colors.textLight}
`

// Function Main
export default function SideBar() {
  return(
    <>
      <Container>
        <SideContainer>
          <HeadList>
            <Text>Resultado da busca</Text>
          </HeadList>
          <Item>
            <Link href='#' value={12}>
              Filmes
            </Link>
          </Item>
          <Item>
            <Link href='#' value={112}>
              Series
            </Link>
          </Item>
          <Item>
            <Link href='#' value={2}>
              Tv
            </Link>
          </Item>
        </SideContainer>
      </Container>
    </>
  )
}