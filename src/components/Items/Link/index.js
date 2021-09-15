import Link from 'next/link'
// Styling the component
import styled from 'styled-components';


const StyledLink = styled.a`
  width: 100%;
  
  padding: 10px 15px;
`

export default function StyledLink({href, name}) {
  return(
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  )
}