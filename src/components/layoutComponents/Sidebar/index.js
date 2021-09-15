import styled from "styled-components";

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

  background-color: ${({theme}) => theme.colors.background};

`
const ItemListHead = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  padding: 19px 15px;

  background-color: ${({theme}) => theme.colors.secondary};
`

const ItemList = styled.li`
  display: flex;
  justify-content: center;
  
  padding: 10px 15px;
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
          <ItemListHead>
            <Text>Resultado da busca</Text>
          </ItemListHead>
          <ItemList>
            
          </ItemList>
        </SideContainer>
      </Container>
    </>
  )
}