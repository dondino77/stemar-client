import React, { useEffect, useState } from "react";
import "./modalPlan.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faMinus,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { Persona } from "../../../reducers/personale/types";
import { Cantiere } from "../../../reducers/cantieri/types";
import CardPlan from "../../cards/card-plan";
import { MezziPlan, RDLPlan } from "../../../reducers/plan";
import { v4 as uuidv4 } from "uuid";
import usePlanHook from "../../../screens/Plan/usePlanHook";
import { Mezzo } from "../../../reducers/mezzi";
import Button from "@mui/material/Button";
import { ClienteFornitore } from "../../../reducers/clientiFornitori";

interface ModalRDLCantiereProps {
  onClose: () => void;
}

const ModalPlanCantiere: React.FC<ModalRDLCantiereProps> = ({ onClose }) => {
  const { mezzi, cantieri, personale, form, savePlan, getFormPlan } =
    usePlanHook();

  const [cantieriFiltrati, setCantieriFiltrati] = useState<Cantiere[]>([]);
  const [personalePresente, setPersonalePresente] = useState<Persona[]>([]);

  const [rdlSelect, setRdlSelect] = useState<RDLPlan | undefined>(undefined);

  const [rdlInPlan, setRdlInPlan] = useState<RDLPlan[]>(form?.rdlList || []);
  const [assenze, setAssenze] = useState<Persona[] | undefined>(
    form?.assenze || []
  );
  const [dataPlan, setDataPlan] = useState(form?.data || "");

  const updateCantieriFiltrati = () => {
    const cantieriTmp = cantieri?.filter(
      (item1: Cantiere) =>
        !rdlInPlan.some((item2: RDLPlan) => item2.cantiere.id === item1.id)
    );
    setCantieriFiltrati(cantieriTmp || []);
  };

  const addPlan = (item: Cantiere) => {
    setRdlInPlan([...rdlInPlan, { id: uuidv4(), cantiere: item }]);
  };

  const removePlan = (id: string) => {
    const newArray = rdlInPlan.filter((item: RDLPlan) => item.id !== id);
    setRdlInPlan(newArray);
    setRdlSelect(undefined);
  };

  useEffect(() => {
    // setDataPlan(new Date().toISOString());
  }, []);

  useEffect(() => {
    updateCantieriFiltrati();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rdlInPlan]);

  useEffect(() => {
    form?.rdlList ? setRdlInPlan(form?.rdlList) : setRdlInPlan([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form?.rdlList]);

  useEffect(() => {
    form?.assenze ? setAssenze(form?.assenze) : setAssenze([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form?.assenze]);

  const updatePersonalePresente = () => {
    const personaleTmp = personale?.filter(
      (item1: Persona) =>
        !assenze?.some((item2: Persona) => item2.id === item1.id)
    );
    setPersonalePresente(personaleTmp || []);
  };

  useEffect(() => {
    updatePersonalePresente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assenze]);

  //MEZZI
  const addMezzoInPlan = (item: MezziPlan) => {
    const rdlIndex = rdlInPlan.findIndex((rdl) => rdl.id === rdlSelect?.id);
    if (rdlIndex !== -1) {
      const updatedMezziInRdl = JSON.parse(JSON.stringify(rdlInPlan));
      updatedMezziInRdl[rdlIndex].mezzi = [
        ...(updatedMezziInRdl[rdlIndex].mezzi || []),
        { ...item, ore: 8 },
      ];
      setRdlInPlan(updatedMezziInRdl);
      setRdlSelect(updatedMezziInRdl[rdlIndex]);
    }
  };

  const removeMezzoInPlan = (idRdl: string, idMezzo: string) => {
    const rdlIndex = rdlInPlan.findIndex((rdl) => rdl.id === idRdl);
    if (rdlIndex !== -1) {
      const updatedMezziInRdl = JSON.parse(JSON.stringify(rdlInPlan));
      const mezzoIndex = updatedMezziInRdl[rdlIndex]?.mezzi?.findIndex(
        (mezzo: Mezzo) => mezzo.id === idMezzo
      );
      if (mezzoIndex !== -1) {
        updatedMezziInRdl[rdlIndex].mezzi?.splice(mezzoIndex || 0, 1);
        setRdlInPlan(updatedMezziInRdl);
        setRdlSelect(updatedMezziInRdl[rdlIndex]);
      }
    }
  };

  //PERSONALE
  const addPersonaInPlan = (item: Persona) => {
    const rdlIndex = rdlInPlan.findIndex((rdl) => rdl.id === rdlSelect?.id);
    if (rdlIndex !== -1) {
      const updatedPersonaInRdl = JSON.parse(JSON.stringify(rdlInPlan));
      updatedPersonaInRdl[rdlIndex].personale = [
        ...(updatedPersonaInRdl[rdlIndex].personale || []),
        { ...item, ore: 8 },
      ];
      setRdlInPlan(updatedPersonaInRdl);
      setRdlSelect(updatedPersonaInRdl[rdlIndex]);
    }
  };

  const removePersonaInPlan = (idRdl: string, idPersona: string) => {
    const rdlIndex = rdlInPlan.findIndex((rdl) => rdl.id === idRdl);
    if (rdlIndex !== -1) {
      const updatedPersonaInRdl = JSON.parse(JSON.stringify(rdlInPlan));
      const personaIndex = updatedPersonaInRdl[rdlIndex]?.personale?.findIndex(
        (persona: Persona) => persona.id === idPersona
      );
      if (personaIndex !== -1) {
        updatedPersonaInRdl[rdlIndex].personale?.splice(personaIndex || 0, 1);
        setRdlInPlan(updatedPersonaInRdl);
        setRdlSelect(updatedPersonaInRdl[rdlIndex]);
      }
    }
  };

  //ASSENZE
  const removePersonaAssente = (idPersona: string) => {
    setRdlInPlan((prevRdlInPlan) => {
      return prevRdlInPlan.map((rdl) => {
        const updatedRdl = JSON.parse(JSON.stringify(rdl));

        const personaIndex = updatedRdl?.personale?.findIndex(
          (persona: { id: string }) => persona.id === idPersona
        );

        if (personaIndex !== -1) {
          updatedRdl?.personale?.splice(personaIndex || 0, 1);
        }

        return updatedRdl;
      });
    });
  };

  const addPersonaInPlanAssenze = (personale: Persona) => {
    setAssenze((prevAssenze) => [...(prevAssenze || []), personale]);
    removePersonaAssente(personale.id);
  };

  const removePersonaInPlanAssenze = (idPersona: string) => {
    setAssenze(assenze?.filter((item) => item.id !== idPersona));
  };

  const handleConfirm = () => {
    savePlan({
      rdlList: rdlInPlan,
      assenze: assenze,
      data: dataPlan,
    });
    onClose();
  };

  const getPlanFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataPlan(e.target.value);
    getFormPlan(e.target.value);
  };

  const actionChangeNote = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rdlIndex = rdlInPlan.findIndex((rdl) => rdl.id === rdlSelect?.id);
    if (rdlIndex !== -1) {
      const updateNoteRdl = JSON.parse(JSON.stringify(rdlInPlan));
      updateNoteRdl[rdlIndex].note = event.target.value;
      setRdlInPlan(updateNoteRdl);
      setRdlSelect(updateNoteRdl[rdlIndex]);
    }
  }

  return (
    <div className={`modal open`}>
      <div className="modal-content-plan" onClick={(e) => e.stopPropagation()}>
        <div className="cantiere-plan-modal-group-data">
          <label>
            Data
            <input
              type="date"
              className="cantiere-plan-modal-data"
              value={dataPlan}
              onChange={getPlanFromData}
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
                        {`${
                          (item.idCommittente as ClienteFornitore)?.nome || ""
                        }`}
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
                  {personalePresente?.map((item: Persona, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text griglia-mansione${item.idMansione}`}
                        key={`personale${index}`}
                      >
                        {`${item.nome} ${item.cognome}`}
                      </div>
                      <div
                        className="personale-in-plan-row-button"
                        key={`in_plan${index}`}
                      >
                        <button
                          className={`personale-plan-button`}
                          onClick={() => addPersonaInPlanAssenze(item)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                      {rdlSelect && (
                        <div
                          className="personale-in-plan-row-button"
                          key={`out_plan_personale${index}`}
                        >
                          <button
                            className={`personale-plan-button ${
                              rdlSelect?.personale?.some(
                                (existingPersonale) =>
                                  existingPersonale.id === item.id
                              )
                                ? "disabled"
                                : ""
                            }`}
                            onClick={() => addPersonaInPlan(item)}
                            disabled={rdlSelect?.personale?.some(
                              (existingPersonale) =>
                                existingPersonale.id === item.id
                            )}
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
                  {mezzi?.map((item: Mezzo, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text`}
                        key={`personale${index}`}
                      >
                        {`${item.nome} ${item.targa}`}
                      </div>
                      {rdlSelect && (
                        <div
                          className="personale-in-plan-row-button"
                          key={`out_plan_mezzi${index}`}
                        >
                          <button
                            className={`personale-plan-button ${
                              rdlSelect?.mezzi?.some(
                                (existingMezzo) => existingMezzo.id === item.id
                              )
                                ? "disabled"
                                : ""
                            }`}
                            onClick={() => addMezzoInPlan(item as MezziPlan)}
                            disabled={rdlSelect?.mezzi?.some(
                              (existingMezzo) => existingMezzo.id === item.id
                            )}
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
                  <Typography>Assenze</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {assenze?.map((item: Persona, index) => (
                    <div className="personale-row">
                      <div
                        className={`personale-in-plan-row-text griglia-mansione${item.idMansione}`}
                        key={`personale${index}`}
                      >
                        {`${item.nome} ${item.cognome}`}
                      </div>
                      <div
                        className="personale-in-plan-row-button"
                        key={`out_plan_assenze${index}`}
                      >
                        <button
                          className={`personale-plan-button`}
                          onClick={() => removePersonaInPlanAssenze(item.id)}
                        >
                          <FontAwesomeIcon icon={faRemove} />
                        </button>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div className="accordion-in-plan-grid2">
            {rdlInPlan?.map((item: RDLPlan, index) => (
              <CardPlan
                key={index}
                rdlPlan={item}
                onChangeNote={actionChangeNote}
                onDeletePlan={(id) => removePlan(id)}
                onDeleteMezzo={(idPlan, idMezzo) =>
                  removeMezzoInPlan(idPlan, idMezzo)
                }
                onSelect={(item) => {
                  setRdlSelect(item);
                }}
                selected={rdlSelect?.cantiere?.id === item.cantiere.id}
                onDeletePersonale={(idPlan, idPersona) =>
                  removePersonaInPlan(idPlan, idPersona)
                }
              />
            ))}

          </div>
        </div>

        <div className="cantiere-plan-modal-bottom-bar">
          <Button
            className="cantiere-plan-btn-cancel"
            variant="outlined"
            onClick={onClose}
          >
            Annulla
          </Button>
          <Button
            className="cantiere-plan-btn-confirm"
            onClick={handleConfirm}
            disabled={dataPlan === ""}
            variant="contained"
          >
            Conferma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalPlanCantiere;
