import jobActionType from "./type";
 

export const jobStart =()=>({
    type:jobActionType.JOB_FEED_START,
})

export const jobSuccess=(data)=>({
    type:jobActionType.JOB_FEED_SUCCESS,
    payload:data
})

export const jobError=(data)=>({
    type:jobActionType.JOB_FEED_ERROR,
    payload:data
})

export const getJobFeed=(location,description)=>dispatch=>{
    dispatch(jobStart())
    fetch(`https://thawing-island-35644.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`)
        .then(res=>res.json())
        .then(res=>{
            dispatch(jobSuccess(res))
        })
        .catch(error=>{
            dispatch(jobError(error))
        })
}