import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Mezzo {
  id: string;
  nome: string;
  tipo: string;
  // altre proprietà del mezzo
}

interface MezziState {
  list: Mezzo[];
}

const initialState: MezziState = {
  list: [],
};

const mezziReducer = createSlice({
  name: 'mezzi',
  initialState,
  reducers: {
    setMezzi(state, action: PayloadAction<Mezzo[]>) {
      state.list = action.payload;
    },
    addMezzo(state, action: PayloadAction<Mezzo>) {
      state.list.push(action.payload);
    },
    removeMezzo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(mezzo => mezzo.id !== action.payload);
    },
    // altre azioni per la gestione dei mezzi
  },
});

export const { setMezzi, addMezzo, removeMezzo } = mezziReducer.actions;

export default mezziReducer.reducer;
