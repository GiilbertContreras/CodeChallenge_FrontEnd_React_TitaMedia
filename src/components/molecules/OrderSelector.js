// /molecules/OrderSelector.js
import React, { useState } from 'react';
import Button from '../atoms/Button/Button';
import RadioButton from '../atoms/RadioButton/RadioButton';
import styles from './OrderSelector.module.css';

export default function OrderSelector({ orderBy, onChangeOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {orderBy === 'name' ? <u>A</u> : '#'}
      </Button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <h4 className={styles.dropdownTitle}>Ordenar por:</h4>
          <div className={styles.dropdownContent}>
            <RadioButton
              label="Número"
              name="order"
              checked={orderBy === 'number'}
              onChange={() => onChangeOrder('number')}
            />
            <RadioButton
              label="Nombre"
              name="order"
              checked={orderBy === 'name'}
              onChange={() => onChangeOrder('name')}
            />
          </div>
        </div>
      )}
    </div>
  );
}