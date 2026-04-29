import { useState } from 'react';
import ArrowClose from '@/assets/icones/arrow_close_24px.png';
import styles from './Collapse.module.scss';

function Collapse({ title, texte, isLogementPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.collapse} ${isLogementPage ? styles.collapse__ficheLogement : ''}`}
      >
        <div className={styles.collapse__title} onClick={toggle}>
          <h2>{title}</h2>

          <img
            className={
              isOpen ? styles.collapse__arrow__open : styles.collapse__arrow
            }
            src={ArrowClose}
            alt="Fleche fermer/ouvrir collapse"
          />
        </div>
        <div
          className={
            isOpen ? styles.collapse__text__open : styles.collapse__text
          }
        >
          <p>{texte}</p>
        </div>
      </div>
    </>
  );
}

export default Collapse;
