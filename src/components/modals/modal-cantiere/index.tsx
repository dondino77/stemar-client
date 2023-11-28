import React, { useState } from "react";
import "./modal-cantiere.css";
import { Cantiere } from "../../../reducers/cantieri/types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { ClienteFornitore } from "../../../reducers/clientiFornitori";
import { InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";

interface TabProps {
  label: string;
  activeTab: string;
  onClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  return (
    <div
      className={`tab-cantieri ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

interface ModalCantiereProps {
  cantiere?: Cantiere;
  clienti?: ClienteFornitore[];
  onClose: () => void;
  onSalva: (cantiere: Cantiere) => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({
  onClose,
  onSalva,
  cantiere,
  clienti,
}) => {
  const [idCommittente, setIdCommittente] = useState(
    (cantiere?.idCommittente as ClienteFornitore)?._id || ""
  );
  const [luogo, setLuogo] = useState(cantiere?.luogo || "");
  const [oggettoLavori, setOggettoLavori] = useState(
    cantiere?.oggettoLavori || ""
  );
  const [impresa, setImpresa] = useState(cantiere?.impresa || "");
  const [preventivo, setPreventivo] = useState(cantiere?.preventivo || 0);
  const [durataGG, setDurataGG] = useState(cantiere?.durataGG || 0);
  const [activeTab, setActiveTab] = useState("Dettaglio");

  const handleConfirm = () => {
    onSalva({
      id: cantiere?._id || "",
      idCommittente,
      luogo,
      oggettoLavori,
      impresa,
      preventivo,
      durataGG,
      error: false,
    });
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="cantiere-modal">
      <div className="cantiere-modal-content">
        <div className="cantiere-modal-body">
          <Typography variant="h4" gutterBottom>
            Gestione Cantiere
          </Typography>

          <div className="tabs-cantieri">
            <Tab
              label="Dettaglio"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
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
          {activeTab === "Dettaglio" && (
            <>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label">
                  Committente
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={idCommittente}
                  label="Mansione"
                  onChange={(e) => setIdCommittente(e.target.value)}
                >
                  {clienti?.map((item) => (
                    <MenuItem value={item._id}>{item.nome}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  type="text"
                  value={luogo}
                  onChange={(e) => setLuogo(e.target.value)}
                  label={"Luogo"}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  type="text"
                  value={oggettoLavori}
                  onChange={(e) => setOggettoLavori(e.target.value)}
                  label={"Oggetto lavori"}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  type="text"
                  value={impresa}
                  onChange={(e) => setImpresa(e.target.value)}
                  label={"Impresa"}
                />
              </FormControl>
              <Box sx={{ "& > :not(style)": { m: 1 }, display: "flex" }}>
                <TextField
                  type="number"
                  value={preventivo}
                  onChange={(e) => setPreventivo(parseFloat(e.target.value))}
                  id="filled-start-adornment"
                  label={"Preventivo"}
                  inputProps={{
                    min: 0,
                    step: 100,
                    pattern: "[0-9]+([.][0-9]+)?",
                    startAdornment: (
                      <InputAdornment position="start">€</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="number"
                  value={durataGG}
                  onChange={(e) => setDurataGG(parseFloat(e.target.value))}
                  label={"Durata GG"}
                  inputProps={{
                    min: 0,
                    step: 1,
                    pattern: "[0-9]+([.][0-9]+)?",
                  }}
                />
              </Box>
            </>
          )}
        </div>
        <div className="cantiere-modal-bottom-bar">
          <Button onClick={onClose} variant="outlined">
            Annulla
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={
              idCommittente === "" || luogo === "" || oggettoLavori === ""
            }
            variant="contained"
          >
            Conferma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalCantiere;
