import { createSelector } from "@reduxjs/toolkit";
import { PlanState, PlanType, RDLPlan } from "./types";

const planState = (state: PlanState) => state;

export const rdlList = createSelector(
  planState,
  (state): RDLPlan[] | undefined => state.plan.planner.rdlList
);

export const plan = createSelector(
  planState,
  (state): PlanType | undefined => state.plan.planner
);

export const form = createSelector(
  planState,
  (state): PlanType | undefined => state.plan.form
);

