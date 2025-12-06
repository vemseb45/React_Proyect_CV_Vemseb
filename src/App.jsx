import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Presentacion from "./Pages/Presentation";
import Experiencia from "./Pages/Experience";
import Contacto from "./Pages/Contacto";
import Consumo from "./Pages/Consumo";
import Envio from "./Pages/Envio";


function App() {
  return (
    <BrowserRouter>
      {/* Header visible en TODAS las páginas */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/consumo" element={<Consumo />} />
          <Route path="/envio" element={<Envio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;