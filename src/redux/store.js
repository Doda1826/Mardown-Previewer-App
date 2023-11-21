import { legacy_createStore } from "redux";
import markdownReducer from "./reducers";

const store = legacy_createStore(markdownReducer);

export default store;

