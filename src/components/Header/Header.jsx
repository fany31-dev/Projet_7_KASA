import { Link } from 'react-router-dom';
import LogoKasaOrange from '@/assets/images/Logo_orange.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img
            src={LogoKasaOrange}
            alt="Logo Kasa"
            className={styles.header__logo}
          />
        </div>
        <nav className={styles.header__navigation}>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
