import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import markerReducer, { markerSlice } from './Marker/markerSlice';
import addressReducer, { addressSlice, fetchAddress } from './Address/addressSlice';
/* export const ActionCreators = {
  markerSlice.actions,
  // ...AddressActionCreators,
}; */

const addressActions = addressSlice.actions;
const markerActions = markerSlice.actions;

export const ActionCreators = {
  ...addressActions,
  ...markerActions,
  fetchAddress,
};

const rootReducer = combineReducers({
  marker: markerReducer,
  address: addressReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
