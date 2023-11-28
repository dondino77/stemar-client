import React, { useEffect, useState } from "react";
import "./plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPlanCantiere from "../../components/modals/modal-plan-cantiere";
import usePlanHook from "./usePlanHook";
import { RDLPlan } from "../../reducers/plan";
import CardCantiere from "../../components/cards/card-cantiere";
import ModalRDLCantiere from "../../components/modals/modal-rdl-cantiere";
import Button from "@mui/material/Button";

interface PlanScreenProps {}

const PlanScreen: React.FC<PlanScreenProps> = () => {
  const { plan, getPlan, resetForm, updateRdlList, fornitori } = usePlanHook();

  const [isModalPlanOpen, setIsModalPlanOpen] = useState(false);
  const [isModalRDLOpen, setIsModalRDLOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<RDLPlan>();
  const [today, setToday] = useState(getToday());


  const handleOpenModalPlan = () => {
    resetForm();
    setIsModalPlanOpen(true);
  };

  const handleCloseModalPlan = () => {
    setIsModalPlanOpen(false);
  };

  const handleOpenModalRDL = (item: RDLPlan) => {
    setIsModalRDLOpen(true);
    setItemSelected(item);
  };

  const handleCloseModalRDL = () => {
    setIsModalRDLOpen(false);
  };

  const handleConfirmModalRDL = (personale: any, mezzi: any) => {
    itemSelected && updateRdlList({...itemSelected, personale, mezzi});
    setIsModalRDLOpen(false);
  };

  const getPlanFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    getPlan(e.target.value);
    setToday(e.target.value)
  };

  function getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    setToday(getToday());
    getPlan(getToday());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="plan-container">
      <div className="toolbar-plan">
        <Button className="button" onClick={handleOpenModalPlan} variant="outlined">
          <FontAwesomeIcon className="icon" icon={faPlus} />
          Plan
        </Button>
      </div>

      <div className={"plan-line"}></div>

      <div className="plan-data">
        <label>
          Data
          <input
            type="date"
            className="cantiere-plan-modal-data"
            value={today}
            onChange={getPlanFromData}
          />
        </label>
      </div>

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
      {isModalRDLOpen && (
        <ModalRDLCantiere
          onClose={handleCloseModalRDL}
          rdlPlan={itemSelected}
          assenti={plan?.assenze}
          onConfirm={handleConfirmModalRDL}
          fornitori={fornitori || []}
        />
      )}
    </div>
  );
};

export default PlanScreen;
