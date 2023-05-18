import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cantiere, CantieriState } from "./types";

const initialState: CantieriState = {
  cantieri: [
    { id: 1, nome: "nome1", indirizzo: "indirizzo1", error: false },
    { id: 2, nome: "nome2", indirizzo: "indirizzo2", error: true },
    { id: 3, nome: "nome3", indirizzo: "indirizzo3", error: false },
  ],
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
    removeCantiere(state, action: PayloadAction<number>) {
      state.cantieri = state.cantieri.filter(
        (cantiere) => cantiere.id !== action.payload
      );
    },
    // altre azioni per la gestione dei cantieri
  },
});

export const { setCantieri, addCantiere, removeCantiere } =
  cantieriReducer.actions;

export default cantieriReducer.reducer;
