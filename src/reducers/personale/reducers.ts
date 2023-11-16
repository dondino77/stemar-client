import { createReducer } from '@reduxjs/toolkit';
import { PersonaleReducerType } from './types';
import { createPersonale, getPersonale, updatePersonale } from './actions';


const initialState: PersonaleReducerType = {
  personaleList: [],
  form: {
    id: '',
    nome: '',
    cognome: '',
    dataNascita: '',
    coefficiente: 0,
    idMansione: 0,
    mansione: '',
    manovale: false,
  }
};

  export const personaleReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(createPersonale.fulfilled, (state, action) => {
        state.personaleList.push(action.payload);
      })
      .addCase(createPersonale.pending, (state) => {
        // state.saldiHomepage = initialState.saldiHomepage;
      })
      .addCase(updatePersonale.fulfilled, (state, action) => {
          state.personaleList = state.personaleList.map((persona) => (persona._id === action.payload._id ? action.payload : persona));
      })
      .addCase(updatePersonale.pending, (state) => {
        // state.saldiHomepage = initialState.saldiHomepage;
      })
      .addCase(getPersonale.fulfilled, (state, action) => {
        state.personaleList = action.payload;
      })
      .addCase(getPersonale.pending, (state) => {
        state.personaleList = initialState.personaleList;
      });
  });
