import { combineReducers } from "redux";
import authReducer from "./Authentication/authReducer";
import jobReducers from "./JobFeed/jobReducer";
import appliedJobReducer from "./Applied/appliedJobReducer";
import saveJobReducer from "./SaveJob/saveJobReducer";
import profileJobReducer from "./Profile/profileReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
} 
 const appReducer= combineReducers({
    userAuth:authReducer,
    feed:jobReducers,
    appliedJobs: appliedJobReducer,
    savedJob: saveJobReducer,
    profile:profileJobReducer
    
})

const rootReducer = (state, action) =>
{
    
    if (action.type === 'LOGOUT_SUCCESS') {
       
        //INCASE YOU YOU NEED TO PERSISIT ANY OBJECT 
        // const { feed } = state
 
        // state={feed} 
        storage.removeItem("persist:root")

        state=undefined
    }

    return appReducer(state,action)
}

export default persistReducer(persistConfig,rootReducer)