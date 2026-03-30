import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div>Logo KASA</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
