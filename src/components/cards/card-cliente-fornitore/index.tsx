import React from "react";
import "./card-cliente-fornitore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ClienteFornitore } from "../../../reducers/clientiFornitori";
import Button from "@mui/material/Button";

interface CardClientiFornitoriProps {
  clienteFornitore: ClienteFornitore;
  onDetail: (clienteFornitore: ClienteFornitore) => void;
}

const CardClientiFornitori: React.FC<CardClientiFornitoriProps> = ({ clienteFornitore, onDetail }) => {
  return (
    <div className={`card_cliente_fornitore`}>
      <div className={`line-${clienteFornitore.idTipo}`}></div>

      <h2 className="card-title">{clienteFornitore.nome || ""}</h2>
      <p className="card-description">{`Indirizzo: ${clienteFornitore.indirizzo}`}</p>
      <p className="card-description">{`Partita IVA: ${clienteFornitore.partitaIva}`}</p>
      <p className="card-description">{`Codice Fiscale: ${clienteFornitore.codiceFiscale}`}</p>

      <div className="card-bottom-bar">
        <div className="left-buttons">
          <Button className="left-button" onClick={() => onDetail(clienteFornitore)} variant="outlined">
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardClientiFornitori;
