import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
