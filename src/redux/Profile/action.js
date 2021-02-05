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

 
export const profileJob=()=>({
    type:profileActionType.PROFILE_JOB
})



// export const profileUserJob=(data,jobId)=>dispatch=>{

//     firestore.collection("Saved")
//     .doc(jobId)
//     .set(data)
//     .then(()=>{ 
//         dispatch(saveJob())
//     })
//     .catch(()=>{
//         dispatch(saveError("Unable to save  job"))
//     })
// }

export const getProfile=(uid)=>dispatch=>{
 
    dispatch(profileStart())
    firestore.collection("User") 
    .where("uid","==",uid)
    .get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc,i)=>{ 
            dispatch(profileSuccess(doc.data()))
         })
    })
    .catch((error)=>{
          dispatch(profileError(error))
    })

}
