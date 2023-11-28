import React, { useState } from "react";
import "./modal-rdl-cantiere.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ClienteFornitore } from "../../../reducers/clientiFornitori";

interface MaterialiCantiereProps {
  fornitori: ClienteFornitore[];
}

const MaterialiCantiere: React.FC<MaterialiCantiereProps> = (
  props: MaterialiCantiereProps
) => {
  const { fornitori } = props;

  const [materiali, setMateriali] = useState<string[]>([]);

  const handleAddMateriale = () => {
    setMateriali([...materiali, "item"]);
  };

  console.log("materiali", materiali);

  return (
    <div className="cantiere-grouped">
      <div className="materiale-in-cantiere">
        <div className="toolbar-mezzi">
          <Button
            className="button"
            variant="outlined"
            onClick={handleAddMateriale}
          >
            <FontAwesomeIcon className="icon" icon={faPlus} />
            Aggiungi bolla
          </Button>
        </div>

        {materiali.map((item: any, index) => (
          <>
            <div
              className={`materiale-in-cantiere-row`}
              key={`personale${index}`}
            >
              <Box sx={{ "& > :not(style)": { m: 1 }, display: "flex" }}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    Fornitore
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={idCommittente}
                    label="Mansione"
                    // onChange={(e) => setIdCommittente(e.target.value)}
                  >
                    {fornitori?.map((item) => (
                      <MenuItem value={item._id}>{item.nome}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>

                <TextField
                  type="text"
                  // value={luogo}
                  // onChange={(e) => setLuogo(e.target.value)}
                  label={"Bolla"}
                  required
                />
                </FormControl>

              </Box>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MaterialiCantiere;
