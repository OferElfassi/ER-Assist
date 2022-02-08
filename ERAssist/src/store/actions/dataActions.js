import * as actionTypes from '../actionTypes';

export const setOrganizations = organizations => {
  return {
    type: actionTypes.SET_ORGANIZATIONS_LIST,
    payload: organizations,
  };
};

export const getOrganizations = () => {
  return async dispatch => {
    try {
      dispatch(
        setOrganizations([
          {name: 'Ichilov', id: 'ichilov'},
          {name: 'Rambam', id: 'rambam'},
          {name: 'Ziv', id: 'ziv'},
        ]),
      );
    } catch (e) {}
  };
};
