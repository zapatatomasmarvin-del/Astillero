import React from 'react';
import './About.css';
import { ShieldCheck, Anchor, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="about-eyebrow">Quiénes Somos</span>
        <div className="about-grid">
          <div className="about-image">
            <img src="/shipyard.png" alt="Astillero Panga.Arg en Tigre" />
            <div className="experience-badge">
              <span className="years">+20</span>
              <span className="text">Años de<br/>Experiencia</span>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>Maestría Naval en Tigre</h2>
            <p className="about-text">
              Panga.Arg nació hace más de 20 años en el corazón del Delta, cuando Daniel decidió combinar la tradición naval argentina con las tecnologías más modernas en fabricación de matrices y cascos de fibra de vidrio.
            </p>
            <p className="about-text">
              Lo que empezó como un pequeño taller familiar en Tigre hoy es un astillero de referencia, reconocido por pescadores, familias y navegantes de todo el país que buscan una embarcación segura, eficiente y hecha a mano.
            </p>
            <p className="about-text">
              Bajo la dirección de Daniel, cada matriz sigue naciendo del mismo lugar: la obsesión por el detalle, la seguridad y la eficiencia hidrodinámica en cada casco que sale del taller.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">+20</span>
                <span className="stat-label">Años en el Delta</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+300</span>
                <span className="stat-label">Embarcaciones entregadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Modelos en la línea</span>
              </div>
            </div>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon"><ShieldCheck /></div>
                <div className="feature-text">
                  <h4>Construcción Sólida</h4>
                  <p>Materiales de primera calidad para máxima durabilidad.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Anchor /></div>
                <div className="feature-text">
                  <h4>Diseño Hidrodinámico</h4>
                  <p>Navegación suave y eficiente consumo de combustible.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Wrench /></div>
                <div className="feature-text">
                  <h4>Matrices de Precisión</h4>
                  <p>Desarrollo a medida con tolerancias milimétricas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
