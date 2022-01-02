import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 uiState definition
 @typedef {Object} uiState
 @property {boolean} isLoading
 */

const initialState = {
  isLoading: false,
};

export const userReducer = produce((/**uiState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.TOGGLE_LOADER:
      draft.isLoading = payload;
      break;
    // case actionTypes.SET_APP_VIDEOS:
    //   draft.appVideos = payload;
    //   break;

    default:
      break;
  }
}, initialState);
