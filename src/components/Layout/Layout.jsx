import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

function Layout({ children, mainClassName }) {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={`${styles.layout__main} ${mainClassName || ''}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
