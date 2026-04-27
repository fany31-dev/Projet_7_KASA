import { useParams, Navigate } from 'react-router-dom';
import DataLogement from '@/data/logements.json';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './Logements.scss';

function Logements() {
  const { id } = useParams();
  const logement = DataLogement.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/Error" replace={true} />;
  }

  return (
    <>
      <div className="ficheLogement">
        <Banner
          pictures={logement.pictures}
          alt={logement.title}
          texte={logement.title}
        />

        <div className="ficheLogement__title">
          <h1 className="ficheLogement__title__name">{logement.title}</h1>
          <p className="ficheLogement__title__localisation">
            {logement.location}
          </p>
        </div>
        <div className="ficheLogement__host">
          <p className="ficheLogement__host__name">{logement.host.name}</p>
          <img
            className="ficheLogement__title__localisation"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
        <div className="ficheLogement__description">
          <Collapse title="Description" texte={logement.description}></Collapse>
          <Collapse title="Equipements" texte={logement.equipments}></Collapse>
        </div>
      </div>
    </>
  );
}

export default Logements;
