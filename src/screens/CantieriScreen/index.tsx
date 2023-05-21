import React, { useState } from "react";
import CardCantiere from "../../components/cards/card-cantiere";
import "./cantieri.css";
import { RootState } from "../../store";
import { Cantiere } from "../../reducers/cantieri/types";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalRDLCantiere from "../../components/modals/modal-rdl-cantiere";
import ModalCantiere from "../../components/modals/modal-cantiere";
import { addCantiere } from "../../reducers/cantieri";

interface CantieriScreenProps {}

const CantieriScreen: React.FC<CantieriScreenProps> = () => {
  const cantieri = useSelector((state: RootState) => state.cantieri.cantieri);
  const [isModalRDLOpen, setIsModalRDLOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cantiereSelected, setCantiereSelected] = useState<
    Cantiere | undefined
  >(undefined);

  const dispatch = useDispatch();

  const handleOpenModalRDL = () => {
    setIsModalRDLOpen(true);
  };

  const handleCloseModalRDL = () => {
    setIsModalRDLOpen(false);
  };

  const handleOpenModal = () => {
    setCantiereSelected(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSalva = (cantiere: Cantiere) => {
    dispatch(addCantiere(cantiere));
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
            onRDL={handleOpenModalRDL}
          />
        ))}
      </div>
      {isModalRDLOpen && <ModalRDLCantiere onClose={handleCloseModalRDL} />}
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
