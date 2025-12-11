import React from 'react';
import './Experience.css'; // Dejamos lista la conexión a los estilos

export default function Experience() {
  return (
    <div className="experience-wrapper">
      
      <div className="experience-content">
        <h1 className="page-title">Mi Trayectoria Profesional</h1>

        <div className="timeline-container">
          
          {/* TRABAJO 1 (El más reciente) */}
          <div className="job-card">
            <div className="job-header">
              <div className="job-role">
                <h3>Desarrollador Frontend React</h3>
                <span className="company">Nombre de la Empresa</span>
              </div>
              <span className="job-date">Enero 2024 - Presente</span>
            </div>
            <p className="job-description">
              Aquí describirás tus responsabilidades principales. Por ejemplo: 
              Desarrollo de componentes reutilizables, consumo de APIs REST, 
              y optimización de la experiencia de usuario (UX/UI).
            </p>
            <div className="job-tags">
              <span>React</span>
              <span>API Rest</span>
              <span>Figma</span>
            </div>
          </div>

          {/* TRABAJO 2 */}
          <div className="job-card">
            <div className="job-header">
              <div className="job-role">
                <h3>Prácticas de Programación</h3>
                <span className="company">Empresa o Institución</span>
              </div>
              <span className="job-date">Junio 2023 - Diciembre 2023</span>
            </div>
            <p className="job-description">
              Colaboración en el mantenimiento de sitios web corporativos. 
              Corrección de bugs visuales y maquetación de nuevas secciones 
              utilizando HTML5 y CSS3.
            </p>
            <div className="job-tags">
              <span>HTML/CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>

        {/* SECCIÓN EDUCACIÓN (Opcional pero recomendada) */}
        <h2 className="section-subtitle">Educación</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>Técnico en Desarrollo de Software</h3>
            <span className="institution">Nombre de tu Instituto/SENA</span>
            <span className="edu-date">2022 - 2024</span>
          </div>
          {/* Puedes agregar más cuadros de educación aquí si tienes cursos */}
        </div>

      </div>
    </div>
  );
}