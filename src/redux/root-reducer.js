import { combineReducers } from "redux";
import authReducer from "./Authentication/authReducer";
import jobReducers from "./JobFeed/jobReducer";
import appliedJobReducer from "./Applied/appliedJobReducer";
import saveJobReducer from "./SaveJob/saveJobReducer";
import profileJobReducer from "./Profile/profileReducer";

export default combineReducers({
    userAuth:authReducer,
    feed:jobReducers,
    appliedJobs: appliedJobReducer,
    savedJob: saveJobReducer,
    profile:profileJobReducer
    
})