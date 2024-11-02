import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SegundaPagina.css';
import './LineaT';

const SegundaPagina = () => {
  const [mapaVisible, setMapaVisible] = useState(false);
  const navigate = useNavigate(); 

  const mostrarMapa = () => {
    setMapaVisible(true);
  };

  const ocultarMapa = () => {
    setMapaVisible(false);
  };

  return (
    <div>
      {/* Navegador superior */}
      <div className="nav-container">
        <div className="left-image">
          <img src={`${process.env.PUBLIC_URL}/OjoJB.webp`} alt="Ojo de James Bond" className="ojo-jb" />
        </div>
        <nav className="right-nav">
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/icono-noticias.png`} alt="Noticias" className="nav-icon" />
              NOTICIAS
            </li>
            <li onClick={mostrarMapa}>
              <img src={`${process.env.PUBLIC_URL}/icono-mapa.png`} alt="Mapa" className="nav-icon" />
              MAPA
            </li>
            <li>
              <Link to="/exhibiciones" className="custom-link">
                <img src={`${process.env.PUBLIC_URL}/icono-exhibiciones.png`} alt="Exhibiciones" className="nav-icon" />
                EXHIBICIONES
              </Link>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/icono-tienda.png`} alt="Tienda" className="nav-icon" />
              TIENDA
            </li>
            <li>
              <Link to="/tercera" className="custom-link">
                <img src={`${process.env.PUBLIC_URL}/icono-contacto.png`} alt="Contacto" className="nav-icon" />
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <div className="texto-deslizante">
          <h2>Aventúrate en esta experiencia redescubriendo la saga de James Bond</h2>
        </div>
        <div >
          <button onClick={() => navigate('./LineaT')} className="btn2">Línea de tiempo</button>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Carrosegunda.jpg`} alt="Imagen 3" className="imagen3" />
          <div className="q-container">
            <q>38245 - Nybro - Suecia</q>
            <img src={`${process.env.PUBLIC_URL}/ubicacionroja.png`} alt="Nybto" className="nav-icon" />
          </div>
        </div>
        
      </div>

      {/* MAPA */}
      <div className={`mapa-overlay ${mapaVisible ? 'mapa-visible' : ''}`}>
        <img src="mapa.jpg" alt="Mapa" className="mapa-imagen" />
        <button onClick={ocultarMapa} className="volver-boton">Volver</button>
      </div>
    </div>
    
  );
};

export default SegundaPagina;
