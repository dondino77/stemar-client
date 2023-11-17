import { createSelector } from "@reduxjs/toolkit";
import { PlanReducerType, PlanState, RDLPlan } from "./types";

const planState = (state: PlanState) => state;

export const rdlList = createSelector(
  planState,
  (state): RDLPlan[] | undefined => state.plan.rdlList
);

export const plan = createSelector(
  planState,
  (state): PlanReducerType | undefined => state.plan
);

