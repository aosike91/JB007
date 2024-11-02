  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import './PrimeraPagina.css';

  const PrimeraPagina = () => {
    const navigate = useNavigate();
    const backgroundStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/JAMESBOND.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', 
      color: 'white',
      textAlign: 'center',
    };

    return (
      <div style={backgroundStyle}>
        <header className="header">
          <h3>MUSEO EXCLUSIVO</h3>
        </header>
        <div className="content">
       
          <p>Del 18 de junio al 13 de julio</p> 
          <img src={`${process.env.PUBLIC_URL}/GE007.webp`} alt="GoldenEye" className="main-image" />
          <button onClick={() => navigate('/segunda')} className="btn">Más información</button>
        </div>
        <div className="circle-box"> </div>
      </div>

    );
  };

  export default PrimeraPagina;
