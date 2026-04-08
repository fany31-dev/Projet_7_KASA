import BannerImage from '@/assets/images/paysage_falaise.png';
import styles from './Banner.module.scss';

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <img
          className={styles.banner__image}
          src={BannerImage}
          alt="Banniere paysage de falaise au bord de l'océan"
        />
        <h1 className={styles.banner__text}>Chez nous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export default Banner;
