import React from 'react';
import { SearchForm } from './SearchForm';

export const NavBar = () => {
  return (
    <nav className="header">
      <div className="searchit-label">searchIT</div>
      <SearchForm />
    </nav>
  );
};
