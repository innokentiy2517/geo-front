import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { MarkerActionCreators } from './Marker/ActionCreators';
import { MarkerReducer } from './Marker/reducer';
import { AddressReducer } from './Address/reducer';
import { AddressActionCreators } from './Address/ActionCreators';

export const ActionCreators = {
  ...MarkerActionCreators,
  ...AddressActionCreators,
};

const rootReducer = combineReducers({
  marker: MarkerReducer,
  address: AddressReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
