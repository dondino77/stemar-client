import React, { useEffect, useState } from "react";
import "./modalPlan.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mezzo } from "../../../reducers/mezzi/types";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Persona } from "../../../reducers/personale/types";
import { Cantiere } from "../../../reducers/cantieri/types";
import {
  CantieriPlan,
  MezziPlan,
  PersonalePlan,
} from "../../../reducers/plan/types";
import CardPlan from "../../cards/card-plan";

interface ModalRDLCantiereProps {
  onClose: () => void;
}

const ModalPlanCantiere: React.FC<ModalRDLCantiereProps> = ({ onClose }) => {
  //CANTIERI
  const cantieri = useSelector((state: RootState) => state.cantieri.cantieri);
  const [cantieriFiltrati, setCantieriFiltrati] = useState<Cantiere[]>([]);
  const [cantieriInPlan, setCantieriInPlan] = useState<CantieriPlan[]>([]);
  const [planSelect, setPlanSelect] = useState<CantieriPlan | undefined>(
    undefined
  );

  const updateCantieriFiltrati = () => {
    const cantieriTmp = cantieri.filter(
      (item1: Cantiere) =>
        !cantieriInPlan.some(
          (item2: CantieriPlan) => item2.cantiere.id === item1.id
        )
    );
    setCantieriFiltrati(cantieriTmp);
  };

  const addPlan = (item: Cantiere) => {
    setCantieriInPlan([...cantieriInPlan, { cantiere: item }]);
  };

  const removePlan = (id: string) => {
    const newArray = cantieriInPlan.filter(
      (item: CantieriPlan) => item.cantiere.id !== id
    );
    setCantieriInPlan(newArray);
  };

  useEffect(() => {
    updateCantieriFiltrati();
  }, [cantieriInPlan]);

  //MEZZI
  const mezzi = useSelector((state: RootState) => state.mezzi.mezziList);

  const addMezzoInPlan = (item: MezziPlan) => {
    const cantiereIndex = cantieriInPlan.findIndex(
      (cantiere) => cantiere.cantiere.id === planSelect?.cantiere.id
    );

    if (cantiereIndex !== -1) {
      const updatedCantieriInCantiere = [...cantieriInPlan];
      updatedCantieriInCantiere[cantiereIndex].mezzi = [
        ...(updatedCantieriInCantiere[cantiereIndex].mezzi || []),
        item,
      ];
      setCantieriInPlan(updatedCantieriInCantiere);
    }
  };

  const removeMezzoInPlan = (idPlan: string, idMezzo: string) => {
    const cantiereIndex = cantieriInPlan.findIndex(
      (cantiere) => cantiere.cantiere.id === idPlan
    );

    if (cantiereIndex !== -1) {
      const updatedCantieriInCantiere = [...cantieriInPlan];
      const mezzoIndex = updatedCantieriInCantiere[
        cantiereIndex
      ]?.mezzi?.findIndex((mezzo) => mezzo.id === idMezzo);

      if (mezzoIndex !== -1) {
        updatedCantieriInCantiere[cantiereIndex].mezzi?.splice(
          mezzoIndex || 0,
          1
        );
        setCantieriInPlan(updatedCantieriInCantiere);
      }
    }
  };

  //PERSONALE
  const personale = useSelector(
    (state: RootState) => state.personale.personaleList
  );

  const convertPersonaToPersonalePlan = (persona: Persona): PersonalePlan => {
    // Esegui la conversione qui
    const personalePlan: PersonalePlan = {
      id: persona.id,
      idPersonale: persona.id, // Supponiamo che ci sia una proprietà 'id' in 'Persona'
      personale: `${persona.nome} ${persona.cognome}`, // Supponiamo che ci sia una proprietà 'nome' in 'Persona'
      ore: 0, // Inserisci un valore predefinito per 'ore' o usa il valore corretto
    };
  
    return personalePlan;
  };

  const addPersonaInPlan = (item: Persona) => {
    const cantiereIndex = cantieriInPlan.findIndex(
      (cantiere) => cantiere.cantiere.id === planSelect?.cantiere.id
    );

    if (cantiereIndex !== -1) {
      const updatedCantieriInCantiere = [...cantieriInPlan];
      const personalePlan = convertPersonaToPersonalePlan(item);
      updatedCantieriInCantiere[cantiereIndex].personale = [
        ...(updatedCantieriInCantiere[cantiereIndex].personale || []),
        personalePlan,
      ];
      setCantieriInPlan(updatedCantieriInCantiere);
    }
  };

  const removePersonaInPlan = (idPlan: string, idPersona: string) => {

    const cantiereIndex = cantieriInPlan.findIndex(
      (cantiere) => cantiere.cantiere.id === idPlan
    );

    if (cantiereIndex !== -1) {
      const updatedCantieriInCantiere = [...cantieriInPlan];
      const personaIndex = updatedCantieriInCantiere[
        cantiereIndex
      ]?.personale?.findIndex((persona) => persona.id === idPersona);
      console.log('Plan', personaIndex);

      if (personaIndex !== -1) {
        updatedCantieriInCantiere[cantiereIndex].personale?.splice(
          personaIndex || 0,
          1
        );
        setCantieriInPlan(updatedCantieriInCantiere);
      }
    }
  };

  const handleConfirm = () => {};

  return (
    <div className={`modal open`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cantiere-plan-modal-group-data">
          <label>
            Data
            <input
              type="date"
              className="cantiere-plan-modal-data"
              // value={dataNascita}
              // onChange={(e) => setDataNascita(e.target.value)}
            />
          </label>
        </div>

        <div className="plan-grouped-grid">
          <div className="accordion-in-plan-grid1">
            <div>
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Cantieri</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {cantieriFiltrati?.map((item: Cantiere, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text`}
                        key={`personale${index}`}
                      >
                        {`${item.committente} `}
                      </div>
                      <div
                        className="personale-in-plan-row-button"
                        key={`in_plan${index}`}
                      >
                        <button
                          className="personale-plan-button"
                          onClick={() => addPlan(item)}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Personale</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {personale.map((item: Persona, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text griglia-mansione${item.idMansione}`}
                        key={`personale${index}`}
                      >
                        {`${item.nome} ${item.cognome}`}
                      </div>
                      {planSelect && (
                        <div
                          className="personale-in-plan-row-button"
                          key={`in_plan${index}`}
                        >
                          <button
                            className={`personale-plan-button ${planSelect?.personale?.some((existingPersonale) => existingPersonale.id === item.id) ? 'disabled' : ''}`}
                            onClick={() => addPersonaInPlan(item)}
                            disabled={planSelect?.personale?.some((existingPersonale) => existingPersonale.id === item.id) }
                          >
                            <FontAwesomeIcon icon={faCirclePlus} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Mezzi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {mezzi.map((item: Mezzo, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text`}
                        key={`personale${index}`}
                      >
                        {`${item.nome} ${item.targa}`}
                      </div>
                      {planSelect && (
                        <div
                          className="personale-in-plan-row-button"
                          key={`in_plan${index}`}
                        >
                          <button
                            className={`personale-plan-button ${planSelect?.mezzi?.some((existingMezzo) => existingMezzo.id === item.id) ? 'disabled' : ''}`}
                            onClick={() => addMezzoInPlan(item as MezziPlan)}
                            disabled={planSelect?.mezzi?.some((existingMezzo) => existingMezzo.id === item.id) }
                          >
                            <FontAwesomeIcon icon={faCirclePlus} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="accordion-in-plan-grid2">
            {cantieriInPlan?.map((item: CantieriPlan, index) => (
              <CardPlan
                cantierePlan={item}
                onDeletePlan={(id) => removePlan(id)}
                onDeleteMezzo={(idPlan, idMezzo) =>
                  removeMezzoInPlan(idPlan, idMezzo)
                }
                onSelect={(item) => setPlanSelect(item)}
                selected={planSelect?.cantiere?.id === item.cantiere.id}
                onDeletePersonale={(idPlan, idPersona) =>
                  removePersonaInPlan(idPlan, idPersona)
                }
              />
            ))}
          </div>
        </div>

        <div className="cantiere-plan-modal-bottom-bar">
          <button className="cantiere-plan-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="cantiere-plan-btn-confirm" onClick={handleConfirm}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPlanCantiere;
