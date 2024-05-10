import React, { useState } from 'react';
import './ModalWidget.css'; // Import CSS for styling modal

const ModalWidget = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose(); // Invoke onClose callback if provided
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default ModalWidget;
