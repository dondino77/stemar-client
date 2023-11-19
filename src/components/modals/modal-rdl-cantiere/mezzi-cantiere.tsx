import React, { useEffect, useState } from "react";
import "./modalCantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Mezzo } from "../../../reducers/mezzi/types";
import usePlanHook from "../../../screens/Plan/usePlanHook";

interface MezziCantiereProps {
  mezziIn: Mezzo[],
  mezziInCantiere: any,
  setMezziInCantiere: (mezzi: any) => void
}

const MezziCantiere: React.FC<MezziCantiereProps> = ({mezziIn, mezziInCantiere, setMezziInCantiere}) => {
  const { mezzi } = usePlanHook();
  const [mezziFiltrati, setMezziFiltrati] = useState<Mezzo[]>([]);
  // const [mezziInCantiere, setMezziInCantiere] = useState<any[]>([]);

  const handleSelectChange = (id: any, value: any) => {
    const index = mezziInCantiere?.findIndex((item1: Mezzo) => item1.id === id);
    const upd = JSON.parse(JSON.stringify(mezziInCantiere));
    upd[index].ore = value;
    setMezziInCantiere(upd);
  };

  const updateMezziFiltrati = () => {
    // Creare un nuovo array3 aggiornato
    const mezziTmp = mezzi?.filter(
      (item1: Mezzo) =>
        !mezziInCantiere.some((item2: Mezzo) => item2.id === item1.id)
    );

    // Aggiornare lo stato di array3 con il nuovo array
    setMezziFiltrati(mezziTmp || []);
  };

  const addMezzoInCantiere = (item: Mezzo) => {
    setMezziInCantiere([...mezziInCantiere, item]);
  };

  const removeMezzoInCantiere = (id: string) => {
    const newArray = mezziInCantiere.filter((item: Mezzo) => item.id !== id);
    setMezziInCantiere(newArray);
  };

  useEffect(() => {
    updateMezziFiltrati();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mezziInCantiere]);

  useEffect(() => {
    mezziIn && setMezziInCantiere(mezziIn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mezziIn]);

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
        {mezziInCantiere.map((item: any, index: any) => (
          <>
            <div
              className={`personale-in-cantiere-row`}
              key={`in_cantiere${index}`}
            >
              {`${item.nome} ${item.targa}`}
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
