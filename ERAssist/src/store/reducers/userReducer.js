import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 userInfo definition
 @typedef {Object} userInfo
 @property {string} fullName
 @property {string} email
 @property {string} userId
 @property {string} address
 @property {string} phone
 @property {boolean} isManager
 */

/**
 userState definition
 @typedef {Object} userState
 @property {boolean} isLoggedIn
 @property {userInfo} userInfo
 */

const initialState = {
  isLoggedIn: false,
  userInfo: {
    fullName: '',
    email: '',
    userId: '',
    address: '',
    phone: '',
    isManager: false,
  },
};

export const uiReducer = produce((/**userState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_USER:
      Object.assign(draft.userInfo, payload);
      break;
    // case actionTypes.SET_APP_VIDEOS:
    //   draft.appVideos = payload;
    //   break;

    default:
      break;
  }
}, initialState);
