import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import markerReducer, { markerSlice } from './Marker/markerSlice';
import addressReducer, { addressSlice, fetchAddress } from './Address/addressSlice';
import newTaskReducer, { newTaskSlice } from './NewTask/newTaskSlice';
import appReducer, { appSlice } from './App/appSlice';
import tasksReducer, { tasksSlice } from './Tasks/tasksSlice';

const addressActions = addressSlice.actions;
const markerActions = markerSlice.actions;
const newTaskActions = newTaskSlice.actions;
const appActions = appSlice.actions;
const tasksActions = tasksSlice.actions;

export const ActionCreators = {
  ...addressActions,
  ...markerActions,
  ...newTaskActions,
  ...appActions,
  ...tasksActions,
  fetchAddress,
};

const rootReducer = combineReducers({
  marker: markerReducer,
  address: addressReducer,
  newTask: newTaskReducer,
  app: appReducer,
  tasks: tasksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
