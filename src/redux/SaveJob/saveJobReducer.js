import saveActionType from './type'

const saveFeed={
    isLoading:false,
    jobs:null,
    save:null,
    error:undefined
}

const saveJobReducer=(state=saveFeed,action)=>{

    switch(action.type){

        case saveActionType.SAVE_START:
            return { 
                ...state,
                isLoading:true,
                
            }

        case saveActionType.SAVE_SUCCESS:

        return{
            ...state,
            isLoading:false,
            jobs:action.payload
        }

        case saveActionType.SAVE_ERROR:
            return{ 
                ...state,
                error:action.payload,
                isLoading:false
            }

        case saveActionType.SAVE_JOB:
            return{
                
                applied:true,
                isLoading:false
            }

        default:
        return state
    }
}

export default saveJobReducer