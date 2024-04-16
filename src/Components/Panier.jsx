import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Panier.css';

const Panier = () => {
    const [panier, setPanier] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const panierData = JSON.parse(localStorage.getItem('panier')) || [];
        setPanier(panierData);

        const totalAmount = panierData.reduce((acc, product) => acc + product.price, 0);
        setTotal(totalAmount);
    }, []);

    const removeFromCart = (productId) => {
        const updatedPanier = panier.filter(product => product.id !== productId);
        setPanier(updatedPanier);

        const totalAmount = updatedPanier.reduce((acc, product) => acc + product.price, 0);
        setTotal(totalAmount);

        localStorage.setItem('panier', JSON.stringify(updatedPanier));
    };

    return (
        <div className="panier-container">
            <h1 className="panier-title">Panier</h1>
            {panier.length > 0 ? (
                <div>
                    {panier.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} className="product-image" alt={product.name} />
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">Prix: ${product.price}</p>
                                <button onClick={() => removeFromCart(product.id)} className="remove-button">Supprimer</button>
                            </div>
                        </div>
                    ))}
                    <div className="total-container">
                        <p className="total-text">Total: ${total}</p>
                    </div>
                </div>
            ) : (
                <div className="empty-panier">
                    <p>Votre panier est vide.</p>
                    <Link to="/" className="return-button">Retour à l'accueil</Link>
                </div>
            )}
        </div>
    );
};

export default Panier;
