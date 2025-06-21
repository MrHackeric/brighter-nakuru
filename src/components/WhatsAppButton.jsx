import React from 'react';
import '../assets/styles/whatsapp.css';
import whatsappIcon from '../assets/images/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"> {/* Add WhatsApp Number here */}
      <img src={whatsappIcon} alt="Chat with us on WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;