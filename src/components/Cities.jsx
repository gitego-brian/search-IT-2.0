import React, { useContext } from 'react';
import { City } from './City';
import { GlobalContext } from '../contexts/GlobalContext';

export const Cities = () => {
  const { cities } = useContext(GlobalContext);
  if (cities[0] !== 'Emptyy') {
    return (
      <div className="container" id="container">
        {cities.map((city) => (
          <City key={city.rank} city={city} />
        ))}
      </div>
    );
  } else return null;
};
