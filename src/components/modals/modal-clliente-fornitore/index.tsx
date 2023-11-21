import React, { useState } from "react";
import "./modal-mezzi.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ClienteFornitore } from "../../../reducers/clientiFornitori";

interface ModalClientiFornitoriProps {
  clienteFornitore?: ClienteFornitore;
  onClose: () => void;
  onSalva: (clienteFornitore: ClienteFornitore) => void;
}

const ModalClientiFornitori: React.FC<ModalClientiFornitoriProps> = ({
  onClose,
  clienteFornitore,
  onSalva,
}) => {
  const [nome, setNome] = useState(clienteFornitore?.nome || "");
  const [indirizzo, setIndirizzo] = useState(clienteFornitore?.indirizzo || "");
  const [partitaIva, setPartitaIVA] = useState(
    clienteFornitore?.partitaIva || ""
  );
  const [codiceFiscale, setCodiceFiscale] = useState(
    clienteFornitore?.codiceFiscale || ""
  );
  const [idTipo, setIdTipo] = useState(clienteFornitore?.idTipo || 0);

  const handleConfirm = () => {
    onSalva({
      id: clienteFornitore?._id || "",
      nome,
      indirizzo,
      partitaIva,
      codiceFiscale,
      idTipo,
    });
  };

  return (
    <div className="vehicle-modal">
      <div className="vehicle-modal-content">
        <Typography variant="h4" gutterBottom>
          Gestione Clienti/Fornitori
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            label={"Nome"}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="text"
            value={indirizzo}
            onChange={(e) => setIndirizzo(e.target.value)}
            label={"Indirizzo"}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="text"
            value={partitaIva}
            onChange={(e) => setPartitaIVA(e.target.value)}
            label={"Partita IVA"}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="text"
            value={codiceFiscale}
            onChange={(e) => setCodiceFiscale(e.target.value)}
            label={"Codice fiscale"}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={idTipo}
            label="Tipo"
            onChange={(e) => setIdTipo(e.target.value as number)}
          >
            <MenuItem value={0}>Cliente</MenuItem>
            <MenuItem value={1}>Fornitore</MenuItem>
            <MenuItem value={2}>Cliente/Fornitore</MenuItem>
          </Select>
        </FormControl>

        <div className="vehicle-modal-bottom-bar">
          <Button onClick={onClose} variant="outlined">
            Annulla
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={nome === "" || indirizzo === "" || partitaIva === ""}
            variant="contained"
          >
            Conferma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalClientiFornitori;
