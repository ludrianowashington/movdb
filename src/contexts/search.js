import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const SearchContext = createContext();

export function SearchProvider({ children, ...rest }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(
    (setSearch) => {
      const response = api.get(`search/multi`, {
        params: {
          api_key: "786b9a46aa4a85bcb9938a204bbe76a5",
          query: { setSearch },
          language: "pt-BR",
          page: 1,
          include_adult: false
        }
      });

      setSearchResults(response.data);
    },
    [search]
  );

  return (
    <SearchContext.Provider
      value={{
        search,
        results: searchResults,
        setSearch: setSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
