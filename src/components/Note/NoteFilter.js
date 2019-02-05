import React from 'react';

const NoteFilter = ({ filter, onFilterChange,placeholder }) => (
  <input type="text" value={filter} onChange={onFilterChange} placeholder={placeholder} autoFocus />
);

export default NoteFilter;
