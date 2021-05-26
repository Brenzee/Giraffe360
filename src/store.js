import { createStore, combineReducers } from "redux";

//Reducers
import { inputDataReducer } from "./reducers";

const reducer = combineReducers({ inputData: inputDataReducer });

const store = createStore(reducer);

export default store;
