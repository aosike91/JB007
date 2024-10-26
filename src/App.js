import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrimeraPagina from './components/PrimeraPagina';
import SegundaPagina from './components/SegundaPagina';
import Contacto from './components/Contacto';
import Exhibiciones from './components/Exhibiciones';
import Noticias from './components/Noticias';
import Tienda from './components/Tienda';
import LineaT from './components/LineaT';
import Exhibiciones2 from './components/Exhibiciones2';
import Exhibiciones3 from './components/Exhibiciones3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrimeraPagina />} />
        <Route path="/segunda" element={<SegundaPagina />} />
        <Route path="/contacto" element={<Contacto />} />        
        <Route path="/exhibiciones" element={<Exhibiciones />} /> 
        <Route path="/noticias" element={<Noticias />} />        
        <Route path="/tienda" element={<Tienda />} />           
        <Route path="/LineaT" element={<LineaT />} />            
        <Route path="/Exhibiciones2" element={<Exhibiciones2/>}/>
        <Route path="/Exhibiciones3" element={<Exhibiciones3/>}/>
      </Routes>
    </Router>
  );
};

export default App;
