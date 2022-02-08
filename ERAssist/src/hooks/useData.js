/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as dataActions from '../store/actions/dataActions';

export default function useData() {
  /** @type {dataState} */
  const values = useSelector(store => store.data);
  const dispatch = useDispatch();

  const getOrganizations = () => {
    dispatch(dataActions.getOrganizations());
  };

  return {
    /** @type {dataState} */
    dataState: values,
    dataActions: {
      getOrganizations: useCallback(getOrganizations, []),
    },
  };
}
