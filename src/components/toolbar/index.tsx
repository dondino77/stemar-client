import React, { useState } from "react";
import "./toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

interface ToolbarProps {
  onLogout: () => void;
  onSelectScreen: (txt: "cantieri" | "mezzi" | "personale" | "amministrazione" | "gare" | "plan") => void;
}

const Toolbar: React.FC<ToolbarProps> = (iProps: ToolbarProps) => {
  const { onLogout, onSelectScreen } = iProps;
  
  const [screenSelected, setScreenSelected] = useState<
    "cantieri" | "mezzi" | "personale" | "amministrazione" | "gare" | "plan"
  >("plan");

  const handlePlanClick = () => {
    setScreenSelected('plan');    
    onSelectScreen("plan");
  };

  const handleCantieriClick = () => {
    setScreenSelected('cantieri');    
    onSelectScreen("cantieri");
  };

  const handleMezziClick = () => {
    setScreenSelected('mezzi');
    onSelectScreen("mezzi");
  };

  const handlePersonaleClick = () => {
    setScreenSelected('personale');
    onSelectScreen("personale");
  };
  const handleAmministrazioneClick = () => {
    setScreenSelected('amministrazione');
    // onSelectScreen("personale");
  };
  const handleGareClick = () => {
    setScreenSelected('gare');
    // onSelectScreen("personale");
  };
  const handleNotificheClick = () => {
    // Logica da eseguire al clic sul pulsante "Notifiche"
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className={screenSelected === 'plan' ? 'selected' : ''} onClick={handlePlanClick}>Plan</button>
        <button className={screenSelected === 'cantieri' ? 'selected' : ''} onClick={handleCantieriClick}>Cantieri</button>
        <button className={screenSelected === 'mezzi' ? 'selected' : ''} onClick={handleMezziClick}>Mezzi</button>
        <button className={screenSelected === 'personale' ? 'selected' : ''} onClick={handlePersonaleClick}>Personale</button>
        <button disabled className={screenSelected === 'amministrazione' ? 'selected' : ''} onClick={handleAmministrazioneClick}>Amministrazione</button>
        <button disabled className={screenSelected === 'gare' ? 'selected' : ''} onClick={handleGareClick}>Gare</button>
      </div>
      <div className="toolbar-right">
        <button onClick={handleNotificheClick}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button onClick={handleLogoutClick}>
        <FontAwesomeIcon icon={faGear} />
        </button>
        <button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
