import React, { useState } from "react";
import "./modal-mezzi.css";
import { Mezzo } from "../../../reducers/mezzi/types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import itLocale from "date-fns/locale/it";
import { format } from "date-fns";

interface ModalMezziProps {
  mezzo?: Mezzo;
  onClose: () => void;
  onSalva: (mezzo: Mezzo) => void;
}

const ModalMezzi: React.FC<ModalMezziProps> = ({ onClose, mezzo, onSalva }) => {
  const [nome, setNome] = useState(mezzo?.nome || "");
  const [targa, setTarga] = useState(mezzo?.targa || "");
  const [dataScadenzaAssicurazione, setDataScadenzaAssicurazione] = useState(
    mezzo?.dataScadenzaAssicurazione || undefined
  );
  const [dataScadenzaBollo, setDataScadenzaBollo] = useState(
    mezzo?.dataScadenzaBollo
  );
  const [dataProssimaRevisione, setDataProssimaRevisione] = useState(
    mezzo?.dataProssimaRevisione
  );
  const [costoOrario, setCostoOrario] = useState(mezzo?.costoOrario || 0);

  const handleConfirm = () => {
    onSalva({
      id: mezzo?._id || "",
      nome,
      targa,
      dataScadenzaAssicurazione,
      dataScadenzaBollo,
      dataProssimaRevisione,
      costoOrario,
    });
  };

  return (
    <div className="vehicle-modal">
      <div className="vehicle-modal-content">
        <Typography variant="h4" gutterBottom>
          Gestione Mezzi
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
            value={targa}
            onChange={(e) => setTarga(e.target.value)}
            label={"Targa"}
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
                label="Scadenza assicurazione"
                value={new Date(dataScadenzaAssicurazione || "")}
                onChange={(newValue: any) =>
                  setDataScadenzaAssicurazione(
                    format(newValue, "yyyy-MM-dd", { locale: itLocale })
                  )
                }
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider
            adapterLocale={itLocale}
            dateAdapter={AdapterDateFns}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Scadenza bollo"
                value={new Date(dataScadenzaBollo || "")}
                onChange={(newValue: any) =>
                  setDataScadenzaBollo(
                    format(newValue, "yyyy-MM-dd", { locale: itLocale })
                  )
                }
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider
            adapterLocale={itLocale}
            dateAdapter={AdapterDateFns}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Data prossima revisione"
                value={new Date(dataProssimaRevisione || "")}
                onChange={(newValue: any) =>
                  setDataProssimaRevisione(
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
            value={costoOrario}
            onChange={(e) => setCostoOrario(parseFloat(e.target.value))}
            label={"Costo Orario"}
            inputProps={{
              min: 0,
              step: 1,
              pattern: "[0-9]+([.][0-9]+)?",
            }}
          />
        </FormControl>
        <div className="vehicle-modal-bottom-bar">
          <Button onClick={onClose} variant="outlined">
            Annulla
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={nome === "" || targa === "" || costoOrario < 1}
            variant="contained"
          >
            Conferma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalMezzi;
