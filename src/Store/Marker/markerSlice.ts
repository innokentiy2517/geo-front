import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MarkerType } from '../../components/CustomMap';

export interface MarkerState {
  data: MarkerType | undefined;
}

const initialState: MarkerState = {
  data: undefined,
};

export const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    addMarker: (state: MarkerState, action: PayloadAction<MarkerType>) => ({
      ...state,
      data: action.payload,
    }),
    deleteMarker: (state) => ({
      ...state,
      data: undefined,
    }),
  },
});

export const { addMarker, deleteMarker } = markerSlice.actions;

export default markerSlice.reducer;
