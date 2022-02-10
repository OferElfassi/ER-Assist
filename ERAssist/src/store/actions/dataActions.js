import * as actionTypes from '../actionTypes';
import {organizationApi, reportApi, userApi} from '../../server_api/rest';
import {replaceId} from '../../util/replaceId';

export const setOrganizations = organizations => {
  return {
    type: actionTypes.SET_ORGANIZATIONS_LIST,
    payload: organizations,
  };
};

export const setUsers = users => {
  return {
    type: actionTypes.SET_USERS_LIST,
    payload: users,
  };
};

export const setReports = reports => {
  return {
    type: actionTypes.SET_REPORTS_LIST,
    payload: reports,
  };
};
export const removeReport = reportId => {
  return {
    type: actionTypes.REMOVE_REPORT,
    payload: reportId,
  };
};
export const removeUser = userId => {
  return {
    type: actionTypes.REMOVE_USER,
    payload: userId,
  };
};

export const getOrganizations = () => {
  return async dispatch => {
    try {
      const organizations = await organizationApi.getOrganizationsList();
      dispatch(setOrganizations(replaceId(organizations.data)));
      // dispatch(
      //   setOrganizations([
      //     {name: 'Ichilov', id: 'ichilov'},
      //     {name: 'Rambam', id: 'rambam'},
      //     {name: 'Ziv', id: 'ziv'},
      //   ]),
      // );
    } catch (e) {
      console.warn('get organizations Error', e);
    }
  };
};
export const getUsers = () => {
  return async (dispatch, getState) => {
    const {
      user: {userInfo},
    } = getState();

    try {
      const users = await userApi.getUsers();
      const filteredUsers = users.data.filter(user => {
        return user.organization === userInfo.organization;
      });
      dispatch(setUsers(replaceId(filteredUsers, 'id')));
    } catch (e) {
      console.warn('get users Error', e);
    }
  };
};

export const getReports = () => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {userInfo},
      } = getState();

      const reports = await reportApi.getReports();
      const filteredReports = reports.data.filter(report => {
        if (report.organization === userInfo.organization) {
          if (userInfo.isManager) {
            return true;
          }
          return report.reporter.id === userInfo.id;
        }
      });
      dispatch(setReports(replaceId(filteredReports)));
    } catch (e) {
      console.warn('get reports Error', e);
    }
  };
};

export const deleteReport = report => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {userInfo},
        data: {reports},
      } = getState();

      if (!userInfo.isManager) {
      }

      await reportApi.deleteReport(report.id);
      dispatch(removeReport(report.id));
    } catch (e) {
      console.warn('get reports Error', e);
    }
  };
};
export const deleteUser = user => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {userInfo},
        data: {reports},
      } = getState();

      if (!userInfo.isManager) {
      }

      await userApi.deleteUser(user.id);
      dispatch(removeUser(user.id));
    } catch (e) {
      console.warn('get reports Error', e);
    }
  };
};
