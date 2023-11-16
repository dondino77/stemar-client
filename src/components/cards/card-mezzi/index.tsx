import React from "react";
import "./card-mezzi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Mezzo } from "../../../reducers/mezzi/types";

interface CardMezziProps {
  mezzo: Mezzo;
  onDetail: (mezzo: Mezzo) => void;
}

const CardMezzi: React.FC<CardMezziProps> = ({ mezzo, onDetail }) => {
  return (
    <div className={`card_mezzo`}>
      <div className={"green-line"}></div>

      <h2 className="card-title">{mezzo.nome || ""}</h2>
      <p className="card-description">{`Targa ${mezzo.targa}`}</p>
      <p className="card-description">{`Scadenza RC ${
        mezzo.dataScadenzaAssicurazione
          ? new Date(mezzo.dataScadenzaAssicurazione)
              .toISOString()
              .split("T")[0]
          : ""
      }`}</p>
      <p className="card-description">{`Scadenza bollo ${
        mezzo.dataScadenzaBollo
          ? new Date(mezzo.dataScadenzaBollo).toISOString().split("T")[0]
          : ""
      }`}</p>
      <p className="card-description">{`Prossima revisione ${
        mezzo.dataProssimaRevisione
          ? new Date(mezzo.dataProssimaRevisione).toISOString().split("T")[0]
          : ""
      }`}</p>
      <p className="card-content">{`Costo Orario € ${
        mezzo?.costoOrario?.toLocaleString("it-IT", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) || 0
      }`}</p>
      <div className="card-bottom-bar">
        <div className="left-buttons">
          <button className="left-button" onClick={() => onDetail(mezzo)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMezzi;
