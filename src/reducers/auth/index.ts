import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {      
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
