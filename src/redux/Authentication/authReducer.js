import authActionType from "./type";

const currentData={
    profile:null,
    isFetching:true,
    currentUser:false,
    error:undefined
}

const authReducer=(state=currentData,action)=>{

    switch(action.type){

        case authActionType.AUTH_START:
            return{
                ...state,
                isFetching:true
            }

        case authActionType.AUTH_SUCCESS:
            return{
                ...state,
                profile:authActionType.payload,
                currentUser:true,
                isFetching:false
            }
        case authActionType.AUTH_ERROR:
            return{
                ...state,
                isFetching:false,
                error:authActionType.payload
            }

            default:
                return state;
    }
}

export default authReducer