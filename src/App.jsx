import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Presentacion from './Pages/Presentation';
import Experience from './Pages/Experience';
import Contacto from './Pages/Contacto';

// Rutas de la API 
import Consumo from './API/RickandMorty/Consumo';
import Envio from './API/RickandMorty/Envio';
import EpisodeById from './API/RickandMorty/EpisodiosId'; 

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/contacto" element={<Contacto />} />
        
        {/* Rutas de la API */}
        <Route path="/consumo" element={<Consumo />} />
        <Route path="/envio" element={<Envio />} />
        
        {/* Corregimos también el path para que coincida con el botón del menú */}
        <Route path="/episodios" element={<EpisodeById />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;