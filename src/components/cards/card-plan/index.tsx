import React, { useState } from "react";
import "./cardPlan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove, faTable } from "@fortawesome/free-solid-svg-icons";
import { PersonalePlan, RDLPlan } from "../../../reducers/plan";
import { Mezzo } from "../../../reducers/mezzi";
import { Button } from "@mui/material";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseInput
      slots={{
        root: RootDiv,
        input: "input",
        textarea: TextareaElement,
      }}
      {...props}
      ref={ref}
    />
  );
});
const RootDiv = styled("div")`
  display: flex;
  max-width: 100%;
`;
const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
const TextareaElement = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(
  ({ theme }) => `
  width: 100%; // Imposta la larghezza fissa
  resize: none; // Disabilita il resize
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.975rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px 8px 0 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: .2px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[700] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

interface CardPlanProps {
  rdlPlan: RDLPlan;
  onDeletePlan: (id: string) => void;
  onDeleteMezzo: (idPlan: string, idMezzo: string) => void;
  onDeletePersonale: (idPlan: string, idPersonale: string) => void;
  onSelect: (item: any | undefined) => void;
  onChangeNote: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  selected: boolean;
}

const CardPlan: React.FC<CardPlanProps> = ({
  rdlPlan,
  onDeletePlan,
  onDeleteMezzo,
  onDeletePersonale,
  onSelect,
  onChangeNote,
  selected,
}) => {
  const [showHideNote, setShowHideNote] = useState(false);
  const actionDeletePlan = () => {
    onSelect(selected ? undefined : rdlPlan);
    onDeletePlan(rdlPlan.id);
  };

  const actionSelectPlan = () => {
    onSelect(selected ? undefined : rdlPlan);
  };

  const actionNote = () => {
    setShowHideNote(!showHideNote);
  };

  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => actionSelectPlan()}
    >
      <h2 className="card-title">{`${rdlPlan.cantiere?.committente || ""}`}</h2>
      {!showHideNote && (
        <>
          <div className="card-content">
            {(rdlPlan?.personale?.length || 0) > 0 && <h4>Personale</h4>}

            {rdlPlan.personale?.map((item: PersonalePlan, index) => (
              <div className="personale-row">
                <div
                  className={`personale-in-plan-row-text`}
                  key={`personale${index}`}
                >
                  {`${item.nome} ${item.cognome} `}
                </div>
                <div
                  className="personale-in-plan-row-button"
                  key={`in_plan_personale${index}`}
                >
                  <button
                    className="personale-plan-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Impedisce la propagazione dell'evento
                      onDeletePersonale(rdlPlan.id, item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faRemove} />
                  </button>
                </div>
              </div>
            ))}

            {(rdlPlan?.mezzi?.length || 0) > 0 && <h4>Mezzi</h4>}

            {rdlPlan.mezzi?.map((item: Mezzo, index) => (
              <div className="personale-row" key={`personale${index}`}>
                <div className={`personale-in-plan-row-text`}>
                  {`${item.nome} ${item.targa}`}
                </div>
                <div className="personale-in-plan-row-button">
                  <button
                    className="personale-plan-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Impedisce la propagazione dell'evento
                      onDeleteMezzo(rdlPlan.id, item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faRemove} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showHideNote && (
        <>
            <Input
              aria-label="Demo input"
              multiline
              placeholder="Scrivi qui le note…"
              onChange={onChangeNote}
              onClick={(e) => {
                e.stopPropagation();
              }}
              value={rdlPlan.note}
            />
        </>
      )}

      <div className="card-bottom-bar">
        <div className="left-buttons">
          <Button
            variant="outlined"
            onClick={(e) => {
              selected && e.stopPropagation(); // Impedisce la propagazione dell'evento
              actionNote();
            }}
          >
            <FontAwesomeIcon icon={showHideNote ? faTable : faEdit} />
          </Button>
        </div>
        <div className="right-buttons">
          <Button variant="outlined">
            <FontAwesomeIcon
              icon={faRemove}
              onClick={() => actionDeletePlan()}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
