import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILED,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED
} from "../actions";

const initialState = {
  smurfs: [],

  fetchingSmurf: false,

  addingSmurf: false,

  updatingSmurf: false,

  deletingSmurf: false,

  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,

        fetchingSmurf: false,

        error: ""
      };

    case ADD_SMURF:
      return {
        ...state,

        fetchingSmurf: false,

        addingSmurf: true,

        error: ""
      };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,

        smurfs: action.payload,

        fetchingSmurf: false,

        addingSmurf: false,

        error: ""
      };

    case ADD_SMURF_FAILED:
      return {
        ...state,

        fetchingSmurf: true,

        error: action.payload
      };

    case FETCHING_SUCCESS:
      return {
        ...state,

        fetchingSmurf: true,

        error: "",

        smurfs: [...state.smurfs, ...action.payload]
      };

    case FETCHING_FAILED:
      return {
        ...state,

        fetchingSmurf: false,

        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,

        deletingSmurf: true,

        error: ""
      };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,

        isLoading: false,
        deletingSmurf: false,
        error: "",

        smurfs: state.smurfs
      };

    case DELETE_SMURF_FAILED:
      return {
        ...state,

        deletingSmurf: false,

        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
