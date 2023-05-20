  import { createSelector } from '@reduxjs/toolkit';
import { MezziState, Mezzo } from './types';
  
  const mezziState = (state: MezziState) => state;
  
  export const cantieriList = createSelector(
    mezziState,
    (state): Mezzo[] | undefined => state.mezzi,
  );
  