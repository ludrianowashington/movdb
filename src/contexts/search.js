import {createContext, useEffect, useState} from 'react';

export const SearchContext = createContext();

export function SearchProvider({children, response}){
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect((setInputValue)=>{
    const response = await api.get(`search/multi`, {
      params: {
        api_key: "786b9a46aa4a85bcb9938a204bbe76a5",
        query: {setInputValue},
        language: "pt-BR",
        page: 1,
        include_adult: false
      }
    });

    setSearchResults(response.data.results)
  }, [inputValue]);

  return (
    <SearchContext.Provider 
      value={{
        results: searchResults,
        setInputValue: setInputValue,
      }}>
        {children}
    </SearchContext.Provider>
  )
}

export async function getStaticProps(ctx){
  
  

  const results = response.data.results;

  if (!results) return;

  console.log(results);
  return {
    props: {}
  }
}
