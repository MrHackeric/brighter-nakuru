import React from 'react';
import '../assets/styles/scrollButtons.css';
import scrollUpIcon from '../assets/images/scroll-up-icon.png';
import scrollDownIcon from '../assets/images/scroll-down-icon.png';

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-button top" onClick={scrollToTop}>
        <img src={scrollUpIcon} alt="Scroll to top" />
      </button>
      <button className="scroll-button bottom" onClick={scrollToBottom}>
        <img src={scrollDownIcon} alt="Scroll to bottom" />
      </button>
    </div>
  );
};

export default ScrollButtons;