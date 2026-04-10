import styles from './Banner.module.scss';

function Banner({ image, alt, texte }) {
  return (
    <>
      <div className={styles.banner}>
        <img className={styles.banner__image} src={image} alt={alt} />
        {texte ? <h1 className={styles.banner__text}>{texte}</h1> : null}
      </div>
    </>
  );
}

export default Banner;
