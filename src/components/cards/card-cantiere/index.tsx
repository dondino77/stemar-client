import React from "react";
import "./cardCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Cantiere } from "../../../reducers/cantieri/types";
import { RDLPlan } from "../../../reducers/plan";
import Button from "@mui/material/Button";

interface CardCantiereProps {
  rdl?: RDLPlan;
  cantiere: Cantiere;
  onDetail?: (cantiere: Cantiere) => void;
  onRDL?: (card: RDLPlan) => void;
}

const CardCantiere: React.FC<CardCantiereProps> = ({
  rdl,
  onDetail,
  onRDL,
  cantiere
}) => {
  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  // const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   setMenuOpen(!isMenuOpen);
  // };

  return (
    <div className={`card-cantiere`}>
      <div className={`${cantiere.error ? "red-line" : "green-line"}`}></div>
      <h2 className="card-title">{`${cantiere.committente || ""}`}</h2>
      <p className="card-description">{`Impresa: ${
        cantiere.committente || ""
      }`}</p>
      <p className="card-description">{`Luogo: ${cantiere.luogo || ""}`}</p>
      <p className="card-description">{`Durata GG: ${
        cantiere.durataGG || ""
      }`}</p>
      <p className="card-content">{`Preventivo: € ${
        cantiere.preventivo?.toLocaleString("it-IT", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) || 0
      }`}</p>

      <div className="card-bottom-bar">
        <div className="left-buttons">
          {onDetail && (
            <Button className="left-button" onClick={() => onDetail(cantiere)} variant="outlined">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          )}
          {onRDL && (
            <Button className="left-button" onClick={() => rdl && onRDL(rdl)} variant="outlined">
              <FontAwesomeIcon icon={faCalendarDays} />
            </Button>
          )}
        </div>
        {/* <div className="right-buttons">
          <button className="right-button" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {isMenuOpen && (
            <div className="menu" ref={menuRef}>
              <button className="menu-item">Archivia</button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CardCantiere;
