import { useParams, Navigate } from 'react-router-dom';
import DataLogement from '@/data/logements.json';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import Tag from '../../components/Tag/Tag';
import Stars from '../../components/Stars/Stars';
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
        <Carousel pictures={logement.pictures} alt={logement.title} />
        <div className="ficheLogement__container">
          <div className="ficheLogement__location">
            <div className="ficheLogement__location__title">
              <h1 className="ficheLogement__location__title-name">
                {logement.title}
              </h1>
              <p className="ficheLogement__location__title-city">
                {logement.location}
              </p>
            </div>
            <div className="ficheLogement__location__tags">
              <Tag tags={logement.tags} />
            </div>
          </div>

          <div className="ficheLogement__vendor">
            <div className="ficheLogement__vendor__host">
              <p className="ficheLogement__vendor__host-name">
                {logement.host.name}
              </p>
              <img
                className="ficheLogement__vendor__host-picture"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <div className="ficheLogement__vendor__rating">
              <Stars rating={logement.rating} />
            </div>
          </div>
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
