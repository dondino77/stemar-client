import React, { useState } from "react";
import "./mezzi.css";
import ModalMezzi from "../../components/modals/modal-mezzi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardMezzi from "../../components/cards/card-mezzi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Mezzo } from "../../reducers/mezzi/types";
import { addMezzo } from "../../reducers/mezzi";

interface MezziScreenProps {}

const MezziScreen: React.FC<MezziScreenProps> = () => {
  const mezzi = useSelector((state: RootState) => state.mezzi.mezzi);
  const [mezzoSelected, setMezzoSelected] = useState<Mezzo | undefined>(
    undefined
  );
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setMezzoSelected(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const apiMezzo = async (values: Mezzo) => {
    const loggedInResponse = await fetch("http://localhost:3001/mezzi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log('loggedIn', loggedIn)
  };

  const handleSalva = (mezzo: Mezzo) => {
    apiMezzo(mezzo)
    dispatch(addMezzo(mezzo));
    setIsModalOpen(false);
  };

  const handleDetail = (mezzo: Mezzo) => {
    setMezzoSelected(mezzo);
    setIsModalOpen(true);
  };

  return (
    <div className="cantieri-container">
      <div className="toolbar-cantieri">
        <button className="button" onClick={handleOpenModal}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo mezzo
        </button>
      </div>

      <div className={"cantieri-line"}></div>

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
