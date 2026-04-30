import DataLogement from '@/data/logements.json';
import styles from './Tag.module.scss';

function Tag({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <div className={styles.tags__element} key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;
