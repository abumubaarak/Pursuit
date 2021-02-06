import profileActionType from "./type";
import {  auth,firestore } from "../../firebase/config";

 

export const profileStart =()=>({
    type:profileActionType.PROFILE_START,
})

export const profileSuccess=(data)=>({
    type:profileActionType.PROFILE_SUCCESS, 
    payload:data
})

export const profileError=(data)=>({
    type:profileActionType.PROFILE_ERROR,
    payload:data
})

 
export const updateProfile=()=>({
    type:profileActionType.PROFILE_UPDATE
})

export const updateDone=()=>({
    type:profileActionType.PROFILE_UPDATE_DONE
})



export const updateUserProfile = (data, uid) => dispatch => {
    
    console.log(data,uid);
    const { firstname, lastname, email } = data

    firestore.collection("User")
        .doc(uid)
        .update({
            firstname,
            lastname,
            email
        })
    .then(()=>{ 
        dispatch(updateProfile())
        dispatch(updateDone())
    })
    .catch((error)=>{
        dispatch(profileError(error))
    })
}

export const getProfile=(uid)=>dispatch=>{
 
    dispatch(profileStart())
    firestore.collection("User").doc(uid) 
        .onSnapshot((doc)=>{ 
            dispatch(profileSuccess(doc.data()))
        }, (error) =>
        {
                 dispatch(profileError(error))
         })
 

}
