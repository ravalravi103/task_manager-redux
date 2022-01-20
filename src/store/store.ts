import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./Reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
