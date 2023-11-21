import React, { useState } from "react";
import "./personale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPersonale from "../../components/modals/modal-personale";
import { Persona } from "../../reducers/personale/types";
import CardPersonale from "../../components/cards/card-personale";
import usePersonaleHook from "./useHookPersonale";
import Button from "@mui/material/Button";

interface PersonaleScreenProps {}

const PersonaleScreen: React.FC<PersonaleScreenProps> = () => {
  const { createPersonale, personale, updatePersonale } = usePersonaleHook();

  const [personaSelected, setPersonaSelected] = useState<Persona | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   getPersonale();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
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
    <div className="personale-container">
      <div className="toolbar-personale">
        <Button className="button" onClick={handleOpenModal} variant="outlined">
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo
        </Button>
      </div>

      <div className={"personale-line"}></div>

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
