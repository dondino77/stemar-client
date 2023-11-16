import React, { useEffect, useState } from "react";
import "./mezzi.css";
import ModalMezzi from "../../components/modals/modal-mezzi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardMezzi from "../../components/cards/card-mezzi";
import { Mezzo } from "../../reducers/mezzi/types";
import useMezziHook from "./useHookMezzi";

interface MezziScreenProps {}

const MezziScreen: React.FC<MezziScreenProps> = () => {
  const { createMezzo, mezzi, getMezzi, updateMezzo } = useMezziHook();
  const [mezzoSelected, setMezzoSelected] = useState<Mezzo | undefined>(
    undefined
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getMezzi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => {
    setMezzoSelected(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSalva = (mezzo: Mezzo) => {
    if (mezzo.id !== "") {
      updateMezzo(mezzo)
    } else {
      createMezzo(mezzo);
    }
    setIsModalOpen(false);
  };

  const handleDetail = (mezzo: Mezzo) => {
    setMezzoSelected(mezzo);
    setIsModalOpen(true);
  };

  return (
    <div className="mezzi-container">
      <div className="toolbar-mezzi">
        <button className="button" onClick={handleOpenModal}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo mezzo
        </button>
      </div>

      <div className={"mezzi-line"}></div>

      <div className="page">
        {mezzi?.map((card: Mezzo, index) => (
          <CardMezzi key={index} mezzo={card} onDetail={handleDetail} />
        ))}
      </div>
      {isModalOpen && (
        <ModalMezzi
          onClose={handleCloseModal}
          onSalva={handleSalva}
          mezzo={mezzoSelected}
        />
      )}
    </div>
  );
};

export default MezziScreen;
