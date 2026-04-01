import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Logements from '../pages/Logements/Logements';
import Error from '../pages/Error/Error';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements" element={<Logements />} />
      <Route path="*" element={<Error />} />
      {/* si pas d'url trouvé erreur 404 */}
    </Routes>
  );
}

export default Router;
