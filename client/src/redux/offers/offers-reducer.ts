import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchOffers, IPaginationConfig } from '../../api/offers/offers';
import { IOffer } from '../../api/offers/offer.types';

export interface CounterState {
  offers: IOffer[];
  status: 'idle' | 'loading' | 'failed';
  offersTotal: number;
}

const initialState: CounterState = {
  offers: [],
  status: 'idle',
  offersTotal: 0,
};

export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async (config: IPaginationConfig) => {
    const response = await fetchOffers(config);
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
        state.offers = [...state.offers, ...action.payload.offers];
        state.offersTotal = action.payload.offersTotal;
      });
  },
});

export const selectOffers = (state: RootState) => state.offers.offers;
export const selectOffersTotal = (state: RootState) => state.offers.offersTotal;
export const selectOffersStatus = (state: RootState) => state.offers.status;

export default offersSlice.reducer;
