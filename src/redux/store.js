import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initalState = {};
const meddleware = [thunk];
const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...meddleware))
);

export default store;
