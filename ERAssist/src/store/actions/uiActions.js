import * as actionTypes from '../actionTypes';
import {hideMessageModal, showMessageModal} from '../../navigation';

export const toggleLoaderIndicator = state => {
  return {
    type: actionTypes.TOGGLE_LOADER_INDICATOR,
    payload: state,
  };
};

export const setModal = (/** @type {modal} */ modalData) => {
  modalData.modalVisible && modalData.modalVisible !== ''
    ? showMessageModal()
    : hideMessageModal();
  return {
    type: actionTypes.SET_MODAL,
    payload: modalData,
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch(
      setModal({
        modalVisible: false,
        modalText: '',
        okText: '',
        cancelText: '',
        onOk: null,
        onCancel: null,
      }),
    );
  };
};

export const setErrorMessage = (errMsg, source = '') => {
  return (dispatch, getState) => {
    dispatch(
      setModal({
        modalVisible: true,
        modalText: errMsg,
        okText: 'ok',
        cancelText: '',
        onOk: () => {
          dispatch(closeModal());
        },
      }),
    );
  };
};
export const setMessageModal = (message, onOk = null) => {
  return (dispatch, getState) => {
    dispatch(
      setModal({
        modalVisible: true,
        modalText: message,
        okText: 'ok',
        cancelText: '',
        onOk: () => {
          if (onOk) {
            onOk();
          }
          dispatch(closeModal());
        },
      }),
    );
  };
};
