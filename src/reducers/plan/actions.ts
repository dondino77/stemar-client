import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlanReducerType, PlanState, ThunkApiConfig } from "./types";
import { callApi } from "../api";

export const createPlan = createAsyncThunk<PlanReducerType, PlanState, ThunkApiConfig>(
  "plan/createPlan",
  async (plan, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("POST", "/createPlan", plan);

      return result.response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPlan = createAsyncThunk<PlanReducerType[], string, ThunkApiConfig>(
  "plan/getPlan",
  async (data, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("GET", `/getPlan?startDate=${data}`);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFormsPlan = createAsyncThunk<PlanReducerType[], string, ThunkApiConfig>(
  "plan/getFormsPlan",
  async (data, { rejectWithValue, getState }) => {
    try {
      const result = await callApi("GET", `/getPlan?startDate=${data}`);

      return result.response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const updatePersonale = createAsyncThunk<Persona, Persona, ThunkApiConfig>(
//     "personale/updatePersonale",
//     async (form, { rejectWithValue, getState }) => {
//       try {
//         const result = await callApi("PUT", `/updatePersonale/${form.id}`, form);

//         return result.response;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     }
//   );
