import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { SearchContext } from "../../../contexts/search";

import { IoSearch } from "react-icons/io5";
import {
  Container, 
  Search
} from './styles'

export default function SearchBar() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const {search} = useContext(SearchContext);
  
  function handleSubmit(e) {
    e.preventDefault();

    search(input);
    
    router.push("/search");
  }
  return (
    <Container onSubmit={handleSubmit}>
      <IoSearch size={18} color={({ theme }) => theme.colors.icons} />
      <Search
        value={input}
        onChange={e => setInput(e.target.value)}
        type="search"
        placeholder="Buscar por um Filme, Série ou Pessoa"
      />
    </Container>
  );
}
