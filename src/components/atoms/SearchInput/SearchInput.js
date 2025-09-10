import React from 'react';

export default function SearchInput({ value, onChange, placeholder = '' }) {
  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}