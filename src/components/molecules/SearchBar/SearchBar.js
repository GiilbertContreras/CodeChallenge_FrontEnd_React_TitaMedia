import React, { useState, useRef } from 'react';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './SearchBar.module.css';

export default function SearchBar({ placeholder = "Buscar Pokémon...", onSearch }) {  
  const [value, setValue] = useState(''); // Estado local para almacenar el valor actual del input  
  const inputRef = useRef(null); // Referencia al input para poder manipularlo directamente (por ejemplo, hacer focus)

  // Permite que el input reciba el focus automáticamente
  const handleFocusContainer = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  // Actualiza el estado local y llama a la función onSearch
  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  // Evita la propagación del evento, resetea el estado, llama a onSearch con string vacío y devuelve el focus al input
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
        <Button
          className={styles.clearBtn}
          onClick={handleClear}>
          ✕
        </Button>
      )}
    </div>
  );
}