import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cantiere, CantieriState } from "./types";

const initialState: CantieriState = {
  cantieri: [{
    id: '1',
    committente: 'Committente 1',
    luogo: 'Luogo 1',
    oggettoLavori: 'Oggetto lavori 1',
    impresa: 'Impresa 1',
    preventivo: 123,
    durataGG: 12,
  }, 
  {
    id: '2',
    committente: 'Committente 2',
    luogo: 'Luogo 2',
    oggettoLavori: 'Oggetto lavori 2',
    impresa: 'Impresa 2',
    preventivo: 123,
    durataGG: 12,
  },
  {
    id: '3',
    committente: 'Committente 3',
    luogo: 'Luogo 3',
    oggettoLavori: 'Oggetto lavori 3',
    impresa: 'Impresa 3',
    preventivo: 123,
    durataGG: 12,
  },
  {
    id: '4',
    committente: 'Committente 4',
    luogo: 'Luogo 4',
    oggettoLavori: 'Oggetto lavori 4',
    impresa: 'Impresa 4',
    preventivo: 123,
    durataGG: 12,
  }],
  form: undefined
};

const cantieriReducer = createSlice({
  name: "cantieri",
  initialState,
  reducers: {
    setCantieri(state, action: PayloadAction<Cantiere[]>) {
      state.cantieri = action.payload;
    },
    addCantiere(state, action: PayloadAction<Cantiere>) {
      state.cantieri.push(action.payload);
    },
    // removeCantiere(state, action: PayloadAction<number>) {
    //   state.cantieri = state.cantieri.filter(
    //     (cantiere) => cantiere.id !== action.payload
    //   );
    // },
    // altre azioni per la gestione dei cantieri
  },
});

export const { setCantieri, addCantiere } =
  cantieriReducer.actions;

export default cantieriReducer.reducer;
