// /molecules/SearchBar.js
import React, { useState, useRef } from 'react';
import SearchIcon from '../atoms/SearchIcon/SearchIcon';
import Input from '../atoms/Input/Input';
import styles from './SearchBar.module.css';

export default function SearchBar({ placeholder = "Buscar Pokémon...", onSearch }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleFocusContainer = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setValue('');
    onSearch && onSearch('');
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={styles.searchBarContainer} onClick={handleFocusContainer} role="search">
      <SearchIcon
        size={24}
        stroke="#000000"
        fill="transparent"
      />

      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        inputRef={inputRef}
        name="search-input"
      />

      {value && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={handleClear}
          aria-label="Limpiar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
}