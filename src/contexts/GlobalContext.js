import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = { cities: [], results: [], searchQuery: '', suggestions: [] };
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleSearch = (query) => {
    const results = [];
    searchIt(query, results);
    dispatch({
      type: 'SEARCH',
      payload: results,
    });
  };
  const searchIt = (query, results) => {
    const filter = query.toUpperCase().replace(/\s+/g, ' ').trim();
    if (filter) {
      state.cities.map((c) => {
        const city = c.city.toUpperCase();
        const state = c.state.toUpperCase();
        if (city.indexOf(filter) > -1 || state.indexOf(filter) > -1) {
          results.push(c);
        }
      });
    } else results = [];
  };

  const handleSuggest = (query) => {
    const suggestions = [];
    searchIt(query, suggestions);
    dispatch({
      type: 'SUGGEST',
      payload: suggestions,
    });
  };

  const updateQuery = (query) => {
    dispatch({
      type: 'UPDATE_QUERY',
      payload: query,
    });
  };

  const setCities = (result) => {
    dispatch({
      type: 'ADD_CITIES',
      payload: result,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        cities: state.results,
        suggestions: state.suggestions,
        searchQuery: state.searchQuery,
        setCities,
        handleSuggest,
        handleSearch,
        updateQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
