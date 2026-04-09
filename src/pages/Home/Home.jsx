import Banner from '../../components/Banner/Banner';
import logements from '@/data/logements.json';
import Card from '../../components/Card/Card';
import './Home.scss';

function Home() {
  return (
    <>
      <div className="container">
        <Banner />
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
