import React from "react";
import "./cardPlan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { CantieriPlan, PersonalePlan } from "../../../reducers/plan/types";
import { Mezzo } from "../../../reducers/mezzi/types";

interface CardPlanProps {
  cantierePlan: CantieriPlan;
  onDeletePlan: (id: string) => void;
  onDeleteMezzo: (idPlan: string, idMezzo: string) => void;
  onDeletePersonale: (idPlan: string, idPersonale: string) => void;
  onSelect: (item: CantieriPlan | undefined) => void;
  selected: boolean;
}

const CardPlan: React.FC<CardPlanProps> = ({
  cantierePlan,
  onDeletePlan,
  onDeleteMezzo,
  onDeletePersonale,
  onSelect,
  selected,
}) => {

  const actionDeletePlan = () => {
    onSelect(selected ? undefined : cantierePlan);
    onDeletePlan(cantierePlan.cantiere.id);
  };

  const actionSelectPlan = () => {
    onSelect(selected ? undefined : cantierePlan);
  };

  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => actionSelectPlan()}
    >
      <h2 className="card-title">{cantierePlan.cantiere.committente}</h2>
      <div className="card-content">
        {(cantierePlan?.personale?.length || 0) > 0 && <h4>Personale</h4>}

        {cantierePlan.personale?.map((item: PersonalePlan, index) => (
          <div className="personale-row">
            <div
              className={`personale-in-plan-row-text`}
              key={`personale${index}`}
            >
              {`${item.personale} `}
            </div>
            <div
              className="personale-in-plan-row-button"
              key={`in_plan${index}`}
            >
              <button
                className="personale-plan-button"
                onClick={() =>
                  onDeletePersonale(cantierePlan.cantiere.id, item.id)
                }
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </div>
          </div>
        ))}

        {(cantierePlan?.mezzi?.length || 0) > 0 && <h4>Mezzi</h4>}

        {cantierePlan.mezzi?.map((item: Mezzo, index) => (
          <div className="personale-row">
            <div
              className={`personale-in-plan-row-text`}
              key={`personale${index}`}
            >
              {`${item.nome} ${item.targa}`}
            </div>
            <div
              className="personale-in-plan-row-button"
              key={`in_plan${index}`}
            >
              <button
                className="personale-plan-button"
                onClick={() => onDeleteMezzo(cantierePlan.cantiere.id, item.id)}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-bottom-bar">
        <div className="left-buttons"></div>
        <div className="right-buttons">
          <button className="left-button">
            <FontAwesomeIcon
              icon={faRemove}
              onClick={() => actionDeletePlan()}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
