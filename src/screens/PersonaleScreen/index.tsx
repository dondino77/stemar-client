import React, { useEffect, useState } from "react";
import "./personale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPersonale from "../../components/modals/modal-personale";
import { Persona } from "../../reducers/personale/types";
import CardPersonale from "../../components/cards/card-personale";
import usePersonaleHook from "./useHookPersonale";

interface PersonaleScreenProps {}

const PersonaleScreen: React.FC<PersonaleScreenProps> = () => {
  const { createPersonale, personale, getPersonale, updatePersonale } = usePersonaleHook();

  const [personaSelected, setPersonaSelected] = useState<Persona | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPersonale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleOpenModal = () => {
    setPersonaSelected(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSalva = (persona: Persona) => {
    if (persona.id !== "") {
      updatePersonale(persona)
    } else {
      createPersonale(persona);
    }
    setIsModalOpen(false);
  };

  const handleDetail = (persona: Persona) => {
    setPersonaSelected(persona);
    setIsModalOpen(true);
  };

  return (
    <div className="cantieri-container">
      <div className="toolbar-cantieri">
        <button className="button" onClick={handleOpenModal}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo
        </button>
      </div>

      <div className={"cantieri-line"}></div>

      <div className="page">
        {personale?.map((card: Persona, index) => (
        <CardPersonale
          key={index}
          persona={card}
          onDetail={handleDetail}
        />
      ))}
      </div>
      {isModalOpen && (
        <ModalPersonale
          onClose={handleCloseModal}
          onSalva={handleSalva}
          persona={personaSelected}
        />
      )}
    </div>
  );
};

export default PersonaleScreen;
