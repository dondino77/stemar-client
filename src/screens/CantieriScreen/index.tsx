import React, { useState } from "react";
import CardCantiere from "../../components/cards/card-cantiere";
import "./cantieri.css";
import { RootState } from "../../store";
import { Cantiere } from "../../reducers/cantieri/types";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faPlus } from "@fortawesome/free-solid-svg-icons";

interface CantieriScreenProps {}

const CantieriScreen: React.FC<CantieriScreenProps> = () => {
  const cantieri = useSelector((state: RootState) => state.cantieri.cantieri);
  const [select, setSelect] = useState<string>("");
  // const dispatch = useDispatch();

  const handleSelect = (id: string) => {
    setSelect(id);
  };

  return (
    <div className="cantieri-container">
      {/* <button onClick={handleOpenModal}>Apri Modale</button> */}

      <div className="toolbar-cantieri">
        <button className="button">
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo cantiere
        </button>
        {/* <button className="button">
          <FontAwesomeIcon className="icon" icon={faArchive} />
          Archivia cantiere
        </button> */}
      </div>

      <div className={"cantieri-line"}></div>

      <div className="page">
        {cantieri?.map((card: Cantiere, index) => (
          <CardCantiere
            key={index}
            content={card.id.toString()}
            description={card.indirizzo}
            title={card.indirizzo}
            onSelected={handleSelect}
            selected={card.id.toString() === select}
            error={card.error}
          />
        ))}
      </div>
    </div>
  );
};

export default CantieriScreen;
