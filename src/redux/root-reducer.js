import { combineReducers } from "redux";
import authReducer from "./Authentication/authReducer";

export default combineReducers({
    userAuth:authReducer
})