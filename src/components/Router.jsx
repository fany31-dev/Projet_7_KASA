import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Logements from '../pages/Logements.jsx';
import Error from '../pages/Error.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements" element={<Logements />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
