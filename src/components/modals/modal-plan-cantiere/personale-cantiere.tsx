import React, { useEffect, useState } from "react";
import "./modalCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Persona } from "../../../reducers/personale/types";

interface PersonaleCantiereProps {}

const PersonaleCantiere: React.FC<PersonaleCantiereProps> = () => {
  const personale = useSelector(
    (state: RootState) => state.personale.personale
  );
  const [personaleFiltrato, setPersonaleFiltrato] = useState<Persona[]>([]);
  const [personaleInCantiere, setPersonaleInCantiere] = useState<Persona[]>([]);

  const handleSelectChange = (id: any, value: any) => {
    // setData((prevData) =>
    //   prevData.map((item) => (item.id === id ? { ...item, value } : item))
    // );
  };

  const updatePersonaleFiltrato = () => {
    // Creare un nuovo array3 aggiornato
    const personaleTmp = personale.filter(
      (item1: Persona) =>
        !personaleInCantiere.some((item2: Persona) => item2.id === item1.id)
    );

    // Aggiornare lo stato di array3 con il nuovo array
    setPersonaleFiltrato(personaleTmp);
  };

  const addPersonaInCantiere = (item: Persona) => {
    setPersonaleInCantiere([...personaleInCantiere, item]);
  };

  const removePersonaInCantiere = (id: string) => {
    const newArray = personaleInCantiere.filter(
      (item: Persona) => item.id !== id
    );
    console.log("newArray", newArray);

    setPersonaleInCantiere(newArray);
  };

  useEffect(() => {
    updatePersonaleFiltrato();
  }, [personaleInCantiere]);

  //   const array3 = array1.filter(item1 => !array2.some(item2 => item2.id === item1.id));

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
        {personaleInCantiere.map((item: Persona, index) => (
          <>
            <div
              className={`personale-in-cantiere-row griglia-mansione${item.idMansione}`}
              key={`in_cantiere${index}`}
            >
              {`${item.cognome} ${item.nome}`}
            </div>
            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <select
                // value={item.value}
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
