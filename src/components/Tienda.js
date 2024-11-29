import React, { useState } from 'react';
import './Tienda.css';
import { useNavigate } from 'react-router-dom';

const Tienda = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([
      {
        id: 1,
        image: 'item1.jpg',
        name: 'Funko Pop',
        price: 20.99,
        description: 'Detailed replica of James Bond\'s iconic Aston Martin'
    },
    {
        id: 2,
        image: 'item2.webp',
        name: 'PlayMobile JB007',
        price: 199.99,
        description: 'Official James Bond Omega Seamaster'
    },
    {
        id: 3,
        image: 'item3.jpg',
        name: 'Lego 007 Limited Edition ',
        price: 249.99,
        description: 'Collector\'s edition non-functional replica'
    },
    {
        id: 4,
        image: 'item4.jpg',
        name: 'Taza Conmemorativa ',
        price: 19.99,
        description: 'Duesenberg Alliance Series 60th Anniversary Guitar'
    },

    { 
      id: 5,
      image: 'item5.webp',
      name: 'The Macallan Decade VI',
      price: 59.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar'




    },
    { 
      id: 6,
      image: 'item6.jpg',
      name: '007 Watch Limited Edition',
      price: 199.99,
      description: 'Duesenberg  60th Anniversary Guitar'




    },
    { 
      id: 7,
      image: 'item7.webp',
      name: 'Daniel Craig Fan Shirt',
      price: 14.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar'




    },
    { 
      id: 8,
      image: 'item8.jpg',
      name: '007 Limited Edition Cards ',
      price: 9.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar'




    },

    ]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const handleQuantityChange = (id, delta) => {
        setProducts(products.map(product => 
            product.id === id 
                ? { ...product, quantity: Math.max(0, product.quantity + delta) }
                : product
        ));
    };

    const handleBuyProduct = (product) => {
        if (product.quantity > 0) {
            setPurchaseCompleted(true);
            setTimeout(() => {
                setPurchaseCompleted(false);
                setSelectedProduct(null);
            }, 2000);
        }
    };

    return (
        <div className="tienda-container">
            <button onClick={() => navigate('/segunda')} className="regresar-button-tienda">
                Página Principal
            </button>
            
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="box">
                        <div className="circle">
                            <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
                        </div>
                        <div className="text">
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <div className="añadir-carrito-container">
                            <button 
                                onClick={() => setSelectedProduct(product)}
                                className="añadir-carrito-button"
                            >
                                Añadir a Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && !purchaseCompleted && (
                <div className="modal">
                    <div className="product-selection-modal">
                        <h2>{selectedProduct.name}</h2>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(selectedProduct.id, -1)}>-</button>
                            <span>{selectedProduct.quantity}</span>
                            <button onClick={() => handleQuantityChange(selectedProduct.id, 1)}>+</button>
                        </div>
                        <p>Precio: ${(selectedProduct.price * selectedProduct.quantity).toFixed(2)}</p>
                        <button 
                            onClick={() => handleBuyProduct(selectedProduct)}
                            disabled={selectedProduct.quantity === 0}
                        >
                            Comprar
                        </button>
                        <button onClick={() => setSelectedProduct(null)}>Cerrar</button>
                    </div>
                </div>
            )}

            {purchaseCompleted && (
                <div className="modal">
                    <div className="purchase-modal">
                        <h2>Compra Exitosa</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tienda;