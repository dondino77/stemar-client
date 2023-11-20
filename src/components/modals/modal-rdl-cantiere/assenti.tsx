import React from "react";
import "./modal-rdl-cantiere.css";
import { Persona } from "../../../reducers/personale";

interface AssentiProps {
  assenti: Persona[]
}

const Assenti: React.FC<AssentiProps> = ({assenti}) => {

  return (
    <div className="cantiere-grouped-grid">
      <div className="personale-in-cantiere-grid1">
        {assenti.map((item: Persona, index) => (
          <>
            <div
              className={`personale-in-cantiere-row`}
              key={`personale${index}`}
            >
              {`${item.nome} ${item.cognome}`}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Assenti;
