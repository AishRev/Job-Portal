import React from 'react';
const SearchBar = ({ query, onSearch }) => (
  <input type="text" value={query} onChange={(e) => onSearch(e.target.value)} placeholder="Search jobs..." />
);
export default SearchBar;