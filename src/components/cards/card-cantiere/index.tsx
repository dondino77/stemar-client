import React, { useEffect, useRef, useState } from "react";
import "./cardCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEye,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
import { Cantiere } from "../../../reducers/cantieri/types";

interface CardCantiereProps {
  cantiere: Cantiere,
  onDetail: (cantiere: Cantiere) => void
  onRDL: () => void
}

const CardCantiere: React.FC<CardCantiereProps> = ({
  cantiere,
  onDetail,
  onRDL
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`card-cantiere`}>
      <div className={`${cantiere.error ? "red-line" : "green-line"}`}></div>
      <h2 className="card-title">{`${cantiere.committente || ''}`}</h2>
      <p className="card-description">{`Impresa: ${cantiere.committente || ''}`}</p>
      <p className="card-description">{`Luogo: ${cantiere.luogo || ''}`}</p>
      <p className="card-description">{`Durata GG: ${cantiere.durataGG || ''}`}</p>
      <p className="card-content">{`Preventivo: € ${
        cantiere.preventivo?.toLocaleString("it-IT", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) || 0
      }`}</p>

      <div className="card-bottom-bar">
        <div className="left-buttons">
          <button className="left-button" onClick={() => onDetail(cantiere)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="left-button" onClick={() => onRDL()}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </button>
        </div>
        <div className="right-buttons">
          <button className="right-button" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {isMenuOpen && (
            <div className="menu" ref={menuRef} >
              <button className="menu-item">Archivia</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCantiere;
