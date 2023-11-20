import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { mezziReducer } from './reducers/mezzi';
import { personaleReducer } from './reducers/personale';
import { cantieriReducer } from './reducers/cantieri';
import { planReducer } from './reducers/plan';
import { commonReducer } from './reducers/common';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cantieri: cantieriReducer,
    mezzi: mezziReducer,
    personale: personaleReducer,
    plan: planReducer,
    common: commonReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// hooks redux per dispatch e selector tipizzati
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
