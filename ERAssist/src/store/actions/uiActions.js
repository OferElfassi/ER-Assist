import * as actionTypes from '../actionTypes';



export const toggleLoader = state => {
  return {
    type: actionTypes.TOGGLE_LOADER,
    payload: state,
  };
};


