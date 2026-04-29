import { useState } from 'react';
import ArrowBack from '@/assets/icones/arrow_back.png';
import ArrowNext from '@/assets/icones/arrow_next.png';
import DataLogement from '@/data/logements.json';
import styles from './Banner.module.scss';

function Banner({ image, alt, texte, pictures, noFilter, isCarrousel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = pictures?.length ? pictures : image ? [image] : [];

  const prevPicture = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextPicture = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <div
        className={`${styles.banner} ${isCarrousel ? styles.carrouselHeight : ''}`}
      >
        <img
          className={styles.banner__image}
          style={{ filter: noFilter ? 'none' : 'brightness(0.6)' }}
          src={images[currentIndex]}
          alt={alt || 'Bannière'}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevPicture}
              className={`${styles.banner__arrow} ${styles.banner__arrow__left}`}
              aria-label="Image précédente"
            >
              <img src={ArrowBack} alt={'Image précédente'} />
            </button>

            <button
              onClick={nextPicture}
              className={`${styles.banner__arrow} ${styles.banner__arrow__right}`}
              aria-label="Image suivante"
            >
              <img src={ArrowNext} alt={'Image suivante'} />
            </button>
            <span className={styles.banner__counter}>
              {currentIndex + 1} / {images.length}
            </span>
          </>
        )}
        {texte && <h1 className={styles.banner__text}>{texte}</h1>}
      </div>
    </>
  );
}

export default Banner;
