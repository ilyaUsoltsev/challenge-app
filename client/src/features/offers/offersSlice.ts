import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchOffers } from './offerAPI';
import { IOffer } from './offer.types';

export interface CounterState {
  offers: IOffer[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  offers: [],
  status: 'idle',
};

export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async () => {
    const response = await fetchOffers();
    return response;
  }
);

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOffersAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchOffersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.offers = action.payload;
      });
  },
});

export const selectOffers = (state: RootState) => state.offers.offers;
export const selectOffersStatus = (state: RootState) => state.offers.status;

export default offersSlice.reducer;
