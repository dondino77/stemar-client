import React, { useState } from "react";
import Toolbar from "../../components/toolbar";
import "./home.css";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/auth";
import CantieriScreen from "../CantieriScreen";
import MezziScreen from "../MezziScreen";
import PersonaleScreen from "../PersonaleScreen";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const [screenSelected, setScreenSelected] = useState<
    "cantieri" | "mezzi" | "personale" | "amministrazione" | "gare"
  >("cantieri");


  const handleSelectScreen = (txt: "cantieri" | "mezzi" | "personale" | "amministrazione" | "gare") => {
    setScreenSelected(txt);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Toolbar onLogout={handleLogout} onSelectScreen={handleSelectScreen} />
      <div className="page-container">

        {/* <button onClick={handleOpenModal}>Apri Modale</button> */}
        <div>
          {screenSelected === "cantieri" && <CantieriScreen />}
          {screenSelected === "mezzi" && <MezziScreen />}
          {screenSelected === "personale" && <PersonaleScreen />}
        </div>
      </div>
    </div>
  );
};

export default Home;
