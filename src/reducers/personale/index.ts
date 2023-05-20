import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Persona, PersonaleState } from './types';


const initialState: PersonaleState = {
  personale: [],
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
