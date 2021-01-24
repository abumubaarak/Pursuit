import authActionType from "./type";
import {  auth,firestore,provider } from "../../firebase/config";


export const authStart =()=>({
    type:authActionType.AUTH_START,
})

export const authSuccess=(data)=>({
    type:authActionType.AUTH_SUCCESS,
    payload:data
})

export const authError=(data)=>({
    type:authActionType.AUTH_ERROR,
    payload:data
})

const saveUserInfo=(user)=>{
    
    const {id,email,picture,name}=user;

    const splitName=name.split(" ")
    
    const firstname=splitName[0]
    
    const lastname=splitName[1]

    const userData={
            id,email,picture,firstname,lastname
        }
    firestore.collection("User")
              .doc(id)
              .set(userData)
}

export const googleAuth=()=>dispatch=>{

     dispatch(authStart())
    auth.signInWithPopup(provider)
    .then(result=>{

        saveUserInfo(result.additionalUserInfo.profile)

        dispatch(authSuccess(result))

      }).catch((error=>{
        dispatch(authError(error))
        
    }))


}
