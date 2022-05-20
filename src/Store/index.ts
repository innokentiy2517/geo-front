import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { MarkerActionCreators } from './Marker/ActionCreators';
import { MarkerReducer } from './Marker/reducer';

export const ActionCreators = {
  ...MarkerActionCreators,
};

const rootReducer = combineReducers({ marker: MarkerReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
