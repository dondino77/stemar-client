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
      className={`card`}>
      <div className={`${cantiere.error ? "red-line" : "green-line"}`}></div>
      <h2 className="card-title">{cantiere.committente}</h2>
      <p className="card-description">{cantiere.impresa}</p>
      <p className="card-content">{cantiere.preventivo.toString()}</p>
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
