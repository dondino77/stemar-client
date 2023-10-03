import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanState } from "./types";

const initialState: PlanState = {
  plans: [],
};

const planReducer = createSlice({
  name: "plan",
  initialState,
  reducers: {
    // setCantieri(state, action: PayloadAction<Cantiere[]>) {
    //   state.cantieri = action.payload;
    // },
    // addCantiere(state, action: PayloadAction<Cantiere>) {
    //   state.cantieri.push(action.payload);
    // },
    // removeCantiere(state, action: PayloadAction<number>) {
    //   state.cantieri = state.cantieri.filter(
    //     (cantiere) => cantiere.id !== action.payload
    //   );
    // },
    // altre azioni per la gestione dei cantieri
  },
});

// export const { setCantieri, addCantiere } =
// planReducer.actions;

export default planReducer.reducer;
