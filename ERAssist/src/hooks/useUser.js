/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as userActions from '../store/actions/userActions';

export default function useUser() {
  /** @type {userState} */
  const values = useSelector(store => store.user);
  const dispatch = useDispatch();

  const setUserData = userData => {
    dispatch(userActions.setUserData(userData));
  };

  return {
    /** @type {userState} */
    userState: values,
    userActions: {
      setUserData: useCallback(setUserData, []),
    },
  };
}
