import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { MarkerActionCreators } from "./Marker/ActionCreators";
import { MarkerReducer } from "./Marker/reducer";

export const ActionCreators = {
  ...MarkerActionCreators,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({ marker: MarkerReducer });

export type AppDispatch = typeof store.dispatch;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
