import { createAsyncThunk } from "@reduxjs/toolkit";
import { Mezzo, ThunkApiConfig } from "./types";
import { callApi } from "../api";
import { TypeLoader, hideLoader, showLoader } from "../common";

export const createMezzo = createAsyncThunk<Mezzo, Mezzo, ThunkApiConfig>(
  "mezzi/createMezzo",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("POST", "/createMezzo", form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getMezzi = createAsyncThunk<Mezzo[], void, ThunkApiConfig>(
  "mezzi/getMezzi",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("GET", "/getMezzi", undefined);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const updateMezzo = createAsyncThunk<Mezzo, Mezzo, ThunkApiConfig>(
  "mezzi/updateMezzo",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("PUT", `/updateMezzo/${form.id}`, form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);
