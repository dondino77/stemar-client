import React, { useState } from "react";
import "./modal-mezzi.css";
import { Mezzo } from "../../../reducers/mezzi/types";
interface ModalMezziProps {
  mezzo?: Mezzo;
  onClose: () => void;
  onSalva: (mezzo: Mezzo) => void;
}

const ModalMezzi: React.FC<ModalMezziProps> = ({ onClose, mezzo, onSalva }) => {
  const [nome, setNome] = useState(mezzo?.nome || "");
  const [targa, setTarga] = useState(mezzo?.targa || "");
  const [dataScadenzaAssicurazione, setDataScadenzaAssicurazione] = useState(
    mezzo?.dataScadenzaAssicurazione
  );
  const [dataScadenzaBollo, setDataScadenzaBollo] = useState(
    mezzo?.dataScadenzaBollo
  );
  const [dataProssimaRevisione, setDataProssimaRevisione] = useState(
    mezzo?.dataProssimaRevisione
  );
  const [costoOrario, setCostoOrario] = useState(mezzo?.costoOrario || 0);

  const handleConfirm = () => {
    onSalva({
      id: mezzo?._id || '',
      nome,
      targa,
      dataScadenzaAssicurazione,
      dataScadenzaBollo,
      dataProssimaRevisione,
      costoOrario,
    });
  };

  return (
    <div className="vehicle-modal">
      <div className="vehicle-modal-content">
        <h2>Gestione Mezzi</h2>
        <div className="vehicle-form-field">
          <label>
            Nome*
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>
        <div className="vehicle-form-field">
          <label>
            Targa*
            <input
              type="text"
              value={targa}
              onChange={(e) => setTarga(e.target.value)}
            />
          </label>
        </div>
        <div className="vehicle-form-field">
          <label>
            Data scadenza assicurazione
            <input
              type="date"
              value={dataScadenzaAssicurazione ? new Date(dataScadenzaAssicurazione).toISOString().split('T')[0] : ''}
              onChange={(e) => setDataScadenzaAssicurazione(e.target.value)}
            />
          </label>
        </div>
        <div className="vehicle-form-field">
          <label>
            Data scadenza bollo
            <input
              type="date"
              value={dataScadenzaBollo ? new Date(dataScadenzaBollo).toISOString().split('T')[0] : ''}
              onChange={(e) => setDataScadenzaBollo(e.target.value)}
            />
          </label>
        </div>
        <div className="vehicle-form-field">
          <label>
            Data prossima revisione
            <input
              type="date"
              value={dataProssimaRevisione ? new Date(dataProssimaRevisione).toISOString().split('T')[0] : ''}
              onChange={(e) => setDataProssimaRevisione(e.target.value)}
            />
          </label>
        </div>
        <div className="vehicle-form-field">
          <label>
            Costo Orario*
            <input
              type="number"
              step="0.01"
              value={costoOrario}
              onChange={(e) => setCostoOrario(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <div className="vehicle-modal-bottom-bar">
          <button className="vehicle-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="vehicle-btn-confirm" onClick={handleConfirm} disabled={nome === '' || targa === '' || costoOrario < 1}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMezzi;
