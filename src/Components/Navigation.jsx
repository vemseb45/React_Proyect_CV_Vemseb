import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Presentación</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/consumo">Consumo</Link></li>
        <li><Link to="/envio">Envio</Link></li>
      </ul>
    </nav>
  );
}