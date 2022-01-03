import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 modal definition
 @typedef {Object} modal
 @property {boolean} modalVisible
 @property {string} modalText
 @property {string} okText
 @property {string} cancelText
 @property {function} onOk
 @property {function} onCancel
 */

/**
 loader definition
 @typedef {Object} loader
 @property {boolean} show
 @property {boolean} showProgress
 @property {boolean} showMessage
 @property {boolean} pure
 @property {boolean} hideIndicator
 @property {string} message
 @property {number} progress
 */

/**
 uiState definition
 @typedef {Object} uiState
 @property {loader} loader
 @property {modal} modal
 */

const initialState = {
  loader: {
    show: false,
    hideIndicator: false,
    message: '',
    progress: 0,
  },
  modal: {
    modalVisible: false,
    modalText: '',
    okText: '',
    cancelText: '',
    onOk: null,
    onCancel: null,
  },
};

export const uiReducer = produce((/**uiState*/ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.TOGGLE_LOADER_INDICATOR:
      draft.loader.show = payload;
      draft.loader.hideIndicator = false;
      draft.loader.message = '';
      draft.loader.progress = 0;
      break;
    case actionTypes.SET_MODAL:
      Object.assign(draft.modal, payload);
      break;
    // case actionTypes.SET_APP_VIDEOS:
    //   draft.appVideos = payload;
    //   break;

    default:
      break;
  }
}, initialState);
