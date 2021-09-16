import styled from "styled-components";

const Content = styled.span`
  width: 3rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  font-family: sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Badge({ children }) {
  return <Content>{children}</Content>;
}
