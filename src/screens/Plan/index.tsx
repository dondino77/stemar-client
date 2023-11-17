import React, { useState } from "react";
import "./plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPlanCantiere from "../../components/modals/modal-plan-cantiere";
import usePlanHook from "./usePlanHook";
import { RDLPlan } from "../../reducers/plan";
import CardCantiere from "../../components/cards/card-cantiere";
import ModalRDLCantiere from "../../components/modals/modal-rdl-cantiere";

interface PlanScreenProps {}

const PlanScreen: React.FC<PlanScreenProps> = () => {
  const { plan } = usePlanHook();

  const [isModalPlanOpen, setIsModalPlanOpen] = useState(false);
  const [isModalRDLOpen, setIsModalRDLOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<RDLPlan>();


  const handleOpenModalPlan = () => {
    setIsModalPlanOpen(true);
  };

  const handleCloseModalPlan = () => {
    setIsModalPlanOpen(false);
  };

  const handleOpenModalRDL = (item: RDLPlan) => {
    setIsModalRDLOpen(true);
    setItemSelected(item)
  };

  const handleCloseModalRDL = () => {
    setIsModalRDLOpen(false);
  };

  return (
    <div className="plan-container">
      <div className="toolbar-plan">
        <button className="button" onClick={handleOpenModalPlan}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Plan
        </button>
      </div>

      <div className={"plan-line"}></div>

      <div className="page">
        {plan?.rdlList?.map((card: RDLPlan, index) => (
          <CardCantiere
            key={index}
            rdl={card}
            cantiere={card.cantiere}
            onRDL={(card: RDLPlan) => handleOpenModalRDL(card)}
          />
        ))}
      </div>
      {isModalPlanOpen && <ModalPlanCantiere onClose={handleCloseModalPlan} />}
      {isModalRDLOpen && <ModalRDLCantiere onClose={handleCloseModalRDL} rdlPlan={itemSelected} assenti={plan?.assenze} />}
    </div>
  );
};

export default PlanScreen;
