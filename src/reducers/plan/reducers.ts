import { createReducer } from "@reduxjs/toolkit";
import { PlanReducerType } from "./types";
import { createPlan, getFormsPlan, getPlan } from "./actions";

const initialState: PlanReducerType = {};

export const planReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createPlan.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.rdlList = action.payload.rdlList;
      state.assenze = action.payload.assenze;
    })
    .addCase(createPlan.pending, (state) => {
      state = initialState;
    })
    //   .addCase(updatePersonale.fulfilled, (state, action) => {
    //       state.personaleList = state.personaleList.map((persona) => (persona._id === action.payload._id ? action.payload : persona));
    //   })
    //   .addCase(updatePersonale.pending, (state) => {
    //     // state.saldiHomepage = initialState.saldiHomepage;
    //   })
    .addCase(getPlan.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.data = action.payload[0].data;
        state.rdlList = action.payload[0].rdlList;
        state.assenze = action.payload[0].assenze;
      }
    })
    .addCase(getPlan.pending, (state) => {
      state.data = initialState.data;
      state.rdlList = initialState.rdlList;
      state.assenze = initialState.assenze;
    })
    .addCase(getFormsPlan.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.data = action.payload[0].data;
        state.rdlList = action.payload[0].rdlList;
        state.assenze = action.payload[0].assenze;
      }
    })
    .addCase(getFormsPlan.pending, (state) => {
      state.data = initialState.data;
      state.rdlList = initialState.rdlList;
      state.assenze = initialState.assenze;
    });
});
