import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cantiere, MezziInCantiere, PersonaleInCantiere, ThunkApiConfig } from "./types";
import { callApi } from "../api";
import { TypeLoader, hideLoader, showLoader } from "../common";

export const createCantiere = createAsyncThunk<
  Cantiere,
  Cantiere,
  ThunkApiConfig
>(
  "cantieri/createCantiere",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("POST", "/createCantiere", form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getCantieri = createAsyncThunk<Cantiere[], void, ThunkApiConfig>(
  "cantieri/getCantieri",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));
      const result = await callApi("GET", "/getCantieri", undefined);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getPersonaleCantiere = createAsyncThunk<
  PersonaleInCantiere[],
  string,
  ThunkApiConfig
>(
  "cantieri/getPersonaleCantiere",
  async (idCantiere, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));
      const result = await callApi(
        "GET",
        `/getPersonaleCantiere/?cantiereId=${idCantiere}`,
        undefined
      );

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getMezziCantiere = createAsyncThunk<
  MezziInCantiere[],
  string,
  ThunkApiConfig
>(
  "cantieri/getMezziCantiere",
  async (idCantiere, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));
      const result = await callApi(
        "GET",
        `/getMezziCantiere/?cantiereId=${idCantiere}`,
        undefined
      );

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const updateCantiere = createAsyncThunk<
  Cantiere,
  Cantiere,
  ThunkApiConfig
>(
  "cantieri/updateCantiere",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("PUT", `/updateCantiere/${form.id}`, form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);
