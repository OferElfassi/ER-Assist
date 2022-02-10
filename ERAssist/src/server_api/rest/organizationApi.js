import * as serverApi from '../serverApi';

export const getOrganizationsList = async () => {
  try {
    let res = await serverApi.get('/organizations');
    return await serverApi.handleResult(res, 'Get Organizations Error');
  } catch (e) {
    throw e;
  }
};
export const addOrganizations = async organization => {
  try {
    let res = await serverApi.post(
      '/organizations',
      /**organization*/ organization,
    );
    return await serverApi.handleResult(res, 'Add Organizations Error');
  } catch (e) {
    throw e;
  }
};
