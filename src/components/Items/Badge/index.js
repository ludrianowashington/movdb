import styled from "styled-components";

const Content = styled.span`
  width: 3rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  font-family: sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Badge({ children }) {
  return <Content>{children}</Content>;
}
