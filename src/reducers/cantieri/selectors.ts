  import { createSelector } from '@reduxjs/toolkit';
  import { Cantiere, CantieriState } from './types';
  
  const cantieriState = (state: CantieriState) => state.cantieri;
  
  export const cantieriList = createSelector(
    cantieriState,
    (state): Cantiere[] | undefined => state.cantieriList,
  );
  