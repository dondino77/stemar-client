import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Persona {
  id: string;
  nome: string;
  cognome: string;
  ruolo: string;
  // altre proprietà della persona
}

interface PersonaleState {
  list: Persona[];
}

const initialState: PersonaleState = {
  list: [],
};

const personaleReducer = createSlice({
  name: 'personale',
  initialState,
  reducers: {
    setPersonale(state, action: PayloadAction<Persona[]>) {
      state.list = action.payload;
    },
    addPersona(state, action: PayloadAction<Persona>) {
      state.list.push(action.payload);
    },
    removePersona(state, action: PayloadAction<string>) {
      state.list = state.list.filter(persona => persona.id !== action.payload);
    },
    // altre azioni per la gestione del personale
  },
});

export const { setPersonale, addPersona, removePersona } = personaleReducer.actions;

export default personaleReducer.reducer;
