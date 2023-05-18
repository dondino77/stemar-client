import React, { useState } from "react";
import "./toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faBell } from "@fortawesome/free-solid-svg-icons";

interface ToolbarProps {
  onLogout: () => void;
  onSelectScreen: (txt: "cantieri" | "mezzi" | "personale") => void;
}

const Toolbar: React.FC<ToolbarProps> = (iProps: ToolbarProps) => {
  const { onLogout, onSelectScreen } = iProps;
  
  const [screenSelected, setScreenSelected] = useState<
    "cantieri" | "mezzi" | "personale"
  >("cantieri");

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

  const handleNotificheClick = () => {
    // Logica da eseguire al clic sul pulsante "Notifiche"
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className={screenSelected === 'cantieri' ? 'selected' : ''} onClick={handleCantieriClick}>Cantieri</button>
        <button className={screenSelected === 'mezzi' ? 'selected' : ''} onClick={handleMezziClick}>Mezzi</button>
        <button className={screenSelected === 'personale' ? 'selected' : ''} onClick={handlePersonaleClick}>Personale</button>
      </div>
      <div className="toolbar-right">
        <button onClick={handleNotificheClick}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
