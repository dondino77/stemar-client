import { createReducer } from '@reduxjs/toolkit';
import { hideLoader, showLoader } from './actions';
import { CommonReducerType } from './types';

const initialState: CommonReducerType = {
  loader: undefined,
};

export const commonReducer = createReducer(initialState, builder => {
  builder
    .addCase(showLoader, (state, action) => {
      state.loader = action.payload;
    })
    .addCase(hideLoader, state => {
      state.loader = initialState.loader;
    });
});
