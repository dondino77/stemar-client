import React, { useState } from "react";
import "./modal-cantiere.css";
import { Cantiere } from "../../../reducers/cantieri/types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

interface ModalCantiereProps {
  cantiere?: Cantiere;
  onClose: () => void;
  onSalva: (cantiere: Cantiere) => void;
}

const ModalCantiere: React.FC<ModalCantiereProps> = ({
  onClose,
  onSalva,
  cantiere,
}) => {
  const [committente, setCommittente] = useState(cantiere?.committente || "");
  const [luogo, setLuogo] = useState(cantiere?.luogo || "");
  const [oggettoLavori, setOggettoLavori] = useState(
    cantiere?.oggettoLavori || ""
  );
  const [impresa, setImpresa] = useState(cantiere?.impresa || "");
  const [preventivo, setPreventivo] = useState(cantiere?.preventivo || 0);
  const [durataGG, setDurataGG] = useState(cantiere?.durataGG || 0);

  const handleConfirm = () => {
    onSalva({
      id: cantiere?._id || "",
      committente,
      luogo,
      oggettoLavori,
      impresa,
      preventivo,
      durataGG,
      error: false,
    });
  };

  return (
    <div className="cantiere-modal">
      <div className="cantiere-modal-content">
        <Typography variant="h4" gutterBottom>
          Gestione Cantiere
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="text"
            value={committente}
            onChange={(e) => setCommittente(e.target.value)}
            label={'Committente'}
            required
          />
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
            label={"Preventivo"}
            inputProps={{
              min: 0, 
              step: 100,
              pattern: '[0-9]+([.][0-9]+)?', 
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
              pattern: '[0-9]+([.][0-9]+)?', 
            }}
          />
        </Box>
        <div className="cantiere-modal-bottom-bar">
          <Button
            onClick={onClose}
            variant="outlined"
          >
            Annulla
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={
              committente === "" || luogo === "" || oggettoLavori === ""
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
