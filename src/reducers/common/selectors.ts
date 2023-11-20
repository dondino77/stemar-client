import { createSelector } from "@reduxjs/toolkit";
import { CommonState, TypeLoader } from "./types";

const commonState = (state: CommonState) => state.common;

export const loader = (keys: TypeLoader) => {
  return createSelector(commonState, (state): boolean => {
    return state.loader === keys;
  });
};

