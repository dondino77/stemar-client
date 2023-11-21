import { createSelector } from "@reduxjs/toolkit";
import { ClienteFornitore, ClientiFornitoriState } from "./types";

const clientiFornitoriState = (state: ClientiFornitoriState) => state.clientiFornitori;

export const clientiList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined => state.clientiFornitoriList
);

export const fornitoriList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined => state.clientiFornitoriList
);

export const clientiFornitoriList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined => state.clientiFornitoriList
);