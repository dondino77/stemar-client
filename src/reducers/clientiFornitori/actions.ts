import { createAsyncThunk } from "@reduxjs/toolkit";
import { ClienteFornitore, ThunkApiConfig } from "./types";
import { callApi } from "../api";
import { TypeLoader, hideLoader, showLoader } from "../common";

export const createClienteFornitore = createAsyncThunk<ClienteFornitore, ClienteFornitore, ThunkApiConfig>(
  "clientiFornitori/createClienteFornitore",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("POST", "/createClienteFornitore", form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getClientiFornitori = createAsyncThunk<ClienteFornitore[], void, ThunkApiConfig>(
  "clientiFornitori/getClientiFornitori",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("GET", "/getClientiFornitori", undefined);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const updateClienteFornitore = createAsyncThunk<ClienteFornitore, ClienteFornitore, ThunkApiConfig>(
  "clientiFornitori/updateClienteFornitore",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("PUT", `/updateClienteFornitore/${form.id}`, form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);
