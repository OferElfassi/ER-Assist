import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 organization definition
 @typedef {Object} organization
 @property {string} name
 @property {string} address
 @property {string} [_id]
 */

/**
 person definition
 @typedef {Object} person
 @property {string} fullName
 @property {string} _id
 */

/**
 medicine definition
 @typedef {Object} medicine
 @property {string} name
 @property {string} amount
 */

/**
 treatment definition
 @typedef {Object} treatment
 @property {string} action
 @property {string} timeStamp
 */

/**
 report definition
 @typedef {Object} report
 @property {string} _id
 @property {string} timestamp
 @property {person} patient
 @property {person} reporter
 @property {medicine[]} medicines
 @property {string} anamnesis
 @property {treatment[]} treatment
 @property {organization} organization
 */

/**
 dataState definition
 @typedef {Object} dataState
 @property {organization[]} organizations
 @property {report[]} reports
 @property {userInfo[]} users
 */

/**
 * @type dataState
 */
const initialState = {
  organizations: [],
  reports: [],
  users: [],
};

export const dataReducer = produce((/**dataState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_ORGANIZATIONS_LIST:
      draft.organizations = payload;
      break;
    case actionTypes.SET_USERS_LIST:
      draft.users = payload || [];
      break;
    case actionTypes.SET_REPORTS_LIST:
      draft.reports = payload || [];
      break;
    case actionTypes.REMOVE_REPORT:
      let reportIndex = draft.reports.findIndex(rep => rep.id === payload);
      if (reportIndex !== -1) {
        draft.reports.splice(reportIndex, 1);
      }
      break;
    case actionTypes.REMOVE_USER:
      let userIndex = draft.reports.findIndex(user => user.id === payload);
      if (userIndex !== -1) {
        draft.users.splice(userIndex, 1);
      }
      break;
    // case actionTypes.SET_MODAL:
    //   Object.assign(draft.modal, payload);
    //   break;
    // case actionTypes.SET_APP_VIDEOS:
    //   draft.appVideos = payload;
    //   break;

    default:
      break;
  }
}, initialState);
