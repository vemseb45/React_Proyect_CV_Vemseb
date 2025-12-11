import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Importamos sus estilos

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Mi Portafolio</h2>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-btn">Presentación</Link>
        </li>
        <li>
          <Link to="/experiencia" className="nav-btn">Experiencia</Link>
        </li>
        <li>
          <Link to="/contacto" className="nav-btn">Contacto</Link>
        </li>
        {/* Agrega aquí tus otras rutas si las necesitas */}
        <li>
          <Link to="/consumo" className="nav-btn">Consumo API</Link>
        </li>
        <li>
          <Link to="/envio" className="nav-btn">Busqueda ID</Link>
        </li>

      </ul>
    </nav>
  );
}