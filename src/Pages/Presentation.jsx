import React from 'react';
// Asegúrate de que la importación del CSS siga ahí
import './Presentacion.css';
import fotoPerfil from './img/progra.jpeg';

export default function Presentacion() {
  return (
    <div className="presentacion-wrapper">
      
      {/* 1. El Banner Superior de Color (Hero) */}
      <div className="hero-banner"></div>

      {/* 2. La Tarjeta Principal de Contenido (se superpondrá al banner) */}
      <div className="profile-card-container">

        {/* Parte Superior de la Tarjeta: Foto y Datos Básicos */}
        <header className="profile-header-section">
          <div className="profile-image-wrapper">
            {/* IMAGEN PLACEHOLDER: Cambiaremos esto por tu foto real luego */}
            <img 
                src={fotoPerfil} 
                alt="Foto de Perfil de Vemseb" 
                className="profile-img" 
            />
          </div>

          <div className="profile-info-header">
            <h1>Vemseb</h1>
            <h2>Desarrollador Frontend React</h2>
            {/* Pequeña info de contacto rápido tipo la imagen 1 */}
            <div className="quick-contact">
              <span>📍 Ciudad, País</span> | <span>📧 email@ejemplo.com</span>
            </div>
          </div>
        </header>

        <hr className="divider" />

        {/* Parte Inferior de la Tarjeta: Sobre Mí y Detalles */}
        <div className="profile-body-section">
          <section className="sobre-mi">
            <h3>Sobre Mí</h3>
            <p>
              Soy un desarrollador apasionado por crear interfaces modernas y eficientes. 
              Me especializo en el ecosistema de React, buscando siempre escribir código limpio y escalable.
              Inspirado en diseños profesionales para entregar la mejor experiencia de usuario.
            </p>
            <p>
              [Puedes agregar otro párrafo aquí con más detalles sobre tu enfoque profesional, similar a los bloques de texto en las imágenes de ejemplo].
            </p>
          </section>

          {/* Una vista rápida de skills como "píldoras" */}
          <section className="skills-preview">
            <h3>Tecnologías Principales</h3>
            <div className="skills-badges">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS3</span>
              <span>Git</span>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}