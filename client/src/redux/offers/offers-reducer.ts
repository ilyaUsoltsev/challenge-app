import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchOffers, IPaginationConfig } from '../../api/offers/offers';
import { IOffer } from '../../api/offers/offer.types';

export interface OffersState {
  offers?: IOffer[];
  status: 'idle' | 'loading' | 'failed';
  offersTotal: number;
  error?: SerializedError;
}

const initialState: OffersState = {
  offers: undefined,
  status: 'idle',
  offersTotal: 0,
  error: undefined,
};

export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async (config: IPaginationConfig) => {
    const response = await fetchOffers(config);
    const result = await response.json();
    if (response.ok) {
      return result;
    }
    throw new Error(result.message);
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
