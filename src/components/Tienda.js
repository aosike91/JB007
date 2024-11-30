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
        description: 'Detailed replica of James Bond\'s iconic Aston Martin',
        quantity: 0
    },
    {
        id: 2,
        image: 'item2.webp',
        name: 'PlayMobile JB007',
        price: 199.99,
        description: 'Official James Bond Omega Seamaster',
        quantity: 0
    },
    {
        id: 3,
        image: 'item3.jpg',
        name: 'Lego 007 Limited Edition ',
        price: 249.99,
        description: 'Collector\'s edition non-functional replica',
        quantity: 0
    },
    {
        id: 4,
        image: 'item4.jpg',
        name: 'Taza Conmemorativa ',
        price: 19.99,
        description: 'Duesenberg Alliance Series 60th Anniversary Guitar',
        quantity: 0
    },
    { 
      id: 5,
      image: 'item5.webp',
      name: 'The Macallan Decade VI',
      price: 59.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar',
      quantity: 0
    },
    { 
      id: 6,
      image: 'item6.jpg',
      name: '007 Watch Limited Edition',
      price: 199.99,
      description: 'Duesenberg  60th Anniversary Guitar',
      quantity: 0
    },
    { 
      id: 7,
      image: 'item7.webp',
      name: 'Daniel Craig Fan Shirt',
      price: 14.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar',
      quantity: 0
    },
    { 
      id: 8,
      image: 'item8.jpg',
      name: '007 Limited Edition Cards ',
      price: 9.99,
      description: 'Duesenberg Alliance Series 60th Anniversary Guitar',
      quantity: 0
    }
    ]);

    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex > -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        const updatedProducts = products.map(p => 
            p.id === product.id 
                ? { ...p, quantity: (p.quantity || 0) + 1 } 
                : p
        );
        setProducts(updatedProducts);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);

        const updatedProducts = products.map(p => 
            p.id === productId 
                ? { ...p, quantity: 0 } 
                : p
        );
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleBuyAll = () => {
        setPurchaseCompleted(true);
        setTimeout(() => {
            setPurchaseCompleted(false);
            setCart([]);
            const resetProducts = products.map(p => ({ ...p, quantity: 0 }));
            setProducts(resetProducts);
        }, 2000);
    };

    return (
        <div className="tienda-container">
            <div className="page-header">
                <button onClick={() => navigate('/segunda')} className="regresar-button-tienda">
                    Página Principal
                </button>
                <div className="store-title">
                    <h1>Tienda 007</h1>
                    <img 
                        src={`${process.env.PUBLIC_URL}/icono-tienda.png`} 
                        alt="Tienda Icon" 
                        className="store-icon" 
                    />
                </div>
            </div>
            
            <div className="store-layout">
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
                                    onClick={() => addToCart(product)}
                                    className="añadir-carrito-button"
                                >
                                    Añadir a Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="shopping-cart-sidebar">
                <div className="cart-header">
                    <h2>Carrito de Compras</h2>
                    <img 
                            src={`${process.env.PUBLIC_URL}/icono-carrito.png`} 
                            alt="Carrito Icon" 
                            className="cart-icon" 
                        />
                         </div>
                    {cart.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <span>{item.name}</span>
                                    <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                </div>
                            ))}
                            <div className="cart-total">
                                <strong>Total: ${calculateTotal()}</strong>
                            </div>
                            <button 
                                className="buy-all-button" 
                                onClick={handleBuyAll}
                            >
                                Comprar Todo
                            </button>
                        </>
                    )}
                </div>
            </div>

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