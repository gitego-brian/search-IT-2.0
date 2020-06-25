import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const SearchForm = () => {
  const { handleSearch, handleSuggest, searchQuery, updateQuery } = useContext(GlobalContext);
  const [query, setQuery] = useState(searchQuery);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };
  const handleType = (e) => {
    setQuery(e.target.value);
    updateQuery(e.target.value);
    handleSuggest(e.target.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="search-query"
        value={query}
        onChange={(e) => handleType(e)}
        type="text"
        placeholder="City or State"
        size="100"
      />

      <input
        className="search-button"
        type="submit"
        value="Search"
        disabled={query === '' ? 'disabled' : ''}
      />
    </form>
  );
};
