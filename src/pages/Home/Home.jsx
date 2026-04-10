import Banner from '../../components/Banner/Banner';
import BannerImage from '@/assets/images/paysage_falaise.png';
import logements from '@/data/logements.json';
import Card from '../../components/Card/Card';
import './Home.scss';

function Home() {
  return (
    <>
      <div className="container">
        <div>
          <Banner
            image={BannerImage}
            alt="Banniere paysage de falaise au bord de l'océan"
            texte="Chez nous, partout et ailleurs"
          />
        </div>
        <div className="container__card">
          {logements.map(({ id, title, cover }) => (
            <Card
              key={id}
              id={id}
              title={title}
              imageUrl={cover}
              altText={`Photo du logement ${title}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
