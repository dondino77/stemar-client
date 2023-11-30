  import { createSelector } from '@reduxjs/toolkit';
  import { Cantiere, CantieriState, MezziInCantiere, PersonaleInCantiere } from './types';
  
  const cantieriState = (state: CantieriState) => state.cantieri;
  
  export const cantieriList = createSelector(
    cantieriState,
    (state): Cantiere[] | undefined => state.cantieriList,
  );

  export const mezziInCantiere = createSelector(
    cantieriState,
    (state): MezziInCantiere[] | undefined => state.form.mezziList,
  );

  export const personaleInCantiere = createSelector(
    cantieriState,
    (state): PersonaleInCantiere[] | undefined => state.form.personaleList,
  );
  