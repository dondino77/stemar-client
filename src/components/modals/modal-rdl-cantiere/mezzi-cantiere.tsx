import React, { useEffect, useState } from "react";
import "./modalCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Mezzo } from "../../../reducers/mezzi/types";

interface MezziCantiereProps {}

const MezziCantiere: React.FC<MezziCantiereProps> = () => {
  const mezzi = useSelector((state: RootState) => state.mezzi.mezziList);
  const [mezziFiltrati, setMezziFiltrati] = useState<Mezzo[]>([]);
  const [mezziInCantiere, setMezziInCantiere] = useState<Mezzo[]>([]);

  const handleSelectChange = (id: any, value: any) => {
    // setData((prevData) =>
    //   prevData.map((item) => (item.id === id ? { ...item, value } : item))
    // );
  };

  const updateMezziFiltrati = () => {
    // Creare un nuovo array3 aggiornato
    const mezziTmp = mezzi.filter(
      (item1: Mezzo) =>
        !mezziInCantiere.some((item2: Mezzo) => item2.id === item1.id)
    );

    // Aggiornare lo stato di array3 con il nuovo array
    setMezziFiltrati(mezziTmp);
  };

  const addMezzoInCantiere = (item: Mezzo) => {
    setMezziInCantiere([...mezziInCantiere, item]);
  };

  const removeMezzoInCantiere = (id: string) => {
    const newArray = mezziInCantiere.filter((item: Mezzo) => item.id !== id);
    console.log("newArray", newArray);

    setMezziInCantiere(newArray);
  };

  useEffect(() => {
    updateMezziFiltrati();
  }, [mezziInCantiere]);

  //   const array3 = array1.filter(item1 => !array2.some(item2 => item2.id === item1.id));

  return (
    <div className="cantiere-grouped-grid">
      <div className="personale-in-cantiere-grid1">
        {mezziFiltrati.map((item: Mezzo, index) => (
          <>
            <div
              className={`personale-in-cantiere-row`}
              key={`personale${index}`}
            >
              {`${item.nome} ${item.targa}`}
            </div>
            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <button
                className="personale-cantiere-button"
                onClick={() => addMezzoInCantiere(item)}
              >
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </div>
          </>
        ))}
      </div>

      <div className="personale-in-cantiere-grid2">
        {mezziInCantiere.map((item: Mezzo, index) => (
          <>
            <div
              className={`personale-in-cantiere-row`}
              key={`in_cantiere${index}`}
            >
              {`${item.nome} ${item.targa}`}
            </div>
            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <input
                type="number"
                step="1"
                // value={costoKm}
                // onChange={(e) => setCostoKm(parseFloat(e.target.value))}
              />
            </div>

            <div
              className="personale-in-cantiere-row"
              key={`in_cantiere${index}`}
            >
              <button
                className="personale-cantiere-button"
                onClick={() => removeMezzoInCantiere(item.id)}
              >
                <FontAwesomeIcon icon={faCircleMinus} />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MezziCantiere;
