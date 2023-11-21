import { createReducer } from "@reduxjs/toolkit";
import { ClientiFornitoriReducerType } from "./types";
import { createClienteFornitore, getClientiFornitori, updateClienteFornitore} from "./actions";

const initialState: ClientiFornitoriReducerType = {
  clientiFornitoriList: [],
  form: {
    id: '',
    nome: '',
    indirizzo: '',
    partitaIva: '',
    codiceFiscale: '',
    idTipo: 0
  },
};
export const clientiFornitoriReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createClienteFornitore.fulfilled, (state, action) => {
      state.clientiFornitoriList.push({...action.payload, id: action.payload._id || ''});
    })
    .addCase(createClienteFornitore.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(updateClienteFornitore.fulfilled, (state, action) => {
        state.clientiFornitoriList = state.clientiFornitoriList.map((mezzo) => (mezzo._id === action.payload._id ? action.payload : mezzo));
    })
    .addCase(updateClienteFornitore.pending, (state) => {
      // state.saldiHomepage = initialState.saldiHomepage;
    })
    .addCase(getClientiFornitori.fulfilled, (state, action) => {
      state.clientiFornitoriList = action.payload.map((item) => ({
        ...item,
        id: item._id || '',
      }));
    })
    .addCase(getClientiFornitori.pending, (state) => {
      state.clientiFornitoriList = initialState.clientiFornitoriList;
    });
});
