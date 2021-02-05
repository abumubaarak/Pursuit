import appliedActionType from './type'

const appliedFeed={
    isLoading:false,
    jobs:null,
    applied:null,
    error:undefined
}

const appliedJobReducer=(state=appliedFeed,action)=>{

    switch(action.type){

        case appliedActionType.APPLIED_START:
            return{ 
                isLoading:true,
                
            }

        case appliedActionType.APPLIED_SUCCESS:

        return{
            ...state,
            isLoading:false,
            jobs:action.payload
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

        default:
        return{
            ...state
        }
    }
}

export default appliedJobReducer