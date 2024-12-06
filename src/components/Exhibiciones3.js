import React, { useState } from 'react';
import './Exhibiciones.css';
import { useNavigate } from 'react-router-dom';

const Exhibiciones3 = () => {
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
        navigate('/Exhibiciones2');
    };

    const goToPage3 = () => {
        navigate('/Exhibiciones3');
    };

    return (
      
        <div className="exhibiciones-container">
             <button onClick={() => navigate('/segunda')} className="btn3">Página Principal</button>
            <div className="row1">
                {/* Nueva columna izquierda */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion5.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion5.jpg`} alt="Exhibición 5" />
                    </div>
                    <div className="text"> James Bond 007 Museum Nybro Sweden Visit Worlds Only Hovercraft Museum Lee-on-the-Solent England
                    DIE ANOTHER DAY (2002)  Pierce Brosnan in James Bond 007 Museum</div>
                </div>
                {/* Nueva columna derecha */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion6.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion6.jpg`} alt="Exhibición 6" />
                    </div>
                    <div className="text">RICKSHAW TUK TUK TAXI JAMES BOND MOVIE OCTOPUSSY</div>
                </div>

                {/* Columna existente */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion1.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion1.jpg`} alt="Exhibición 1" />
                    </div>
                    <div className="text">James Bond 007 60 year Guitar Duesenberg Alliance Series</div>
                </div>
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion2.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion2.jpg`} alt="Exhibición 2" />
                    </div>
                    <div className="text">Triumph Speed Triple 1200 RR James Bond 007 Edition 2023</div>
                </div>
            </div>
            <div className="row1">
                {/* Columna existente */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion3.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion3.jpg`} alt="Exhibición 3" />
                    </div>
                    <div className="text">For Your Eyes Only Lotus Esprit S3 Turbo Coupe</div>
                </div>
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion4.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion4.jpg`} alt="Exhibición 4" />
                    </div>
                    <div className="text">Gondola from Venice to James Bond Museum in Nybro</div>
                </div>

                {/* Nueva columna izquierda */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion7.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion7.jpg`} alt="Exhibición 7" />
                    </div>
                    <div className="text">Long Tailboat from "The Man With The Golden Gun" display
                    The James Bond 007 Museum Nybro Sweden  </div>
                </div>
                {/* Nueva columna derecha */}
                <div className="box1" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/exhibicion8.jpg`)}>
                    <div className="circle1">
                        <img src={`${process.env.PUBLIC_URL}/exhibicion8.jpg`} alt="Exhibición 8" />
                    </div>
                    <div className="text">
                    PLAY JAMES BOND * PINBALL MACHINE  1980 IN JAMES BOND 007 MUSEUM NYBRO SWEDEN</div>
                </div>
            </div>
            <div className="pagination">
                <button onClick={goToPage2} className="ex-button">2</button>
                <button onClick={goToPage3} className="ex-button">3</button>
                <button onClick={goToPage2} className="arrow-button">→</button>
            </div>

            {showImage && (
    <div className={`modal ${showImage ? 'show' : ''}`} onClick={handleCloseImage}>
        <img src={currentImage} alt="Exhibición Ampliada" className="modal-image" />
        <button onClick={handleCloseImage} className="volver-button-ex">Volver</button>
    
    </div>
)}
        </div>
    );
};

export default Exhibiciones3;
