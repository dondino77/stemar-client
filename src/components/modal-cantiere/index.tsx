import React from 'react';
import './modalCantiere.css';

interface ModalCantiereProps {
  onClose: () => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({ onClose }) => {
  return (
    <div className={`modal open`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modale</h2>
        <p>Contenuto della modale</p>
        <button onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
};

export default ModalCantiere;
