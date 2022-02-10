/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as dataActions from '../store/actions/dataActions';

export default function useData() {
  /** @type {dataState} */
  const values = useSelector(store => store.data);
  const dispatch = useDispatch();

  const getOrganizations = () => {
    dispatch(dataActions.getOrganizations());
  };
  const getUsers = () => {
    dispatch(dataActions.getUsers());
  };
  const getReports = () => {
    dispatch(dataActions.getReports());
  };
  const deleteUser = user => {
    dispatch(dataActions.deleteUser(user));
  };
  const deleteReport = report => {
    dispatch(dataActions.deleteReport(report));
  };

  return {
    /** @type {dataState} */
    dataState: values,
    dataActions: {
      getOrganizations: useCallback(getOrganizations, []),
      getUsers: useCallback(getUsers, []),
      getReports: useCallback(getReports, []),
      deleteUser: useCallback(deleteUser, []),
    },
  };
}
