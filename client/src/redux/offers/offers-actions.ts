import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOffers, IPaginationConfig } from '../../api/offers/offers';

export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async (config: IPaginationConfig) => {
    const response = await fetchOffers(config);
    let result;
    try {
      result = await response.json();
    } catch {
      result = { message: 'Server error' };
    }
    if (response.ok) {
      return result;
    }
    throw new Error(result.message);
  }
);
