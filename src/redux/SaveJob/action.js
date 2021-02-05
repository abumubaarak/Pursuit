import saveActionType from "./type";
import {  auth,firestore } from "../../firebase/config";

 

export const saveStart =()=>({
    type:saveActionType.SAVE_START,
})

export const saveSuccess=(data)=>({
    type:saveActionType.SAVE_SUCCESS, 
    payload:data
})

export const saveError=(data)=>({
    type:saveActionType.SAVE_ERROR,
    payload:data
})

 
export const saveJob=()=>({
    type:saveActionType.SAVE_JOB
})



export const saveUserJob=(data,jobId)=>dispatch=>{

    firestore.collection("Saved")
    .doc(jobId)
    .set(data)
    .then(()=>{ 
        dispatch(saveJob())
    })
    .catch(()=>{
        dispatch(saveError("Unable to save  job"))
    })
}

export const getSavedJob=(uid)=>dispatch=>{

    const job=[]

    dispatch(saveStart())
    firestore.collection("Saved") 
    .where("uid","==",uid)
    .get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc,i)=>{
             job.push(doc.data())
            dispatch(saveSuccess(job))
         })
    })
    .catch((error)=>{
          dispatch(saveError(error))
    })

}
