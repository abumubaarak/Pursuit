import jobActionType from './type'

const jobFeed={
    isLoading:false,
    feed:null,
    error:undefined
}

const jobReducers=(state=jobFeed,action)=>{

    switch(action.type){

        case jobActionType.JOB_FEED_START:
            return{
                ...state,
                isLoading:true,
                
            }

        case jobActionType.JOB_FEED_SUCCESS:

        return{
            ...state,
            isLoading:false,
            feed:action.payload,
            error:undefined
        }

        case jobActionType.JOB_FEED_ERROR:
            return{
                 
                error:action.payload,
                isLoading:false
            }


        default:
        return state
        
    }
}

export default jobReducers