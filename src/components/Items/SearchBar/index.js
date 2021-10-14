import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";

import { SearchContext } from "../../../contexts/search";

import {
  Container, 
  Search
} from './styles'

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const {search} = useContext(SearchContext);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    
    search(searchInput)
    router.push("/search");
  }
  return (
    <Container onSubmit={handleSubmit}>
      <IoSearch size={18} color={({ theme }) => theme.colors.icons} />
      <Search
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Buscar por um Filme, Série ou Pessoa"
      />
    </Container>
  );
}
