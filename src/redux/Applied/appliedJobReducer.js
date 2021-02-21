import appliedActionType from './type'

const appliedFeed={
    isLoading:false,
    jobs: null,
    empty:null,
    applied:null,
    error:undefined
}

const appliedJobReducer=(state=appliedFeed,action)=>{

    console.log(action.type);
    switch(action.type){

        case appliedActionType.APPLIED_START:
            return{ 
                isLoading:true,
                
            }

        case appliedActionType.APPLIED_SUCCESS:

        return{
            ...state,
            isLoading:false,
            jobs: action.payload,
            empty:false
        }

        case appliedActionType.APPLIED_ERROR:
            return{ 
                ...state,
                error:action.payload,
                isLoading:false
            }

        case appliedActionType.APPLIED_JOB:
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

export default appliedJobReducer