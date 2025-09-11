import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/CounterSlice';
import authReducer from '../features/auth/authSlice.ts';
import meAuthReducer from '../features/auth/meSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    meAuth: meAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
