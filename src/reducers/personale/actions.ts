import { createAsyncThunk } from "@reduxjs/toolkit";
import { Persona, ThunkApiConfig } from "./types";
import { callApi } from "../api";

export const createPersonale = createAsyncThunk<Persona, Persona, ThunkApiConfig>(
  "personale/createPersonale",
  async (form, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("POST", "/createPersonale", form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPersonale = createAsyncThunk<Persona[], void, ThunkApiConfig>(
  "personale/getPersonale",
  async (_, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("GET", "/getPersonale", undefined);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePersonale = createAsyncThunk<Persona, Persona, ThunkApiConfig>(
    "personale/updatePersonale",
    async (form, { rejectWithValue, getState }) => {
      try {
        const result = await callApi("PUT", `/updatePersonale/${form.id}`, form);

        return result.response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
