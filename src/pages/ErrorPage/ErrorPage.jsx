import { Link } from 'react-router-dom';
import './ErrorPage.scss';
import Layout from '../../components/Layout/Layout';

function ErrorPage() {
  return (
    <layout mainClassName="error__main">
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </layout>
  );
}

export default ErrorPage;
