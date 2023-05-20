import React from "react";


interface MezziCantiereProps {
  onClose: () => void;
}

const MezziCantiere: React.FC<MezziCantiereProps> = ({ onClose }) => {

  return (
    <div className={`modal open`} onClick={onClose}>

    </div>
  );
};

export default MezziCantiere;
