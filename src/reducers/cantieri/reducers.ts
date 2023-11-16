import { createReducer } from "@reduxjs/toolkit";
import { CantieriReducerType } from "./types";
import { createCantiere, getCantieri, updateCantiere } from "./actions";

const initialState: CantieriReducerType = {
  cantieriList: [],
  form: {
    id: "",
    committente: "",
    luogo: "",
    oggettoLavori: "",
    impresa: "",
    preventivo: 0,
    durataGG: 0,
  },
};

export const cantieriReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createCantiere.fulfilled, (state, action) => {
      state.cantieriList.push(action.payload);
    })
    .addCase(createCantiere.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(updateCantiere.fulfilled, (state, action) => {
      state.cantieriList = state.cantieriList.map((cantiere) =>
      cantiere._id === action.payload._id ? action.payload : cantiere
      );
    })
    .addCase(updateCantiere.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(getCantieri.fulfilled, (state, action) => {
      state.cantieriList = action.payload;
    })
    .addCase(getCantieri.pending, (state) => {
      state.cantieriList = initialState.cantieriList;
    });
});
