import React, { useState }  from "react";
import "./plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPlanCantiere from "../../components/modals/modal-plan-cantiere";

interface PlanScreenProps {}

const PlanScreen: React.FC<PlanScreenProps> = () => {
  // const cantieri = useSelector((state: RootState) => state.cantieri.cantieri);
  const [isModalPlanOpen, setIsModalPlanOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [cantiereSelected, setCantiereSelected] = useState<
  //   Cantiere | undefined
  // >(undefined);

  // const dispatch = useDispatch();

  const handleOpenModalPlan = () => {
    setIsModalPlanOpen(true);
  };

  const handleCloseModalPlan = () => {
    setIsModalPlanOpen(false);
  };

  const handleOpenModal = () => {
    // setCantiereSelected(undefined);
    // setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleSalva = (cantiere: Cantiere) => {
  //   dispatch(addCantiere(cantiere));
  //   setIsModalOpen(false);
  // };

  // const handleDetail = (cantiere: Cantiere) => {
  //   setCantiereSelected(cantiere);
  //   setIsModalOpen(true);
  // };

  return (
    <div className="plan-container">
      <div className="toolbar-plan">
        <button className="button" onClick={handleOpenModalPlan}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Nuovo planning
        </button>
      </div>

      <div className={"plan-line"}></div>

      {/* <div className="page">
        {cantieri?.map((card: Cantiere, index) => (
          <CardCantiere
            key={index}
            cantiere={card}
            onDetail={handleDetail}
            onRDL={handleOpenModalRDL}
          />
        ))}
      </div> */}
      {isModalPlanOpen && <ModalPlanCantiere onClose={handleCloseModalPlan} />}
      {/* {isModalOpen && (
        <ModalCantiere
          onClose={handleCloseModal}
          onSalva={handleSalva}
          cantiere={cantiereSelected}
        /> 
      )}*/}
    </div>
  );
};

export default PlanScreen;
