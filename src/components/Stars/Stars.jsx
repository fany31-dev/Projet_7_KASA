import styles from './Stars.module.scss';
import StarActive from '@/assets/icones/star_active.png';
import StarInactive from '@/assets/icones/star_inactive.png';

function Stars({ rating }) {
  const totalStars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={styles.star}>
      {totalStars.map((star) => (
        <img
          key={star}
          src={star <= Number(rating) ? StarActive : StarInactive}
          alt="star"
          className={styles.star__rating}
        />
      ))}
    </div>
  );
}

export default Stars;
