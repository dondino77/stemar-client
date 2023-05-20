import React, { useState } from "react";
import CardCantiere from "../../components/cards/card-cantiere";
import "./cantieri.css";
import { RootState } from "../../store";
import { Cantiere } from "../../reducers/cantieri/types";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalCantiere from "../../components/modals/modal-cantiere";

interface CantieriScreenProps {}

const CantieriScreen: React.FC<CantieriScreenProps> = () => {
  const cantieri = useSelector((state: RootState) => state.cantieri.cantieri);
  const [select, setSelect] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelect = (id: string) => {
    setSelect(id);
  };

  return (
    <div className="cantieri-container">
      {/* <button onClick={handleOpenModal}>Apri Modale</button> */}

      <div className="toolbar-cantieri">
        <button className="button" onClick={handleOpenModal}>
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
        {/* {cantieri?.map((card: Cantiere, index) => (
          <CardCantiere
            key={index}
            content={card.id.toString()}
            description={card.indirizzo}
            title={card.indirizzo}
            onSelected={handleSelect}
            selected={card.id.toString() === select}
            error={card.error}
          />
        ))} */}
      </div>
      {isModalOpen && <ModalCantiere onClose={handleCloseModal} />}

    </div>
  );
};

export default CantieriScreen;
