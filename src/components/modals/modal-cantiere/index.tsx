import React, { useState } from "react";
import "./modal-personale.css";
import { v4 as uuidv4 } from "uuid";
import { Cantiere } from "../../../reducers/cantieri/types";

interface ModalCantiereProps {
  cantiere?: Cantiere;
  onClose: () => void;
  onSalva: (cantiere: Cantiere) => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({
  onClose,
  onSalva,
  cantiere,
}) => {
  const [committente, setCommittente] = useState(cantiere?.committente || "");
  const [luogo, setLuogo] = useState(cantiere?.luogo || "");
  const [oggettoLavori, setOggettoLavori] = useState(
    cantiere?.oggettoLavori || ""
  );
  const [impresa, setImpresa] = useState(cantiere?.impresa || "");
  const [preventivo, setPreventivo] = useState(cantiere?.preventivo || 0);
  const [durataGG, setDurataGG] = useState(cantiere?.durataGG || 0);

  const handleConfirm = () => {
    onSalva({
      id: uuidv4(),
      committente,
      luogo,
      oggettoLavori,
      impresa,
      preventivo,
      durataGG,
      error: false
    });
  };

  return (
    <div className="cantiere-modal">
      <div className="cantiere-modal-content">
        <h2>Gestione Cantiere</h2>
        <div className="cantiere-form-field">
          <label>
            Committente
            <input
              type="text"
              value={committente}
              onChange={(e) => setCommittente(e.target.value)}
            />
          </label>
        </div>

        <div className="cantiere-form-field">
          <label>
            Luogo
            <input
              type="text"
              value={luogo}
              onChange={(e) => setLuogo(e.target.value)}
            />
          </label>
        </div>

        <div className="cantiere-form-field">
          <label>
            Oggetto lavori
            <input
              type="text"
              value={oggettoLavori}
              onChange={(e) => setOggettoLavori(e.target.value)}
            />
          </label>
        </div>

        <div className="cantiere-form-field">
          <label>
            Impresa
            <input
              type="text"
              value={impresa}
              onChange={(e) => setImpresa(e.target.value)}
            />
          </label>
        </div>

        <div className="cantiere-form-field-group">
          <div className="cantiere-form-field">
            <label>
              Preventivo
              <input
                type="number"
                step="0.01"
                value={preventivo}
                onChange={(e) => setPreventivo(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div className="cantiere-form-field">
            <label>
              Durata Giorni
              <input
                type="number"
                step="1"
                value={durataGG}
                onChange={(e) => setDurataGG(parseFloat(e.target.value))}
              />
            </label>
          </div>
        </div>
        <div className="cantiere-modal-bottom-bar">
          <button className="cantiere-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="cantiere-btn-confirm" onClick={handleConfirm}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCantiere;
