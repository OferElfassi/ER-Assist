/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as uiActions from '../store/actions/uiActions';

export default function useUi() {
  /** @type {uiState} */
  const values = useSelector(store => store.ui);
  const dispatch = useDispatch();

  const toggleLoader = state => {
    dispatch(uiActions.toggleLoader(state));
  };

  return {
    /** @type {uiState} */
    userState: values,
    userActions: {
      toggleLoader: useCallback(toggleLoader, []),
    },
  };
}
