import React, { useEffect, useRef, useState } from "react";
import "./cardCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEllipsisVertical,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

interface CardCantiereProps {
  title: string;
  description: string;
  content: string;
  selected?: boolean;
  onSelected: (id: string) => void;
  error?: boolean;
}

const CardCantiere: React.FC<CardCantiereProps> = ({
  title,
  description,
  content,
  selected = false,
  error = true,
  onSelected,
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
      className={`card ${selected ? "selected" : ""} `}
      onClick={() => onSelected(content)}
    >
      <div className={`${error ? "red-line" : "green-line"}`}></div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-content">{content}</p>
      <div className="card-bottom-bar">
        <div className="left-buttons">
          <button className="left-button">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="left-button">
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
              <button className="menu-item">Modifica</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCantiere;
