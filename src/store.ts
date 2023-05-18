import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import mezziReducer from './reducers/mezzi';
import personaleReducer from './reducers/personale';
import cantieriReducer from './reducers/cantieri';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cantieri: cantieriReducer,
    mezzi: mezziReducer,
    personale: personaleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
