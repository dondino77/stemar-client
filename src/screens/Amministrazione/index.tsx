import React, { useState } from "react";
import "./amministrazione.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
import { ClienteFornitore } from "../../reducers/clientiFornitori";
import CardClientiFornitori from "../../components/cards/card-cliente-fornitore";
import ModalClientiFornitori from "../../components/modals/modal-clliente-fornitore";
import useAmministrazioneHook from "./useHookAmministrazione";

interface AmministrazioneScreenProps {}

const AmministrazioneScreen: React.FC<AmministrazioneScreenProps> = () => {
  const { clientiFornitori } = useAmministrazioneHook();
  const [clienteFornitoreSelected] = useState<
    ClienteFornitore | undefined
  >(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setClienteFornitoreSelected(undefined);
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSalva = (item: ClienteFornitore) => {
    // if (item.id !== "") {
    //   updateClienteFornitore(item);
    // } else {
    //   createClienteFornitore(item);
    // }
    // setIsModalOpen(false);
  };

  const handleDetail = (clienteFornitore: ClienteFornitore) => {
    // setClienteFornitoreSelected(clienteFornitore);
    // setIsModalOpen(true);
  };

  return (
    <div className="mezzi-container">
      <div className="toolbar-mezzi">
        <Button className="button" variant="outlined">
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Registrazione Fattura
        </Button>
      </div>

      <div className={"mezzi-line"}></div>

      <div className="page">
        {clientiFornitori?.map((card: ClienteFornitore, index) => (
          <CardClientiFornitori
            key={index}
            clienteFornitore={card}
            onDetail={handleDetail}
          />
        ))}
      </div>
      {isModalOpen && (
        <ModalClientiFornitori
          onClose={handleCloseModal}
          onSalva={handleSalva}
          clienteFornitore={clienteFornitoreSelected}
        />
      )}
    </div>
  );
};

export default AmministrazioneScreen;
