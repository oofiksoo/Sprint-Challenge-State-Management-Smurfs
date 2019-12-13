import axios from "axios";

export const FETCHING = "FETCHING";

export const FETCHING_SUCCESS = "FETCHING_SUCCESS";

export const FETCHING_FAILED = "FETCHING_FAILED";

export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_DATA = "DELETE_DATA";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMUF_SUCCESS";
export const DELETE_SMURF_FAILED = "DELETE_SMURF_FAILED";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });

  axios

    .get("http://localhost:3333/smurfs")

    .then(res => {
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });

      console.log(res);
    })

    .catch(err => {
      dispatch({ type: FETCHING_FAILED, payload: err.res });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF });

  axios

    .post("http://localhost:3333/smurfs", newSmurf)

    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });

      console.log(res);
    })

    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILED, payload: err });
    });
};

export const deleteSmurf = smurf => {
  console.log("deleteSMURF invoked using: ", smurf);

  return { type: DELETE_SMURF, payload: smurf };
};

export const deleteData = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });

  axios

    .delete(`http://localhost:3333/smurfs/${id}`)

    .then(res => {
      //   console.log(res);

      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res });
    })

    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILED, payload: err.response });
    });
};
