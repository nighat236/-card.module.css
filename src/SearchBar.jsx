import React from 'react';

function SearchBar({ search, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by city..."
      value={search}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '10px',
        width: '300px',
        marginBottom: '20px',
        fontSize: '16px'
      }}
    />
  );
}

export default SearchBar;

