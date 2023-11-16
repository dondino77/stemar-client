import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cantiere, ThunkApiConfig } from "./types";
import { callApi } from "../api";

export const createCantiere = createAsyncThunk<Cantiere, Cantiere, ThunkApiConfig>(
  "cantieri/createCantiere",
  async (form, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("POST", "/createCantiere", form);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCantieri = createAsyncThunk<Cantiere[], void, ThunkApiConfig>(
  "cantieri/getCantieri",
  async (_, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("GET", "/getCantieri", undefined);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCantiere = createAsyncThunk<Cantiere, Cantiere, ThunkApiConfig>(
    "cantieri/updateCantiere",
    async (form, { rejectWithValue, getState }) => {
      try {
        const result = await callApi("PUT", `/updateCantiere/${form.id}`, form);
        
        return result.response; 
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
