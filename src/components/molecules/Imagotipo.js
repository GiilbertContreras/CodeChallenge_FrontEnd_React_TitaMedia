import React from 'react';
import Logo from '../atoms/Logo/Logo';
import styles from './Imagotipo.module.css';

export default function FavoritesButton({ }) {
  return (
    <div className={styles.imagotipoFlex}>
        <Logo />
        <h1 className={styles.titulo}>Pokedex</h1>
    </div>
  );
}