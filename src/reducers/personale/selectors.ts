import { createSelector } from "@reduxjs/toolkit";
import { Persona, PersonaleState } from "./types";

const personaleState = (state: PersonaleState) => state.personale;

export const personaleList = createSelector(
  personaleState,
  (state): Persona[] | undefined => state.personaleList
);
