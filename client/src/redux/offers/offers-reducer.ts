import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { offersInitialState } from './offers-state';
import { fetchOffersAsync } from './offers-actions';

export const offersSlice = createSlice({
  name: 'offers',
  initialState: offersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOffersAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchOffersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.offers = state.offers
          ? [...state.offers, ...action.payload.offers]
          : [...action.payload.offers];
        state.offersTotal = action.payload.offersTotal;
      });
  },
});

export const selectOffersState = (state: RootState) => state.offers;

export default offersSlice.reducer;
