import { useRouter } from "next/router";
import Badge from "../Badge";

// Styling the component
import styled from "styled-components";

const StyledLink = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.textLight};

  text-decoration: none;
`;

// Function Main
export default function Link({ children, href, value }) {
  const router = useRouter();

  return (
    <StyledLink
      href="#"
      onClick={(e) => {
        e.preventDefault();

        router.push(href);
      }}
    >
      {children}
      <Badge>{value}</Badge>
    </StyledLink>
  );
}
