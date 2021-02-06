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
            profile: action.payload,
            update:false,

        }

        case profileActionType.PROFILE_ERROR:
            return{ 
                ...state,
                error:action.payload,
                isLoading: false,
                update:false,

            }

        case profileActionType.PROFILE_UPDATE:
            return{
                ...state,
                update:true,
                isLoading:false
            }
        
        case profileActionType.PROFILE_UPDATE_DONE:
                return{
                    ...state,
                    update:false,
                    isLoading:false
                }

        default:
        return{
            ...state
        }
    }
}

export default profileJobReducer