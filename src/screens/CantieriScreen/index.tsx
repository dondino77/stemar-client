import React, { useState } from "react";
import CardCantiere from "../../components/cards/card-cantiere";
import "./cantieri.css";
import { Cantiere } from "../../reducers/cantieri/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalCantiere from "../../components/modals/modal-cantiere";
import useCantieriHook from "./useHookCantieri";

interface CantieriScreenProps {}

const CantieriScreen: React.FC<CantieriScreenProps> = () => {
  const { createCantiere, cantieri, updateCantiere } = useCantieriHook();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cantiereSelected, setCantiereSelected] = useState<
    Cantiere | undefined
  >(undefined);
 

  const handleOpenModal = () => {
    setCantiereSelected(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSalva = (cantiere: Cantiere) => {
    if (cantiere.id !== "") {
      updateCantiere(cantiere)
    } else {
      createCantiere(cantiere);
    }
    setIsModalOpen(false);
  };

  const handleDetail = (cantiere: Cantiere) => {
    setCantiereSelected(cantiere);
    setIsModalOpen(true);
  };

  return (
    <div className="cantieri-container">
      <div className="toolbar-cantieri">
        <button className="button" onClick={handleOpenModal}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo cantiere
        </button>
      </div>

      <div className={"cantieri-line"}></div>

      <div className="page">
        {cantieri?.map((card: Cantiere, index) => (
          <CardCantiere
            key={index}
            cantiere={card}
            onDetail={handleDetail}
          />
        ))}
      </div>
      {isModalOpen && (
        <ModalCantiere
          onClose={handleCloseModal}
          onSalva={handleSalva}
          cantiere={cantiereSelected}
        />
      )}
    </div>
  );
};

export default CantieriScreen;
