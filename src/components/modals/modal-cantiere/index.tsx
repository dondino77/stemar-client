import React, { useState } from "react";
import "./modalCantiere.css";
import ComboBox from "../../combo-box";

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

const Personale = () => {
  return <div>Contenuto della tab Personale</div>;
};

const Materiali = () => {
  return <div>Contenuto della tab Materiali</div>;
};

interface ModalCantiereProps {
  onClose: () => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("mezzi");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={`modal open`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tabs">
          <Tab label="mezzi" activeTab={activeTab} onClick={handleTabClick} />
          <Tab
            label="personale"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <Tab
            label="materiali"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        </div>
        <div className="tab-content">
          {activeTab === "mezzi" && <Mezzi />}
          {activeTab === "personale" && <Personale />}
          {activeTab === "materiali" && <Materiali />}
        </div>
        <button onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
};

export default ModalCantiere;
