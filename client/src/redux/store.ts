import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
