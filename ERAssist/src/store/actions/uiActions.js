import * as actionTypes from '../actionTypes';

export const toggleLoaderIndicator = state => {
  return {
    type: actionTypes.TOGGLE_LOADER_INDICATOR,
    payload: state,
  };
};

export const setModal = (/** @type {modal} */ modalData) => {
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
