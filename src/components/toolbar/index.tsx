import React, { useState } from "react";
import "./toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ToolbarProps {
  onLogout: () => void;
  onSelectScreen: (
    txt:
      | "cantieri"
      | "mezzi"
      | "personale"
      | "amministrazione"
      | "gare"
      | "plan"
      | "clientiFornitori"
  ) => void;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Toolbar: React.FC<ToolbarProps> = (iProps: ToolbarProps) => {
  const { onLogout, onSelectScreen } = iProps;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [screenSelected, setScreenSelected] = useState<
    | "cantieri"
    | "mezzi"
    | "personale"
    | "amministrazione"
    | "gare"
    | "plan"
    | "clientiFornitori"
  >("plan");

  const handlePlanClick = () => {
    setScreenSelected("plan");
    onSelectScreen("plan");
  };

  const handleCantieriClick = () => {
    setScreenSelected("cantieri");
    onSelectScreen("cantieri");
    handleClose();
  };

  const handleMezziClick = () => {
    setScreenSelected("mezzi");
    onSelectScreen("mezzi");
    handleClose();
  };

  const handlePersonaleClick = () => {
    setScreenSelected("personale");
    onSelectScreen("personale");
    handleClose();
  };
  const handleClientiFornitoriClick = () => {
    setScreenSelected("clientiFornitori");
    onSelectScreen("clientiFornitori");
    handleClose();
  };

  const handleAmministrazioneClick = () => {
    setScreenSelected("amministrazione");
    onSelectScreen("amministrazione");
  };
  const handleGareClick = () => {
    setScreenSelected("gare");
    // onSelectScreen("personale");
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
        <Button
          className={screenSelected === "plan" ? "selected" : ""}
          onClick={handlePlanClick}
        >
          Plan
        </Button>
        <Button
          className={screenSelected === "cantieri" ? "selected" : ""}
          onClick={handleCantieriClick}
        >
          Cantieri
        </Button>
        {/* <Button
          className={screenSelected === "mezzi" ? "selected" : ""}
          onClick={handleMezziClick}
        >
          Mezzi
        </Button> */}
        {/* <Button
          className={screenSelected === "personale" ? "selected" : ""}
          onClick={handlePersonaleClick}
        >
          Personale
        </Button> */}
        <Button
          className={screenSelected === "amministrazione" ? "selected" : ""}
          onClick={handleAmministrazioneClick}
        >
          Amministrazione
        </Button>
        <Button
          disabled
          className={screenSelected === "gare" ? "selected" : ""}
          onClick={handleGareClick}
        >
          Gare
        </Button>

        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          ANAGRAFICHE
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {/* <MenuItem
            disableRipple
            onClick={handleCantieriClick}
          >
            CANTIERI
          </MenuItem> */}
          <MenuItem
            onClick={handleMezziClick}
            disableRipple
          >
            MEZZI
          </MenuItem>
          <MenuItem
            onClick={handlePersonaleClick}
            disableRipple
          >
            PERSONALE
          </MenuItem>
          <MenuItem onClick={handleClientiFornitoriClick} disableRipple>
            CLIENTI/FORNITORI
          </MenuItem>
        </StyledMenu>
      </div>

      <div className="toolbar-right">
        <Button onClick={handleNotificheClick}>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faGear} />
        </Button>
        <Button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
