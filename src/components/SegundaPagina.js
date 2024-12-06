import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SegundaPagina.css';
import './LineaT.css';

const SegundaPagina = () => {
  const [mapaVisible, setMapaVisible] = useState(false);
  const [contactoVisible, setContactoVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar la línea de tiempo

  const mostrarMapa = () => {
    setMapaVisible(true);
  };

  const ocultarMapa = () => {
    setMapaVisible(false);
  };

  
  const mostrarContacto = () => {
    setContactoVisible(true);
  };

  const ocultarContacto = () => {
    setContactoVisible(false);
  };
  const scrollToLineaT = () => {
    const section = document.getElementById("LineaT");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Datos de la línea de tiempo
  const boxes = [
    { text: "1962 - Agente 007 contra el Dr No", img: "/1962.jpg" },
    { text: "1963 - Desde Rusia con Amor", img: "/1963.jpg" },
    { text: "1964 - Goldfinger", img: "/1964.jpg" },
    { text: "1965 - Operación Trueno", img: "/1965.jpg" },
    { text: "1967 - Solo se vive dos veces", img: "/1967.jpg" },
    { text: "1969 - Al Servicio Secreto de Su Majestad", img: "/1969.jpg" },
    { text: "1971 - Diamantes para la Eternidad", img: "/1971.jpg" },
    { text: "1973 - Vive y Deja Morir", img: "/1973.jpg" },
    { text: "1974 - El Hombre de la Pistola de Oro", img: "/1974.jpg" },
    { text: "1977 - La Espía que me Amó", img: "/1977.jpg" },
    { text: "1979 - Moonraker", img: "/1979.jpg" },
    { text: "1981 - Solo para tus Ojos", img: "/1981.jpg" },
    { text: "1983 - Octopussy", img: "/1983.jpg" },
    { text: "1985 - En la Mira de los Asesinos", img: "/1985.jpg" },
    { text: "1987 - Su Nombre es Peligro", img: "/1987.jpg" },
    { text: "1989 - Licencia para Matar", img: "/1989.jpg" },
    { text: "1995 - GoldenEye", img: "/1995.jpg" },
    { text: "1997 - El Mañana Nunca Muere", img: "/1997.jpg" },
    { text: "1999 - El Mundo no Basta", img: "/1999.jpg" },
    { text: "2002 - Otro Día para Morir", img: "/2002.jpg" },
    { text: "2006 - Casino Royale", img: "/2006.jpg" },
    { text: "2008 - Quantum of Solace", img: "/2008.jpg" },
    { text: "2012 - Skyfall", img: "/2012.jpg" },
    { text: "2015 - Spectre", img: "/2015.jpg" },
    { text: "2021 - Sin Tiempo para Morir", img: "/2021.jpg" }
  ];

  const boxesPerPage = 5; // Número de cuadros visibles por página
  const totalPages = Math.ceil(boxes.length / boxesPerPage);

  // Función para avanzar en la línea de tiempo
  const nextPage = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función para retroceder en la línea de tiempo
  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calcular las cajas visibles
  const visibleBoxes = boxes.slice(
    currentIndex * boxesPerPage,
    currentIndex * boxesPerPage + boxesPerPage
  );

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
              <Link to="/tienda" className="custom-link">
              <img src={`${process.env.PUBLIC_URL}/icono-tienda.png`} alt="Tienda" className="nav-icon" />
              TIENDA
              </Link>
            </li>
            <li onClick={mostrarContacto}>
            
                <img src={`${process.env.PUBLIC_URL}/icono-contacto.png`} alt="Contacto" className="nav-icon" />
                CONTACTO
    
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <div className="texto-deslizante">
          <h2>Aventúrate en esta experiencia redescubriendo la saga de James Bond</h2>
        </div>
        <div>
          <button onClick={scrollToLineaT} className="btn2">Línea de tiempo</button>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Carrosegunda.jpg`} alt="Imagen 3" className="imagen3" />
          <div className="q-container">
            <q>38245 - Nybro - Suecia</q>
            <img src={`${process.env.PUBLIC_URL}/ubicacionroja.png`} alt="Ubicación" className="nav-icon" />
          </div>
        </div>
      </div>

      {/* Línea de tiempo */}
      <div id="LineaT" className="linea-tiempo-seccion">
        <h3>Línea de tiempo</h3>
        <div className="carousel-container">
  <button onClick={prevPage} className="carousel-button left">
    &#8592;
  </button>
  <div className="zigzag-container">
            {visibleBoxes.map((item, index) => (
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
  <button onClick={nextPage} className="carousel-button right">
    &#8594;
  </button>
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

      {/* Mapa */}
      <div className={`mapa-overlay ${mapaVisible ? 'mapa-visible' : ''}`}>
        <img src="mapa.jpg" alt="Mapa" className="mapa-imagen" />
        <button onClick={ocultarMapa} className="btn3">Volver</button>
      </div>

      <div className={`contacto-overlay ${contactoVisible ? 'contacto-visible' : ''}`}>
        <img src="contacto.png" alt="Contacto" className="contacto-imagen" />
        <button onClick={ocultarContacto} className="btn3">Volver</button>
      </div>
    </div>
    
  );
};

export default SegundaPagina;
