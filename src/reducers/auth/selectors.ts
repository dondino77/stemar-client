  import { createSelector } from '@reduxjs/toolkit';
import { AuthState } from './types';

  
  const auth = (state: AuthState) => state;
  
  export const isLogged = createSelector(
    auth,
    (state): boolean => state.isLoggedIn,
  );
  