import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { SearchContext } from "../../../contexts/search";

import {
  Container, 
  Search, 
  Icon
} from './styles'

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const {search} = useContext(SearchContext);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    search(searchInput)
    setSearchInput('');
    router.push("/search", `/search?query=${searchInput}`, {shallow: true});
  }
  return (
    <Container onSubmit={handleSubmit}>
      <Icon />
      <Search
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Buscar por um Filme, Série ou Pessoa"
      />
    </Container>
  );
}
