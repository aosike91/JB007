import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './SegundaPagina.css';
import './LineaT';

const SegundaPagina = () => {
  const [mapaVisible, setMapaVisible] = useState(false);

  const mostrarMapa = () => {
    setMapaVisible(true);
  };

  const ocultarMapa = () => {
    setMapaVisible(false);
  };

  return (
    <div className={`second-page ${mapaVisible ? 'borroso' : ''}`}> {/* Aplicar clase borroso solo si el mapa está visible */}
      <div className="nav-container">
        <div className="left-image">
          <img src="/OjoJB.webp" alt="Ojo de James Bond" className="ojo-jb" />
        </div>
        <nav className="right-nav">
          <ul>
            <li>
              <img src="/icono-noticias.png" alt="Noticias" className="nav-icon" />
              NOTICIAS
            </li>
            <li onClick={mostrarMapa}> {/* Al hacer clic, se muestra el mapa */}
              <img src="/icono-mapa.png" alt="Mapa" className="nav-icon" />
              MAPA
            </li>
            <li>
              <Link to="/exhibiciones" className="custom-link">
                <img src="/icono-exhibiciones.png" alt="Exhibiciones" className="nav-icon" />
                EXHIBICIONES
              </Link>
            </li>
            <li>
              <img src="/icono-tienda.png" alt="Tienda" className="nav-icon" />
              TIENDA
            </li>
            <li>
              <Link to="/tercera" className="custom-link">
                <img src="/icono-contacto.png" alt="Contacto" className="nav-icon" />
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="left">
          <h2>Aventúrate en esta experiencia redescubriendo la saga de James Bond</h2>
          <button onClick={() => Navigate('./LineaT')} className="timeline-button1">Línea de tiempo</button>
        </div>
        <div className="right">
          <img src="/carrosegunda.jpg" alt="Imagen 3" className="imagen3" />
          <p>
            <q>38245 - Nybro - Suecia</q>
            <img src="/ubicacionroja.png" alt="Nybto" className="nav-icon" />
          </p>
        </div>
      </div>

      {/* Mapa y botón "Volver" */}
      <div className={`mapa-overlay ${mapaVisible ? 'mapa-visible' : ''}`}>
        <img src="mapa.jpg" alt="Mapa" className="mapa-imagen" />
        <button onClick={ocultarMapa} className="volver-boton">Volver</button>
        
      </div>
    </div>
  );
};

export default SegundaPagina;
