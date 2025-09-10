import React from 'react';
import styles from './Input.module.css';

export default function Input({ value, onChange, placeholder, inputRef, name = 'input', type = 'text', className = '' }) {
  return <input ref={inputRef} className={`${styles.input} ${className}`} type={type} value={value} placeholder={placeholder} onChange={onChange} name={name} />;
}