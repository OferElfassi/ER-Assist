import * as serverApi from '../serverApi';

export const getReports = async () => {
  try {
    let res = await serverApi.get('/reports');
    return await serverApi.handleResult(res, 'get reports Error');
  } catch (e) {
    throw e;
  }
};
export const addReport = async (/**signupInfo*/ reportInfo) => {
  try {
    let res = await serverApi.post('/reports', reportInfo);
    return await serverApi.handleResult(res, 'add report Error');
  } catch (e) {
    throw e;
  }
};

export const deleteReport = async reportId => {
  try {
    let res = await serverApi.apiDelete(`/reports/${reportId}`);
    return await serverApi.handleResult(res, 'delete report Error');
  } catch (e) {
    throw e;
  }
};
