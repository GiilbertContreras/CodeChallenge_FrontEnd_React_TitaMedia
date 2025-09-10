import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Title from '../../atoms/Title/Title';
import styles from './Imagotipo.module.css';

export default function FavoritesButton({ }) {
  return (
    <div className={styles.contenedorImagotipo}>
        <Logo />
        <Title
          level={1}
          className={styles.titulo}>
            Pokedex
        </Title>
    </div>
  );
}