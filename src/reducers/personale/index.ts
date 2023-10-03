import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Persona, PersonaleState } from './types';


const initialState: PersonaleState = {
  personale: [{
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

const personaleReducer = createSlice({
  name: 'personale',
  initialState,
  reducers: {
    setPersonale(state, action: PayloadAction<Persona[]>) {
      state.personale = action.payload;
    },
    addPersona(state, action: PayloadAction<Persona>) {
      state.personale.push(action.payload);
    },
    removePersona(state, action: PayloadAction<string>) {
      state.personale = state.personale.filter(persona => persona.id !== action.payload);
    },
    // altre azioni per la gestione del personale
  },
});

export const { setPersonale, addPersona, removePersona } = personaleReducer.actions;

export default personaleReducer.reducer;
