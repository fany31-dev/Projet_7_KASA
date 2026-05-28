import { useState, useEffect } from 'react';
import ArrowBack from '@/assets/icones/arrow_back.png';
import ArrowNext from '@/assets/icones/arrow_next.png';
import styles from './Carousel.module.scss';

function Carousel({ image, pictures, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = pictures?.length ? pictures : image ? [image] : [];

  const prevPicture = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextPicture = () => {
    setCurrentIndex((next) => (next + 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <img
        className={styles.carousel__image}
        src={images[currentIndex]}
        alt={alt}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevPicture}
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__left}`}
            aria-label="Image précédente"
          >
            <img src={ArrowBack} alt={'Image précédente'} />
          </button>

          <button
            onClick={nextPicture}
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__right}`}
            aria-label="Image suivante"
          >
            <img src={ArrowNext} alt={'Image suivante'} />
          </button>
          <span className={styles.carousel__counter}>
            {currentIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
