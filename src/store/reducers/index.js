import { combineReducers } from "redux";
import authReducer from "./authReducer";

const reducersContainer = {
   authState: authReducer,
};

export default combineReducers(reducersContainer);
