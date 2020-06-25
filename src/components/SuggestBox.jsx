import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const SuggestBox = () => {
  const { suggestions, handleSearch } = useContext(GlobalContext);
  const updateInput = (city) => {
    handleSearch(city);
  };

  if (suggestions.length > 0) {
    return (
      <ul className="suggestion-box">
        {suggestions.map((suggest, i) => (
          <li className="suggestion" key={i} onClick={() => updateInput(suggest.city)}>
            {suggest.city}
          </li>
        ))}
      </ul>
    );
  } else return null;
};
