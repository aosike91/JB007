import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SegundaPagina.css';
import './LineaT.css';

const SegundaPagina = () => {
  const [mapaVisible, setMapaVisible] = useState(false);
  const navigate = useNavigate(); 

  const mostrarMapa = () => {
    setMapaVisible(true);
  };

  const ocultarMapa = () => {
    setMapaVisible(false);
  };
  const scrollToLineaT = () => {
    const section = document.getElementById("LineaT");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
          <button onClick={scrollToLineaT} className="btn2">Linea de tiempo</button>
            constructor(parameters) {
              
          }
          
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Carrosegunda.jpg`} alt="Imagen 3" className="imagen3" />
          <div className="q-container">
            <q>38245 - Nybro - Suecia</q>
            <img src={`${process.env.PUBLIC_URL}/ubicacionroja.png`} alt="Nybto" className="nav-icon" />
          </div>
        </div>
        
      </div>
      
{/* Línea de tiempo */} 
       
        <div id="LineaT" className="linea-tiempo-seccion">

{/* Contenido de la sección Línea de tiempo */}
<h3>Sección de Línea de tiempo</h3>
<div className="container">
  <div className="zigzag-container">
    {/* Array con los textos y las rutas de las imágenes específicas para cada cuadro */}
{[
  { text: '1962 - Agente 007 contra el Dr No', img: '/1962.jpg' },
  { text: '1963 - Desde Rusia con Amor', img: '/1963.jpg' },
  { text: '1964 - Goldfinger', img: '/1964.jpg' },
  { text: '1965 - Operación Trueno', img: '/1965.jpg' },
  { text: '1967 - Solo se vive dos veces', img: '/1967.jpg' }
].map((item, index) => (
  <div className="zigzag-item" key={index}>
    <div className="image-time-box">
      <img 
        src={`${process.env.PUBLIC_URL}${item.img}`} 
        alt={`Exhibición ${index + 1}`} 
      />
    </div>
    <div className="time-box time-box--gooey">
      <div className="time-box__text">{item.text}</div>
      <div className="time-box__blobs">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

      
    ))}
  </div>
</div>

  {/* Filtro SVG para el efecto "gooey" */}
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
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
