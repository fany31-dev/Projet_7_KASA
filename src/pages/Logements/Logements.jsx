import { useParams, Navigate } from 'react-router-dom';
import DataLogement from '@/data/logements.json';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import Tag from '../../components/Tag/Tag';
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
          noFilter={true}
          isCarrousel={true}
          alt={logement.title}
        />
        <div className="ficheLogement__container">
          <div className="ficheLogement__title">
            <h1 className="ficheLogement__title__name">{logement.title}</h1>
            <p className="ficheLogement__title__localisation">
              {logement.location}
            </p>
          </div>
          <div className="ficheLogement__host">
            <p className="ficheLogement__host__name">{logement.host.name}</p>
            <img
              className="ficheLogement__host__picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
        </div>

        <div>
          <Tag tags={logement.tags} />
        </div>
        <div className="ficheLogement__description">
          <Collapse
            isLogementPage={true}
            title="Description"
            texte={logement.description}
          ></Collapse>
          <Collapse
            isLogementPage={true}
            title="Equipements"
            texte={logement.equipments}
          ></Collapse>
        </div>
      </div>
    </>
  );
}

export default Logements;
