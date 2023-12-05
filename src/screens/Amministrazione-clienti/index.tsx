import React, { useState } from "react";
import "./amministrazione-clienti.css";

import { ClienteFornitore } from "../../reducers/clientiFornitori";
import CardClientiFornitori from "../../components/cards/card-cliente-fornitore";
import ModalClientiFornitori from "../../components/modals/modal-clliente-fornitore";
import useAmministrazioneClientiHook from "./useHookAmministrazioneClienti";

interface AmministrazioneClientiScreenProps {}

const AmministrazioneClientiScreen: React.FC<AmministrazioneClientiScreenProps> = () => {
  const { clienti } = useAmministrazioneClientiHook();
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

      <div className={"mezzi-line"}></div>

      <div className="page">
        {clienti?.map((card: ClienteFornitore, index) => (
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

export default AmministrazioneClientiScreen;
