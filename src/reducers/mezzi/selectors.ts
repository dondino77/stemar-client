import { createSelector } from "@reduxjs/toolkit";
import { MezziState, Mezzo } from "./types";

const mezziState = (state: MezziState) => state.mezzi;

export const mezziList = createSelector(
  mezziState,
  (state): Mezzo[] | undefined => state.mezziList
);
