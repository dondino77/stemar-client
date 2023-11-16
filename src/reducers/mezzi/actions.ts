import { createAsyncThunk } from "@reduxjs/toolkit";
import { Mezzo, ThunkApiConfig } from "./types";
import { callApi } from "../api";

export const createMezzo = createAsyncThunk<Mezzo, Mezzo, ThunkApiConfig>(
  "mezzi/createMezzo",
  async (form, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("POST", "/createMezzo", form);
      // Assicurati che 'result' sia un oggetto del tipo atteso

      // Ritorna solo la parte di 'result' che ti serve, supponendo che sia 'Mezzo'
      return result.response; // Assicurati di adattare questo in base alla risposta effettiva
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMezzi = createAsyncThunk<Mezzo[], void, ThunkApiConfig>(
  "mezzi/getMezzi",
  async (_, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("GET", "/getMezzi", undefined);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateMezzo = createAsyncThunk<Mezzo, Mezzo, ThunkApiConfig>(
    "mezzi/updateMezzo",
    async (form, { rejectWithValue, getState }) => {
      try {
        const result = await callApi("PUT", `/updateMezzo/${form.id}`, form);
        // Assicurati che 'result' sia un oggetto del tipo atteso
  
        // Ritorna solo la parte di 'result' che ti serve, supponendo che sia 'Mezzo'
        return result.response; // Assicurati di adattare questo in base alla risposta effettiva
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
