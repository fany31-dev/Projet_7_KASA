import BannerImage from '@/assets/images/paysage_falaise.png';
import styles from './Banner.module.scss';

function Banner({ image, texte }) {
  return (
    <>
      <div className={styles.banner}>
        <img
          className={styles.banner__image}
          src={image || BannerImage}
          alt="Banniere paysage de falaise au bord de l'océan"
        />
        {texte && <h1 className={styles.banner__text}>{texte}</h1>}
      </div>
    </>
  );
}

export default Banner;
