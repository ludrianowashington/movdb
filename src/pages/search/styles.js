import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 95vh;
  padding: 0 13px 13px;
`;

export const Lists = styled.ul`
  width: 100%;
  height: 100%;
`;

export const ItemList = styled.li`
  max-width: 95%;
  margin: 20px;
  text-decoration: none;
  list-style: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  flex-direction: "row";
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionLeft = styled.div`
  width: 10%;
`;

export const SectionRight = styled.div`
  width: 90%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
`;

export const ImgPoster = styled(Image)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 19px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  font-family: sans-serif;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  font-family: sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
