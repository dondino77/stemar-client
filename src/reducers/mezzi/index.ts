import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MezziState, Mezzo } from "./types";

const initialState: MezziState = {
  mezzi: [
    {
      id: "1",
      nome: "Iveco",
      targa: "AA000BB",
      dataScadenzaAssicurazione: "13/08/2023",
      dataScadenzaBollo: "29/09/2023",
      dataProssimaRevisione: "28/09/2023",
      costoKm: 10,
    },
    {
      id: "2",
      nome: "Ducato",
      targa: "AA000BB",
      dataScadenzaAssicurazione: "2023-08-08",
      dataScadenzaBollo: "29/09/2023",
      dataProssimaRevisione: "28/09/2023",
      costoKm: 10,
    },
    {
      id: "3",
      nome: "Fiorino",
      targa: "AA000BB",
      dataScadenzaAssicurazione: "13/08/2023",
      dataScadenzaBollo: "29/09/2023",
      dataProssimaRevisione: "28/09/2023",
      costoKm: 10,
    },
  ],
  form: {
    id: "",
    nome: "",
    targa: "",
    dataScadenzaAssicurazione: "",
    dataScadenzaBollo: "",
    dataProssimaRevisione: "",
    costoKm: 0,
  }
};

const mezziReducer = createSlice({
  name: "mezzi",
  initialState,
  reducers: {
    setMezzi(state, action: PayloadAction<Mezzo[]>) {
      state.mezzi = action.payload;
    },
    addMezzo(state, action: PayloadAction<Mezzo>) {
      state.mezzi.push(action.payload);
    },
    removeMezzo(state, action: PayloadAction<string>) {
      state.mezzi = state.mezzi.filter((mezzo) => mezzo.id !== action.payload);
    },
    // altre azioni per la gestione dei mezzi
  },
});

export const { setMezzi, addMezzo, removeMezzo } = mezziReducer.actions;

export default mezziReducer.reducer;
