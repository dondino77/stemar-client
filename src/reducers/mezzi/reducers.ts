import { createReducer } from "@reduxjs/toolkit";
import { MezziReducerType } from "./types";
import { createMezzo, getMezzi, updateMezzo } from "./actions";

const initialState: MezziReducerType = {
  mezziList: [],
  form: {
    id: "",
    nome: "",
    targa: "",
    dataScadenzaAssicurazione: "",
    dataScadenzaBollo: "",
    dataProssimaRevisione: "",
    costoOrario: 0,
  },
};
export const mezziReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createMezzo.fulfilled, (state, action) => {
      state.mezziList.push({...action.payload, id: action.payload._id || ''});
    })
    .addCase(createMezzo.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(updateMezzo.fulfilled, (state, action) => {
        state.mezziList = state.mezziList.map((mezzo) => (mezzo._id === action.payload._id ? action.payload : mezzo));
    })
    .addCase(updateMezzo.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(getMezzi.fulfilled, (state, action) => {
      state.mezziList = action.payload.map((item) => ({
        ...item,
        id: item._id || '',
      }));
    })
    .addCase(getMezzi.pending, (state) => {
      state.mezziList = initialState.mezziList;
    });
});
