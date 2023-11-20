import React, { useState } from "react";
import "./modal-rdl-cantiere.css";
import PersonaleCantiere from "./personale-cantiere";
import MezziCantiere from "./mezzi-cantiere";
import Assenti from "./assenti";
import { RDLPlan } from "../../../reducers/plan";
import { Persona } from "../../../reducers/personale";
import usePlanHook from "../../../screens/Plan/usePlanHook";

interface TabProps {
  label: string;
  activeTab: string;
  onClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

const Materiali = () => {
  return <div>Contenuto della tab Materiali</div>;
};

interface ModalRDLCantiereProps {
  onClose: () => void;
  rdlPlan: RDLPlan | undefined;
  assenti: Persona[] | undefined;
  onConfirm: (personale: any, mezzi: any) => void;
}

const ModalRDLCantiere: React.FC<ModalRDLCantiereProps> = ({
  onClose,
  rdlPlan,
  assenti,
  onConfirm
}) => {
  const [activeTab, setActiveTab] = useState("Personale");
  const { personale } = usePlanHook();
  const [mezziInCantiere, setMezziInCantiere] = useState<any[]>([]);
  const [personaleInCantiere, setPersonaleInCantiere] = useState<any>([]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const personaleTmp = personale?.filter((item1: Persona) =>
    !assenti?.some((item2: Persona) => item2.id === item1.id)
  );

  const handleConfirm = () => {
    onConfirm(personaleInCantiere, mezziInCantiere)
  };

  return (
    <div className={`modal open`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tabs">
          <Tab label="Assenze" activeTab={activeTab} onClick={handleTabClick} />
          <Tab
            label="Personale"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <Tab label="Mezzi" activeTab={activeTab} onClick={handleTabClick} />

          <Tab
            label="Materiali"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <Tab
            label="Amministrazione"
            activeTab={activeTab}
            onClick={handleTabClick}
          />

          <Tab label="SAL" activeTab={activeTab} onClick={handleTabClick} />
          <Tab
            label="Riepilogo"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        </div>

        <div className="tab-content">
          {activeTab === "Assenze" && <Assenti assenti={assenti || []} />}
          {activeTab === "Mezzi" && (
            <MezziCantiere mezziIn={rdlPlan?.mezzi || []} mezziInCantiere={mezziInCantiere} setMezziInCantiere={setMezziInCantiere} />
          )}
          {activeTab === "Personale" && (
            <PersonaleCantiere
              personale={personaleTmp || []}
              personaleIn={rdlPlan?.personale || []}
              personaleInCantiere={personaleInCantiere}
              setPersonaleInCantiere={setPersonaleInCantiere}
            />
          )}
          {activeTab === "materiali" && <Materiali />}
        </div>
        <div className="cantiere-rdl-modal-bottom-bar">
          <button className="cantiere-rdl-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="cantiere-rdl-btn-confirm" onClick={handleConfirm}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRDLCantiere;
