import { createAsyncThunk } from "@reduxjs/toolkit";
import { Mezzo, ThunkApiConfig } from "./types";
import { callApi } from "../api";

export const createMezzo = createAsyncThunk<Mezzo, Mezzo, ThunkApiConfig>(
  "mezzi/createMezzo",
  async (form, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("POST", "/createMezzo", form);
      
      return result.response;
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
        
        return result.response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
