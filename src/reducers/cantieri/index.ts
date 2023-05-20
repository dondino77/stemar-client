import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cantiere, CantieriState } from "./types";

const initialState: CantieriState = {
  cantieri: [],
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
