import { combineReducers } from "redux";
import authReducer from "./Authentication/authReducer";
import jobReducers from "./JobFeed/jobReducer";

export default combineReducers({
    userAuth:authReducer,
    feed:jobReducers
})