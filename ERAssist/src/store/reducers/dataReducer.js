import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 organization definition
 @typedef {Object} organization
 @property {string} name
 @property {string} id
 */

/**
 person definition
 @typedef {Object} person
 @property {string} fullName
 @property {string} id
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
 @property {string} id
 @property {string} timestamp
 @property {person} patient
 @property {person} reporter
 @property {medicine[]} medicines
 @property {string} anamnesis
 @property {treatment[]} treatment
 */

/**
 dataState definition
 @typedef {Object} dataState
 @property {organization[]} organizations
 @property {report[]} reports
 */

/**
 * @type dataState
 */
const initialState = {
  organizations: [],
  reports: [],
};

export const dataReducer = produce((/**dataState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_ORGANIZATIONS_LIST:
      draft.organizations = payload;
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
