import { useParams, Navigate } from 'react-router-dom';
import DataLogement from '@/data/logements.json';
import Collapse from '../../components/Collapse/Collapse';
import './Logements.scss';

function Logements() {
  const { id } = useParams();
  const logement = DataLogement.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/Error" />;
  }

  return (
    <div>
      <div>
        <h1>{logement.title}</h1>
      </div>
      <Collapse title="Equipements" texte={logement.equipments}></Collapse>
    </div>
  );
}

export default Logements;
