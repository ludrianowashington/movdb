import styled from "styled-components";


// Styling component
const Navbar = styled.div`
  display: flex;

  width: 100%;
  height: 4rem;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
`
const Wrap = styled.div`
  width: 15%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.colors.background}; */
`
const Text = styled.span`
  font-size: 29px;
  font-family: sans-serif;
  color: ${({theme}) => theme.colors.textDark}
`
// Function Main
export default function NavBar() {
  return(
    <>
      <Navbar>
        <Wrap>
          <Text>MOVBAR</Text>
        </Wrap>
      </Navbar>
    </>
  )
}
