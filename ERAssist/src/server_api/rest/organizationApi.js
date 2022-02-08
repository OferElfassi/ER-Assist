import * as serverApi from '../serverApi';

export const getOrganizationsList = async () => {
  try {
    let res = await serverApi.get('/organizations');
    return await serverApi.handleResult(res, 'Get Organizations Error');
  } catch (e) {
    throw e;
  }
};
