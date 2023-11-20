import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PlanType, RDLPlan, ThunkApiConfig } from "./types";
import { callApi } from "../api";
import { TypeLoader, hideLoader, showLoader } from "../common";

export const savePlan = createAsyncThunk<PlanType, PlanType, ThunkApiConfig>(
  "plan/savePlan",
  async (plan, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));
      const result = await callApi("POST", "/savePlan", plan);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getPlan = createAsyncThunk<PlanType[], string, ThunkApiConfig>(
  "plan/getPlan",
  async (data, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("GET", `/getPlan?startDate=${data}`);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const getFormPlan = createAsyncThunk<PlanType[], string, ThunkApiConfig>(
  "plan/getFormsPlan",
  async (data, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("GET", `/getPlan?startDate=${data}`);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const updateRdlList = createAsyncThunk<RDLPlan, RDLPlan, ThunkApiConfig>(
  "plan/updateRdl",
  async (form, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader(TypeLoader.GENERAL));

      const result = await callApi("PUT", `/updateRdlList/${form.id}`, form);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const resetForm = createAction<void, "plan/resetForm">("plan/resetForm");
