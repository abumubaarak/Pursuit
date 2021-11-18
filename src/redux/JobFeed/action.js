import jobActionType from "./type";

export const jobStart = () => ({
  type: jobActionType.JOB_FEED_START,
});

export const jobSuccess = (data) => ({
  type: jobActionType.JOB_FEED_SUCCESS,
  payload: data,
});

export const jobError = (data) => ({
  type: jobActionType.JOB_FEED_ERROR,
  payload: data,
});

export const appliedSuccess = () => ({
  type: jobActionType.JOB_APPLIED_SUCCESS,
});

export const appliedError = () => ({
  type: jobActionType.JOB_APPLIED_ERROR,
});

export const getJobFeed = (location, description, page) => (dispatch) => {
  dispatch(jobStart());
  fetch(
    `https://pursuit-backend.herokuapp.com?description=${description}&location=${location}`
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch(jobSuccess(res));
    })
    .catch((error) => {
      dispatch(jobError(error));
    });
};
