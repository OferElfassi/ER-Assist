import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 signupInfo definition
 @typedef {Object} signupInfo
 @property {string} fullName
 @property {string} email
 @property {string} password
 @property {string} address
 @property {string} phone
 @property {string} gender
 @property {string} role
 @property {string} organization
 @property {boolean} isManager
 */

/**
 userInfo definition
 @typedef {Object} userInfo
 @property {string} fullName
 @property {string} email
 @property {string} [_id]
 @property {string} [id]
 @property {string} address
 @property {string} phone
 @property {string} gender
 @property {string} role
 @property {string} organization
 @property {boolean} isManager
 @property {boolean} isDoctor
 */

/**
 userState definition
 @typedef {Object} userState
 @property {string} token
 @property {boolean} isLoggedIn
 @property {userInfo} userInfo
 */

const initialState = {
  isLoggedIn: false,
  token: '',
  userInfo: {
    fullName: '',
    email: '',
    id: '',
    address: '',
    phone: '',
    gender: '',
    role: '',
    isManager: false,
    isDoctor: false,
  },
};

export const userReducer = produce((/**userState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_USER:
      Object.assign(draft.userInfo, payload);
      draft.userInfo.id = payload._id;
      draft.isLoggedIn = true;
      draft.token = payload.token;
      break;
    case actionTypes.LOG_OUT:
      Object.assign(draft.userInfo, initialState.userInfo);
      draft.isLoggedIn = false;
      break;
    // case actionTypes.SET_APP_VIDEOS:
    //   draft.appVideos = payload;
    //   break;

    default:
      break;
  }
}, initialState);
