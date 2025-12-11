import React from 'react';
import './Contacto.css'; // Preparamos la conexión a los estilos

export default function Contacto() {
  
  // Función para evitar que la página se recargue al dar click
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado correctamente! (Simulación)");
  };

  return (
    <div className="contact-wrapper">
      
      <div className="contact-content">
        <h1 className="contact-title">Contáctame</h1>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente o quieres colaborar? 
          ¡Escríbeme y hagamos realidad esa idea!
        </p>

        <div className="contact-grid-container">
          
          {/* COLUMNA 1: Información de Contacto */}
          <div className="contact-info-card">
            <h3>Información</h3>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Ubicación</h4>
                <p>Ciudad, País</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>vemseb@ejemplo.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/vemseb</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: Formulario */}
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input type="text" id="nombre" placeholder="Ej: Juan Pérez" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="5" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
            
          </form>

        </div>
      </div>
    </div>
  );
}