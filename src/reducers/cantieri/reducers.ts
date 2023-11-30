import { createReducer } from "@reduxjs/toolkit";
import { CantieriReducerType } from "./types";
import { createCantiere, getCantieri, getMezziCantiere, getPersonaleCantiere, updateCantiere } from "./actions";

const initialState: CantieriReducerType = {
  cantieriList: [],
  form: {
    id: "",
    luogo: "",
    oggettoLavori: "",
    impresa: "",
    preventivo: 0,
    durataGG: 0,
    idCommittente: ''
  },
};

export const cantieriReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createCantiere.fulfilled, (state, action) => {
      state.cantieriList.push({...action.payload, id: action.payload._id || ''});
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
      state.cantieriList = action.payload.map((item) => ({
        ...item,
        id: item._id || '',
      }));
    })
    .addCase(getCantieri.pending, (state) => {
      state.cantieriList = initialState.cantieriList;
    })
    .addCase(getPersonaleCantiere.pending, (state) => {
      state.form.personaleList = initialState.form.personaleList;
    })
    .addCase(getPersonaleCantiere.fulfilled, (state, action) => {
      state.form.personaleList = action.payload;
    })
    .addCase(getMezziCantiere.pending, (state) => {
      state.form.mezziList = initialState.form.mezziList;
    })
    .addCase(getMezziCantiere.fulfilled, (state, action) => {
      state.form.mezziList = action.payload;
    });
});
