import profileActionType from './type'

const profileFeed={
    isLoading:false,
    profile:null,
    update:null,
    error:undefined
}

const profileJobReducer=(state=profileFeed,action)=>{

    switch(action.type){

        case profileActionType.PROFILE_START:
            return { 
                ...state,
                isLoading:true,
                
            }

        case profileActionType.PROFILE_SUCCESS:

        return{
            ...state,
            isLoading:false,
            profile:action.payload
        }

        case profileActionType.PROFILE_ERROR:
            return{ 
                ...state,
                error:action.payload,
                isLoading:false
            }

        case profileActionType.PROFILE_JOB:
            return{
                
                UPDATE:true,
                isLoading:false
            }

        default:
        return{
            ...state
        }
    }
}

export default profileJobReducer