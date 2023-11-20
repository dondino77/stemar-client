import React, { useEffect, useState } from "react";
import "./modal-rdl-cantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { Persona } from "../../../reducers/personale/types";

interface PersonaleCantiereProps {
  personaleIn: Persona[];
  personale: Persona[];
  personaleInCantiere: any;
  setPersonaleInCantiere: (personale: any) => void;
}

const PersonaleCantiere: React.FC<PersonaleCantiereProps> = ({
  personaleIn,
  personale,
  personaleInCantiere,
  setPersonaleInCantiere
}) => {
  const [personaleFiltrato, setPersonaleFiltrato] = useState<Persona[]>([]);

  const handleSelectChange = (id: any, value: any) => {
    const index = personaleInCantiere?.findIndex((item1: Persona) => item1.id === id);
    const upd = JSON.parse(JSON.stringify(personaleInCantiere));
    upd[index].ore = value;
    setPersonaleInCantiere(upd);
  };

  const updatePersonaleFiltrato = () => {
    const personaleTmp = personale?.filter(
      (item1: Persona) =>
        !personaleInCantiere.some((item2: Persona) => item2.id === item1.id)
    );

    setPersonaleFiltrato(personaleTmp || []);
  };

  const addPersonaInCantiere = (item: Persona) => {
    setPersonaleInCantiere([...personaleInCantiere, item]);
  };

  const removePersonaInCantiere = (id: string) => {
    const newArray = personaleInCantiere.filter(
      (item: Persona) => item.id !== id
    );
    setPersonaleInCantiere(newArray);
  };

  useEffect(() => {
    updatePersonaleFiltrato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personaleInCantiere]);

  useEffect(() => {
    personaleIn && setPersonaleInCantiere(personaleIn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personaleIn]);

  return (
    <div className="cantiere-grouped-grid">
      <div className="personale-in-cantiere-grid1">
        {personaleFiltrato.map((item: Persona, index) => (
          <>
            <div
              className={`personale-in-cantiere-row griglia-mansione${item.idMansione}`}
              key={`personale${index}`}
            >
              {`${item.cognome} ${item.nome}`}
            </div>
            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <button
                className="personale-cantiere-button"
                onClick={() => addPersonaInCantiere(item)}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            </div>
          </>
        ))}
      </div>

      <div className="personale-in-cantiere-grid2">
        {personaleInCantiere.map((item: any, index: any) => (
          <>
            <div
              className={`personale-in-cantiere-row griglia-mansione${item.idMansione}`}
              key={`in_cantiere${index}`}
            >
              {`${item.cognome} ${item.nome}`}
            </div>
            <div
              className="personale-in-cantiere-rdl-row-sel"
              key={`in_cantiere${index}`}
            >
              <select
                value={item.ore}
                onChange={(e) => handleSelectChange(item.id, e.target.value)}
              >
                {Array.from({ length: 17 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <button
                className="personale-cantiere-button"
                onClick={() => removePersonaInCantiere(item.id)}
              >
                <FontAwesomeIcon icon={faUserMinus} />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PersonaleCantiere;
