import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const SearchContext = createContext();

export function SearchProvider({ children, ...rest }) {
  // const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async (query) => {
    const response = await api.get(`search/multi`, {
      params: {
        api_key: "786b9a46aa4a85bcb9938a204bbe76a5",
        query: query,
        language: "pt-BR",
        page: 1,
        include_adult: false
      }
    });

    setResults(response.data.results);
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        results
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
