import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, altText }) {
  return (
    <Link to={`/Logements/${id}`} className={styles.card__link}>
      <div className={styles.card}>
        <img src={imageUrl} alt={altText} className={styles.card__image} />
        <h2 className={styles.card__title}>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
