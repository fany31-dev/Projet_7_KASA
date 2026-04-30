import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Logements from '../pages/Logements/Logements';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements/:id" element={<Logements />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
