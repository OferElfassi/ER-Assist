import * as actionTypes from '../actionTypes';
import * as uiActions from './uiActions';
import {setAuthRoot, setMainRoot} from '../../navigation';

const tempUser = {
  fullName: 'Ofer Elfassi',
  email: 'ofer221@hotmail.com',
  userId: '84212659',
  address: 'Tel-Aviv Cordovero st 15',
  phone: '0522772603',
  isManager: false,
};

export const setUserData = userData => {
  return {
    type: actionTypes.SET_USER,
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOG_OUT,
    payload: null,
  };
};

export const login = ({email, password}) => {
  return async dispatch => {
    try {
      dispatch(setUserData(tempUser));
      setMainRoot();
    } catch (e) {
      console.warn('login error', e);
    }
  };
};

export const signup = (/**userState*/ signupInfo) => {
  return async dispatch => {
    try {
      console.log({signupInfo});
    } catch (e) {
      console.warn('login error', e);
    }
  };
};

export const handleLogOut = () => {
  return async dispatch => {
    try {
      dispatch(
        uiActions.setModal({
          modalVisible: true,
          modalText: 'Do you want to log out?',
          okText: 'ok',
          cancelText: 'Cancel',
          onOk: () => {
            dispatch(uiActions.closeModal());
            dispatch(logout());
            setAuthRoot();
          },
          onCancel: () => {
            dispatch(uiActions.closeModal());
          },
        }),
      );
    } catch (e) {
      console.warn('login error', e);
    }
  };
};
