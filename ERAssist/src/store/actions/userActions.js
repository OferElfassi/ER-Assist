import * as actionTypes from '../actionTypes';

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

export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch(setUserData(tempUser));
    } catch (e) {
      console.warn('login error', e);
    }
  };
};
