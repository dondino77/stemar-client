import React, { useState } from "react";
import "./modal-personale.css";
import { Persona } from "../../../reducers/personale/types";

interface ModalPersonaleProps {
  persona?: Persona;
  onClose: () => void;
  onSalva: (persona: Persona) => void;
}

const ModalPersonale: React.FC<ModalPersonaleProps> = ({
  onClose,
  onSalva,
  persona,
}) => {
  const [nome, setNome] = useState(persona?.nome || "");
  const [cognome, setCognome] = useState(persona?.cognome || "");
  const [dataNascita, setDataNascita] = useState(persona?.dataNascita || "");
  const [coefficiente, setCoefficiente] = useState(persona?.coefficiente || 0);
  const [mansione, setMansione] = useState<{ id: number; value: string }>({
    id: persona?.idMansione || 0,
    value: persona?.mansione || "Intonacatore/Pittore",
  });
  const [manovale, setManovale] = useState(persona?.manovale || false);

  const handleConfirm = () => {
    onSalva({
      id: persona?._id || '',
      nome,
      cognome,
      dataNascita,
      coefficiente,
      idMansione: mansione.id,
      mansione: mansione.value,
      manovale,
    });
  };

  return (
    <div className="personal-modal">
      <div className="personal-modal-content">
        <h2>Gestione Personale</h2>
        <div className="personal-form-field">
          <label>
            Nome*
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>

        <div className="personal-form-field">
          <label>
            Cognome*
            <input
              type="text"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
            />
          </label>
        </div>
        <div className="personal-form-field">
          <label>
            Data di nascita
            <input
              type="date"
              value={dataNascita ? new Date(dataNascita).toISOString().split('T')[0] : ''}
              onChange={(e) => setDataNascita(e.target.value)}
            />
          </label>
        </div>

        <div className="personal-form-field-group">
          <div className="personal-form-field">
            <label>
              Coefficiente*
              <input
                type="number"
                step="0.01"
                value={coefficiente}
                onChange={(e) => setCoefficiente(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div className="personal-form-field">
            <label htmlFor="mansione">Mansione</label>
            <select
              id="mansione"
              name="mansione"
              value={mansione.value}
              onChange={(e) =>
                setMansione({
                  id: e.target.selectedIndex,
                  value: e.target.value,
                })
              }
            >
              <option value="Intonacatore/Pittore">Intonacatore/Pittore</option>
              <option value="Piastrellista">Piastrellista</option>
              <option value="Carpentiere/Muratore">Carpentiere/Muratore</option>
              <option value="Idraulico">Idraulico</option>
              <option value="Elettricista">Elettricista</option>
              <option value="Autista/Escavatorista">
                Autista/Escavatorista
              </option>
              <option value="Magazziniere">Magazziniere</option>
            </select>
          </div>
          <div className="personal-form-field">
            <label htmlFor="manovale">Manovale</label>
            <input
              type="checkbox"
              id="manovale"
              name="manovale"
              checked={manovale}
              onChange={(e) => setManovale(e.target.checked)}
            />
          </div>
        </div>
        <div className="personal-modal-bottom-bar">
          <button className="personal-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="personal-btn-confirm" onClick={handleConfirm} disabled={nome === '' || cognome === '' || coefficiente < 1}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonale;
