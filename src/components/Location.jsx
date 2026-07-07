import React from 'react';
import './Location.css';
import { MapPin, Clock, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section bg-surface location-section">
      <div className="container">
        <h2 className="section-title">Dónde Encontrarnos</h2>
        <p className="section-subtitle">
          Visitá nuestro astillero en Tigre, en pleno corazón del Delta del Paraná.
        </p>

        <div className="location-grid">
          <div className="location-info">
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Dirección</h3>
              <p>Tigre, Buenos Aires<br/>Argentina</p>
            </div>
            <div className="info-card">
              <Clock className="info-icon" />
              <h3>Horarios</h3>
              <p>Lunes a Viernes: 9 a 18 hs<br/>Sábados: 9 a 13 hs</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tigre,Buenos+Aires,Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary directions-btn"
            >
              <Navigation size={18} /> Cómo llegar
            </a>
          </div>

          <div className="location-map">
            <iframe
              title="Ubicación de Panga.Arg en Tigre, Buenos Aires"
              src="https://www.google.com/maps?q=Tigre,Buenos+Aires,Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
