import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import cantieriReducer from './reducers/cantieri';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { mezziReducer } from './reducers/mezzi';
import { personaleReducer } from './reducers/personale';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cantieri: cantieriReducer,
    mezzi: mezziReducer,
    personale: personaleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// hooks redux per dispatch e selector tipizzati
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
