import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logements from '../pages/Logements';
import Error from '../pages/Error';

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
