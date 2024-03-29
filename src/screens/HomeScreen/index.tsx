import React, { useEffect, useState } from "react";
import Toolbar from "../../components/toolbar";
import "./home.css";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/auth";
import CantieriScreen from "../CantieriScreen";
import MezziScreen from "../MezziScreen";
import PersonaleScreen from "../PersonaleScreen";
import PlanScreen from "../Plan";
import useHomeHook from "./useHookHome";
import ClientiFornitoriScreen from "../ClientiFornitori";
import AmministrazioneFattureScreen from "../Amministrazione-fatture";
import AmministrazioneClientiScreen from "../Amministrazione-clienti";
import AmministrazioneFornitoriScreen from "../Amministrazione-fornitori";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  const { getCantieri, getMezzi, getPersonale, getClientiFornitori } =
    useHomeHook();

  const [screenSelected, setScreenSelected] = useState<
    | "cantieri"
    | "mezzi"
    | "personale"
    | "amministrazione-fatture"
    | "amministrazione-clienti"
    | "amministrazione-fornitori"
    | "gare"
    | "plan"
    | "clientiFornitori"
  >("plan");

  const handleSelectScreen = (
    txt:
      | "cantieri"
      | "mezzi"
      | "personale"
      | "amministrazione-fatture"
      | "amministrazione-clienti"
      | "amministrazione-fornitori"
      | "gare"
      | "plan"
      | "clientiFornitori"
  ) => {
    setScreenSelected(txt);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    getClientiFornitori();
    getPersonale();
    getCantieri();
    getMezzi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Toolbar onLogout={handleLogout} onSelectScreen={handleSelectScreen} />
      <div className="page-container">
        {/* <button onClick={handleOpenModal}>Apri Modale</button> */}
        <div>
          {screenSelected === "plan" && <PlanScreen />}
          {screenSelected === "cantieri" && <CantieriScreen />}
          {screenSelected === "mezzi" && <MezziScreen />}
          {screenSelected === "personale" && <PersonaleScreen />}
          {screenSelected === "clientiFornitori" && <ClientiFornitoriScreen />}
          {screenSelected === "amministrazione-fatture" && <AmministrazioneFattureScreen />}
          {screenSelected === "amministrazione-clienti" && <AmministrazioneClientiScreen />}
          {screenSelected === "amministrazione-fornitori" && <AmministrazioneFornitoriScreen />}
        </div>
      </div>
    </div>
  );
};

export default Home;
