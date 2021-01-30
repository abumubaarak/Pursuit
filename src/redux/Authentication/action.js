import authActionType from "./type";
import {  auth,firestore,provider,gitHubprovider } from "../../firebase/config";


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
    
    const {uid,email,displayName}=user;

    const splitName=displayName.split(" ")
    
    const firstname=splitName[0]
    
    const lastname=splitName[1]

    const userData={
            uid,email,firstname,lastname
        }
    firestore.collection("User")
              .doc(uid)
              .set(userData)
}

export const googleAuth=()=>dispatch=>{

     dispatch(authStart())
    auth.signInWithPopup(gitHubprovider)
    .then(result=>{

         
        saveUserInfo(result.user)

        dispatch(authSuccess(result.user))

      }).catch((error=>{
        dispatch(authError(error))
        
    }))


}

export const githubAuth=()=>dispatch=>{

    dispatch(authStart())
   auth.signInWithPopup(gitHubprovider)
   .then(result=>{

       
    console.log(result);
       saveUserInfo(result.user)

       dispatch(authSuccess(result.user))

     }).catch((error=>{
       dispatch(authError(error))
       
   }))


}

export const signUp=(user)=>dispatch=>{

    dispatch(authStart())
    const {firstname,lastname,email,password} = user
    auth.createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
        
        const {uid,email} = userCredential.user;

        const displayName=firstname.concat(" ",lastname)

        const userData={
            uid,email,displayName
        }

        saveUserInfo(userData)

        dispatch(authSuccess(userData))

       
      })
      .catch((error) => {
         dispatch(authError(error))
      });
}

export const login=(user)=>dispatch=>{

    dispatch(authStart())
    const {email,password} = user
    auth.signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
        
        const {uid,email,displayName} = userCredential.user;

        const userInfo={uid,email,displayName}
        console.log(userInfo);
        dispatch(authSuccess(userInfo))

    
      })
      .catch((error) => {
         dispatch(authError(error))
      });
}