import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import markerReducer, { markerSlice } from './Marker/markerSlice';
import addressReducer, { addressSlice, fetchAddress } from './Address/addressSlice';
import taskNewReducer, { TaskNewSlice } from './NewTask/taskNewSlice';
import appReducer, { appSlice } from './App/appSlice';
import tasksReducer, { fetchTasks, tasksSlice } from './Tasks/tasksSlice';
import userReducer, { signIn, signUp } from './User/userSlice';

const addressActions = addressSlice.actions;
const markerActions = markerSlice.actions;
const taskNewActions = TaskNewSlice.actions;
const appActions = appSlice.actions;
const tasksActions = tasksSlice.actions;

/* `export const ActionCreators` is creating an object that contains all the action creators from the
different slices of the Redux store. The spread operator (`...`) is used to combine the action
creators from each slice into one object. Additionally, it includes the `fetchAddress`, `signUp`,
`signIn`, and `fetchTasks` action creators from their respective slices. This object can then be
imported and used in other parts of the application to dispatch actions. */
export const ActionCreators = {
  ...addressActions,
  ...markerActions,
  ...taskNewActions,
  ...appActions,
  ...tasksActions,
  fetchAddress,
  signUp,
  signIn,
  fetchTasks,
};

const rootReducer = combineReducers({
  marker: markerReducer,
  address: addressReducer,
  taskNew: taskNewReducer,
  app: appReducer,
  tasks: tasksReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
