import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer.js";
import logger from "redux-logger";
import thunk from "redux-thunk";


const configureStore = (preloadedState = {}) =>
    createStore(RootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;