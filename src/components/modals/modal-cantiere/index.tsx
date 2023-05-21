import React, { useState } from "react";
import "./modalCantiere.css";
import PersonaleCantiere from "./personale-cantiere";

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

const Mezzi = () => {
  return <div>Contenuto della tab Mezzi</div>;
};


const Materiali = () => {
  return <div>Contenuto della tab Materiali</div>;
};

interface ModalCantiereProps {
  onClose: () => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Personale");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleConfirm = () => {};

  return (
    <div className={`modal open`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tabs">
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
          <Tab label="Amministrazione" activeTab={activeTab} onClick={handleTabClick} />

          <Tab label="SAL" activeTab={activeTab} onClick={handleTabClick} />
          <Tab
            label="Riepilogo"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        </div>

        <div className="tab-content">
          {activeTab === "Mezzi" && <Mezzi />}
          {activeTab === "Personale" && <PersonaleCantiere />}
          {activeTab === "materiali" && <Materiali />}
        </div>
        <div className="cantiere-modal-bottom-bar">
          <button className="cantiere-btn-cancel" onClick={onClose}>
            Annulla
          </button>
          <button className="cantiere-btn-confirm" onClick={handleConfirm}>
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCantiere;
