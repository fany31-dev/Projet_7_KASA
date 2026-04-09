import styles from './Card.module.scss';

function Card({ title, imageUrl, altText }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={altText} className={styles.card__image} />
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  );
}

export default Card;
