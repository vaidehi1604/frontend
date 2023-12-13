import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth';

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

// Equivalent JavaScript code without TypeScript annotations
export const RootStat = store.getState();
export const AppDispatch = store.dispatch;
