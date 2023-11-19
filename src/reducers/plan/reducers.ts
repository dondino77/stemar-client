import { createReducer } from "@reduxjs/toolkit";
import { PlanReducerType } from "./types";
import { savePlan, getFormPlan, getPlan, resetForm, updateRdlList } from "./actions";

const initialState: PlanReducerType = {
  planner: {
    id: "",
    data: "",
    rdlList: [],
    assenze: [],
  },
  form: {
    id: "",
    data: "",
    rdlList: [],
    assenze: [],
  },
};

export const planReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(savePlan.fulfilled, (state, action) => {
      // state.fo.data = action.payload.data;
      // state.planner.rdlList = action.payload.rdlList;
      // state.planner.assenze = action.payload.assenze;
    })
    .addCase(savePlan.pending, (state) => {
      // state = initialState;
    })
    //   .addCase(updatePersonale.fulfilled, (state, action) => {
    //       state.personaleList = state.personaleList.map((persona) => (persona._id === action.payload._id ? action.payload : persona));
    //   })
    //   .addCase(updatePersonale.pending, (state) => {
    //     // state.saldiHomepage = initialState.saldiHomepage;
    //   })
    .addCase(getPlan.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.planner.data = action.payload[0].data;
        state.planner.rdlList = action.payload[0].rdlList;
        state.planner.assenze = action.payload[0].assenze;
      }
    })
    .addCase(getPlan.pending, (state) => {
      state.planner = initialState.planner;
    })
    .addCase(getFormPlan.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.form.data = action.payload[0].data;
        state.form.rdlList = action.payload[0].rdlList;
        state.form.assenze = action.payload[0].assenze;
      }
    })
    .addCase(getFormPlan.pending, (state) => {
      state.form = initialState.form;
    })
    .addCase(updateRdlList.fulfilled, (state, action) => {
        state.planner = action.payload
    })
    .addCase(resetForm, (state) => {
      state.form = initialState.form;
    });
});
