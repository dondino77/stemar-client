import React from "react";
import "./card-personale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Persona } from "../../../reducers/personale/types";
import Button from "@mui/material/Button";

interface CardPersonaleProps {
  persona: Persona;
  onDetail: (persona: Persona) => void;
}

const CardPersonale: React.FC<CardPersonaleProps> = ({ persona, onDetail }) => {
  return (
    <div className={`card-personale`}>
      <div className={`mansione${persona.idMansione}`}></div>

      <h2 className="card-title">{`${persona.nome || ""} ${
        persona.cognome || ""
      }`}</h2>
      <p className="card-description">{`Mansione: ${persona.mansione || ""} ${
        persona.manovale ? "- Man" : ""
      }`}</p>
      <p className="card-content">{`Coefficiente: ${
        persona.coefficiente?.toString() || 0
      }`}</p>
      <div className="card-bottom-bar">
        <div className="left-buttons">
          <Button
            className="left-button"
            onClick={() => onDetail(persona)}
            variant="outlined"
          >
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPersonale;
