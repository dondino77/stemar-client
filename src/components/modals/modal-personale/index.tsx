import React, { useState } from "react";
import "./modal-personale.css";
import { Persona } from "../../../reducers/personale/types";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import itLocale from "date-fns/locale/it";
import { format } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface ModalPersonaleProps {
  persona?: Persona;
  onClose: () => void;
  onSalva: (persona: Persona) => void;
}

const ModalPersonale: React.FC<ModalPersonaleProps> = ({
  onClose,
  onSalva,
  persona,
}) => {
  const [nome, setNome] = useState(persona?.nome || "");
  const [cognome, setCognome] = useState(persona?.cognome || "");
  const [dataNascita, setDataNascita] = useState(persona?.dataNascita || "");
  const [coefficiente, setCoefficiente] = useState(persona?.coefficiente || 0);
  const [mansione, setMansione] = useState<{ id: number; value: string }>({
    id: persona?.idMansione || 0,
    value: persona?.mansione || "Intonacatore/Pittore",
  });
  const [manovale, setManovale] = useState(persona?.manovale || false);

  const handleConfirm = () => {
    onSalva({
      id: persona?._id || "",
      nome,
      cognome,
      dataNascita,
      coefficiente,
      idMansione: mansione.id,
      mansione: mansione.value,
      manovale,
    });
  };

  return (
    <div className="personal-modal">
      <div className="personal-modal-content">
        <Typography variant="h4" gutterBottom>
          Gestione Personale
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
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            label={"Cognomeome"}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider
            adapterLocale={itLocale}
            dateAdapter={AdapterDateFns}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Data di nascita"
                value={new Date(dataNascita || "")}
                onChange={(newValue: any) =>
                  setDataNascita(
                    format(newValue, "yyyy-MM-dd", { locale: itLocale })
                  )
                }
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            type="number"
            value={coefficiente}
            onChange={(e) => setCoefficiente(parseFloat(e.target.value))}
            label={"Coefficiente"}
            inputProps={{
              min: 0,
              step: 1,
              pattern: "[0-9]+([.][0-9]+)?",
            }}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            type="number"
            value={coefficiente}
            onChange={(e) => setCoefficiente(parseFloat(e.target.value))}
            label={"Coefficiente"}
            inputProps={{
              min: 0,
              step: 1,
              pattern: "[0-9]+([.][0-9]+)?",
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label">Mansione</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={JSON.stringify(mansione)}
            label="Mansione"
            onChange={(e) =>
              setMansione({
                id: JSON.parse(e.target.value).id,
                value: JSON.parse(e.target.value).value,
              })
            }
          >
            <MenuItem
              value={JSON.stringify({ id: 0, value: "Intonacatore/Pittore" })}
            >
              Intonacatore/Pittore
            </MenuItem>
            <MenuItem value={JSON.stringify({ id: 1, value: "Piastrellista" })}>
              Piastrellista
            </MenuItem>
            <MenuItem
              value={JSON.stringify({ id: 2, value: "Carpentiere/Muratore" })}
            >
              Carpentiere/Muratore
            </MenuItem>
            <MenuItem value={JSON.stringify({ id: 3, value: "Idraulico" })}>
              Idraulico
            </MenuItem>
            <MenuItem value={JSON.stringify({ id: 4, value: "Elettricista" })}>
              Elettricista
            </MenuItem>
            <MenuItem
              value={JSON.stringify({ id: 5, value: "Autista/Escavatorista" })}
            >
              Autista/Escavatorista
            </MenuItem>
            <MenuItem value={JSON.stringify({ id: 6, value: "Magazziniere" })}>
              Magazziniere
            </MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          sx={{ m: 1 }}
          label="Manovale"
          control={
            <Checkbox
              checked={manovale}
              onChange={(e) => setManovale(e.target.checked)}
            />
          }
        />

        <div className="personal-modal-bottom-bar">
          <Button
            onClick={onClose}
            variant="outlined"
          >
            Annulla
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={nome === "" || cognome === "" || coefficiente < 1}
            variant="contained"
          >
            Conferma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonale;
