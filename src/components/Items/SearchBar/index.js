import React, { useContext, useState } from "react";
import {useRouter} from 'next/router'


import {IoSearch} from 'react-icons/io5';
import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  
  padding: 5px 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid ${({theme}) => theme.colors.line};
`;

const Search = styled.input`
  width: 100%;
  height: 2rem;

  border: none;
  outline: none;

  margin-left: 10px;

  font-size: 16px;
  font-style: italic;
  font-family: sans-serif;

  color: ${({theme}) => theme.colors.textInput};

  &::placeholder {
    color: ${({theme}) => theme.colors.textInput};
  }
`;

export default function SearchBar(){
  const router = useRouter();

  const [querySearch, setQuerySearch] = useState('');


  function handleSearch(e) {
    e.preventDefault();

    router.push(`/search/?q=${querySearch}`, {shallow: true})
  }
  
  return(
    <Container onSubmit={handleSearch}>
      <IoSearch size={18} color={({theme}) => theme.colors.icons}/>
      <Search 
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
          type='search' 
          placeholder='Buscar por um Filme, Série ou Pessoa'
        />
    </Container>
  )
}