import React from "react";
import "./amministrazione-fatture.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";

interface AmministrazioneFattureScreenProps {}

const AmministrazioneFattureScreen: React.FC<AmministrazioneFattureScreenProps> = () => {


  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setClienteFornitoreSelected(undefined);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

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

      </div>
      {/* {isModalOpen && (
        <ModalClientiFornitori
          onClose={handleCloseModal}
          onSalva={handleSalva}
          clienteFornitore={clienteFornitoreSelected}
        />
      )} */}
    </div>
  );
};

export default AmministrazioneFattureScreen;
