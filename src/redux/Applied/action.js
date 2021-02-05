import appliedActionType from "./type";
import {  auth,firestore } from "../../firebase/config";

 

export const appliedStart =()=>({
    type:appliedActionType.APPLIED_START,
})

export const appliedSuccess=(data)=>({
    type:appliedActionType.APPLIED_SUCCESS, 
    payload:data
})

export const appliedError=(data)=>({
    type:appliedActionType.APPLIED_ERROR,
    payload:data
})

 
export const appliedJob=()=>({
    type:appliedActionType.APPLIED_JOB
})



export const saveAppliedJob=(data,jobId)=>dispatch=>{

    firestore.collection("Applied")
    .doc(jobId)
    .set(data)
    .then(()=>{ 
        dispatch(appliedJob())
    })
    .catch(()=>{
        dispatch(appliedError("Unable to save applied job"))
    })
}

export const getAppliedJob=(uid)=>dispatch=>{

    const job=[]

    dispatch(appliedStart())
    firestore.collection("Applied") 
    .where("uid","==",uid)
    .get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc,i)=>{
             job.push(doc.data())
            dispatch(appliedSuccess(job))
         })
    })
    .catch((error)=>{
        console.log(error.message);
         dispatch(appliedError(error))
    })

}
