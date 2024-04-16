import React, { useState, useEffect } from 'react';
import Logo from "../assets/Design-logo.png";
import MessageImage from "../assets/message.png";
import './Profile.css';

const Profile = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showFullScreenMessage, setShowFullScreenMessage] = useState(false);

  useEffect(() => {
    if (envelopeOpen) {
      const timer = setTimeout(() => {
        setShowFullScreenMessage(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [envelopeOpen]);

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
  };

  const handleCloseFullScreenMessage = () => {
    setShowFullScreenMessage(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>---- Mon Profil ----</h2>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-image">
            <img src={Logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
          </div>
          <div className="profile-details">
            <h3>Nom: TIBAY</h3>
            <p>Email: tibay@hotmail.com</p>
            <p>Adresse: 123 Rue de la République, 75001 Paris</p>
            <p>Téléphone: +33 6 12 34 56 78</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn btn-primary">Modifier le Profil</button>
        </div>
      </div>
      <div className="envelope" onClick={handleEnvelopeClick}>
        <div className={`envelope-body ${envelopeOpen ? 'open' : ''}`}>
            <div className="message">Nouveau message</div>
        </div>
      </div>
      {showFullScreenMessage && (
        <div className="message-overlay" onClick={handleCloseFullScreenMessage}>
          <div className="message-content">
            <img src={MessageImage} alt="message" className="message" />
            <button onClick={handleCloseFullScreenMessage}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
