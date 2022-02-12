import * as actionTypes from '../actionTypes';
import * as uiActions from './uiActions';
import {setAuthRoot, setMainRoot} from '../../navigation';
import {userApi} from '../../server_api/rest';
import {Navigation} from 'react-native-navigation';

const tempUser = {
  fullName: 'Ofer Elfassi',
  email: 'ofer221@hotmail.com',
  id: '84212659',
  address: 'Tel-Aviv Cordovero st 15',
  phone: '0522772603',
  role: 'reporter',
  gender: 'male',
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
      // dispatch(setUserData(tempUser));
      // setMainRoot();
      const userInfo = await userApi.login(email, password);
      if (userInfo) {
        console.warn(userInfo.data);
        dispatch(setUserData(userInfo.data));
        setMainRoot();
      } else {
        throw new Error('Login Error');
      }
    } catch (e) {
      console.warn('login error', e);
    }
  };
};

export const signup = (/**signupInfo*/ signupInfo) => {
  return async dispatch => {
    try {
      console.log({signupInfo});
      await userApi.signup(signupInfo);
      uiActions.setMessageModal('Signup Success');
      Navigation.mergeOptions('AuthBottomTabsId', {
        bottomTabs: {
          currentTabId: 'login_Screen_id',
        },
      });
    } catch (e) {
      console.warn('signup error', e);
    }
  };
};

// export const deleteUser = deleteUserId => {
//   return async (dispatch, getState) => {
//     try {
//       const {
//         user: {userId},
//       } = getState();
//       await userApi.deleteUser(deleteUserId);
//       userId(userId === deleteUserId);
//       {
//         dispatch(logout());
//         setAuthRoot();
//       }
//     } catch (e) {
//       console.warn('signup error', e);
//     }
//   };
// };

export const handleLogOut = () => {
  return async dispatch => {
    try {
      dispatch(
        uiActions.setModal({
          modalVisible: true,
          modalText: 'Do you want to log out?',
          okText: 'Yes',
          cancelText: 'No',
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
