import React, { useState } from "react";
import "./amministrazione-fornitori.css";

import { ClienteFornitore } from "../../reducers/clientiFornitori";
import CardClientiFornitori from "../../components/cards/card-cliente-fornitore";
import ModalClientiFornitori from "../../components/modals/modal-clliente-fornitore";
import useAmministrazioneFornitoriHook from "./useHookAmministrazioneFornitori";

interface AmministrazioneFornitoriScreenProps {}

const AmministrazioneFornitoriScreen: React.FC<AmministrazioneFornitoriScreenProps> = () => {
  const { fornitori } = useAmministrazioneFornitoriHook();
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
        {fornitori?.map((card: ClienteFornitore, index) => (
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

export default AmministrazioneFornitoriScreen;
