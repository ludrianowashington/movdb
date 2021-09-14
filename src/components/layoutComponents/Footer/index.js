import styled from 'styled-components';

// Styling component
const Footer = styled.footer`
  width: 100%;
  height: 12rem;
  background-color: ${({theme}) => theme.colors.primary}
`

export default function FooterBar(){
  return(
    <>
      <Footer>
        
      </Footer>
    </>
  )
}