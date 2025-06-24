import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import ScrollButtons from './ScrollButtons';
import '../assets/styles/floatingWrapper.css';

const FloatingButtonsWrapper = () => {
  return (
    <div className="floating-wrapper">
      <WhatsAppButton />
      <ScrollButtons />
    </div>
  );
};

export default FloatingButtonsWrapper;