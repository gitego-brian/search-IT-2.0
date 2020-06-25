import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const Remark = () => {
  const { cities, searchQuery } = useContext(GlobalContext);
  const display = cities.length === 0 && searchQuery !== '' ? 'block' : 'none';

  return (
    <div className="remark" style={{ display: display }}>
      Sorry! We can&apos;t find that city.
    </div>
  );
};
