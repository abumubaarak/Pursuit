import saveActionType from './type'

const saveFeed={
    isLoading:false,
    jobs:null,
    save: null,
    empty:null,
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
            jobs: action.payload,
            empty:null
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

            case "empty":
                return {
                    empty:true
                }
        default:
        return state
    }
}

export default saveJobReducer