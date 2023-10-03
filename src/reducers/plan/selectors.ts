  import { createSelector } from '@reduxjs/toolkit';
  import { Plan, PlanState } from './types';
  
  const planState = (state: PlanState) => state;
  
  export const cantieriList = createSelector(
    planState,
    (state): Plan[] | undefined => state.plans,
  );
  