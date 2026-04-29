import { NavLink } from 'react-router-dom';
import LogoKasaOrange from '@/assets/images/Logo_orange.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <header className={styles.header__container}>
        <div>
          <img
            src={LogoKasaOrange}
            alt="Logo Kasa"
            className={styles.header__logo}
          />
        </div>
        <nav className={styles.header__navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__link} ${styles.active}`
                : styles.nav__link
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__link} ${styles.active}`
                : styles.nav__link
            }
          >
            A Propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
