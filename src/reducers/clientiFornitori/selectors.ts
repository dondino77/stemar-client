import { createSelector } from "@reduxjs/toolkit";
import { ClienteFornitore, ClientiFornitoriState } from "./types";

const clientiFornitoriState = (state: ClientiFornitoriState) =>
  state.clientiFornitori;

export const clientiList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined =>
    state.clientiFornitoriList.filter((item) => item.idTipo === 0 || item.idTipo === 2)
);

export const fornitoriList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined =>
    state.clientiFornitoriList.filter((item) => item.idTipo === 1 || item.idTipo === 2)
);

export const clientiFornitoriList = createSelector(
  clientiFornitoriState,
  (state): ClienteFornitore[] | undefined => state.clientiFornitoriList
);
