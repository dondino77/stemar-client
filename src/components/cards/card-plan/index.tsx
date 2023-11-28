import React from "react";
import "./cardPlan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { PersonalePlan, RDLPlan } from "../../../reducers/plan";
import { Mezzo } from "../../../reducers/mezzi";

interface CardPlanProps {
  rdlPlan: RDLPlan;
  onDeletePlan: (id: string) => void;
  onDeleteMezzo: (idPlan: string, idMezzo: string) => void;
  onDeletePersonale: (idPlan: string, idPersonale: string) => void;
  onSelect: (item: any | undefined) => void;
  selected: boolean;
}

const CardPlan: React.FC<CardPlanProps> = ({
  rdlPlan,
  onDeletePlan,
  onDeleteMezzo,
  onDeletePersonale,
  onSelect,
  selected,
}) => {
  const actionDeletePlan = () => {
    onSelect(selected ? undefined : rdlPlan);
    onDeletePlan(rdlPlan.id);
  };

  const actionSelectPlan = () => {
    onSelect(selected ? undefined : rdlPlan);
  };

  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => actionSelectPlan()}
    >
      <h2 className="card-title">{`${rdlPlan.cantiere?.committente || ""}`}</h2>
      <div className="card-content">
        {(rdlPlan?.personale?.length || 0) > 0 && <h4>Personale</h4>}

        {rdlPlan.personale?.map((item: PersonalePlan, index) => (
          <div className="personale-row">
            <div
              className={`personale-in-plan-row-text`}
              key={`personale${index}`}
            >
              {`${item.nome} ${item.cognome} `}
            </div>
            <div
              className="personale-in-plan-row-button"
              key={`in_plan_personale${index}`}
            >
              <button
                className="personale-plan-button"
                onClick={(e) => {
                  e.stopPropagation(); // Impedisce la propagazione dell'evento
                  onDeletePersonale(rdlPlan.id, item.id);
                }}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </div>
          </div>
        ))}

        {(rdlPlan?.mezzi?.length || 0) > 0 && <h4>Mezzi</h4>}

        {rdlPlan.mezzi?.map((item: Mezzo, index) => (
          <div className="personale-row" key={`personale${index}`}>
            <div className={`personale-in-plan-row-text`}>
              {`${item.nome} ${item.targa}`}
            </div>
            <div className="personale-in-plan-row-button">
              <button
                className="personale-plan-button"
                onClick={(e) => {
                  e.stopPropagation(); // Impedisce la propagazione dell'evento
                  onDeleteMezzo(rdlPlan.id, item.id);
                }}
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
