import LogoKasaBlanc from '@/assets/images/Logo_blanc.png';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img
            className={styles.footer__logo}
            src={LogoKasaBlanc}
            alt="Logo Kasa"
          />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

export default Footer;
