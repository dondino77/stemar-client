import { createReducer } from '@reduxjs/toolkit';
import { PersonaleReducerType } from './types';
import { createPersonale, getPersonale, updatePersonale } from './actions';


const initialState: PersonaleReducerType = {
  personaleList: [{
    id:'1',
    nome: 'Nome1',
    cognome: 'Cognome1',
    dataNascita: '',
    coefficiente: 1,
    idMansione: 1,
    mansione: 'Intonacatore/Pittore',
    manovale: true,
  },
  {
    id:'2',
    nome: 'Nome2',
    cognome: 'Cognome2',
    dataNascita: '',
    coefficiente: 2,
    idMansione: 2,
    mansione: 'Intonacatore/Pittore',
    manovale: true,
  },
  {
    id:'3',
    nome: 'Nome3',
    cognome: 'Cognome3',
    dataNascita: '',
    coefficiente: 3,
    idMansione: 3,
    mansione: 'Intonacatore/Pittore',
    manovale: true,
  },
  {
    id:'4',
    nome: 'Nome4',
    cognome: 'Cognome4',
    dataNascita: '',
    coefficiente: 4,
    idMansione: 4,
    mansione: 'Intonacatore/Pittore',
    manovale: true,
  }],
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
