/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as uiActions from '../store/actions/uiActions';

export default function useUi() {
  /** @type {uiState} */
  const values = useSelector(store => store.ui);
  const dispatch = useDispatch();

  const toggleLoaderIndicator = state => {
    dispatch(uiActions.toggleLoaderIndicator(state));
  };

  const setErrorMessage = msg => {
    dispatch(uiActions.setErrorMessage(msg));
  };

  return {
    /** @type {uiState} */
    uiState: values,
    uiActions: {
      toggleLoaderIndicator: useCallback(toggleLoaderIndicator, []),
      setErrorMessage: useCallback(setErrorMessage, []),
    },
  };
}
