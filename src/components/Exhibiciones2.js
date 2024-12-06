import React, { useState } from 'react';
import './Exhibiciones.css';
import { useNavigate } from 'react-router-dom';

const Exhibiciones2 = () => {
    const navigate = useNavigate();
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setShowImage(true);
        setTimeout(() => {
            const imgElement = document.querySelector('.modal-image');
            if (imgElement) {
                imgElement.classList.add('show'); // Añadir clase para hacer visible la imagen
            }
        }, 30); // Esperar un breve momento para asegurar que la imagen esté cargada
    };

    const handleCloseImage = () => {
        const imgElement = document.querySelector('.modal-image');
        if (imgElement) {
            imgElement.classList.remove('show'); // Remover clase para ocultar la imagen
        }
        setTimeout(() => {
            setShowImage(false);
            setCurrentImage('');
        }, 200); // Esperar que la transición de opacidad se complete antes de cerrar el modal
    };
    const goToPage2 = () => {
        navigate('/Exhibiciones');
    };

    const goToPage3 = () => {
        navigate('/Exhibiciones3');
    };

    return (
        <div className="exhibiciones-container">
            <button onClick={() => navigate('/segunda')} className="btn3">Página Principal</button>
            <div className="row1">
                
                {/* Nueva columna izquierda */}
                
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion9.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion9.jpg`} alt="Exhibición 5" />
                    </div>
                    <div className="text"> James Bond 007 Museum Nybro Sweden Visit Worlds Only Hovercraft Museum Lee-on-the-Solent England
                    DIE ANOTHER DAY (2002)  Pierce Brosnan in James Bond 007 Museum</div>
                </div>
                {/* Nueva columna derecha */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion10.gif`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion10.gif`} alt="Exhibición 6" />
                    </div>
                    <div className="text">NINTENDO 64 GOLDENEYE play Nintendo 64 Goldeneye James Bond 007 Museum in Nybro SwedenY</div>
                </div>

         
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion11.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion11.jpg`} alt="Exhibición 11" />
                    </div>
                    <div className="text">BOLLINGER LAUNCH LIMITED EDITION 007 GIFT PACK Special Cuvée for the release of 
                    No Time To Die</div>
                </div>
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion12.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion12.jpg`} alt="Exhibición 2" />
                    </div>
                    <div className="text">Izabella Scorupcos bikini from Goldeneye
                    Pierce Brosnan Izabella Scorupco</div>
                </div>
            </div>
            <div className="row1">
            
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion13.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion13.jpg`} alt="Exhibición 3" />
                    </div>
                    <div className="text">The official snowmobile of James Bond ski-doo MX Z-REV</div>
                </div>
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion14.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion14.jpg`} alt="Exhibición 4" />
                    </div>
                    <div className="text">SE-LGK Cessna plane F172H Reims Aviation Skyhawk 1969  James Bond 007 Museum Nybro Sweden</div>
                </div>

                {/* Nueva columna izquierda */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion15.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion15.jpg`} alt="Exhibición 7" />
                    </div>
                    <div className="text">The shorts worn by James Bond (Daniel Craig) in the film SkyFall Orlebar Brown Setter Sky swimming shorts.  </div>
                </div>
                {/* Nueva columna derecha */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion16.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion16.jpg`} alt="Exhibición 8" />
                    </div>
                    <div className="text">
                    James Bond talk to Per Hallberg 3 Oscar 1 Oscar for SKYFALL
of the world's</div>
                </div>
            </div>
            <div className="pagination">
                <button onClick={goToPage2} className="ex-button">1</button>
                <button onClick={goToPage3} className="ex-button">3</button>
                <button onClick={goToPage2} className="arrow-button">→</button>
            </div>

            <div className={`modal ${showImage ? 'show' : ''}`} onClick={handleCloseImage}>
        <img src={currentImage} alt="Exhibición Ampliada" className="modal-image" />
        <button onClick={handleCloseImage} className="volver-button-ex">Volver</button>
                </div>
            
        </div>
    );
};

export default Exhibiciones2;
