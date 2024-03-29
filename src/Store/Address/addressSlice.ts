import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { GeocodeType } from '../../types/GeocodeTypes';
import { MarkerType } from '../../components/CustomMap';
import { addMarker } from '../Marker/markerSlice';

export interface AddressState {
  data: GeocodeType | undefined;
}

const initialState: AddressState = {
  data: undefined,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<GeocodeType>) => ({
      ...state,
      data: action.payload,
    }),
    deleteAddress: (state) => ({
      ...state,
      data: undefined,
    }),
  },
});

export const { addAddress, deleteAddress } = addressSlice.actions;

export const fetchAddress = createAsyncThunk(
  'address/fetchAddress',
  async (latlng: MarkerType, { dispatch }) => {
    dispatch(addMarker(latlng));
    try {
      const response = await axios.get<GeocodeType>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${latlng.longitude},${
          latlng.latitude
        }.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
      );
      dispatch(addAddress(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export default addressSlice.reducer;
