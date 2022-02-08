import * as serverApi from '../serverApi';

export const login = async (email, password) => {
  try {
    let res = await serverApi.post('/auth/login', {email, password});
    return await serverApi.handleResult(res, 'SignIn Error');
  } catch (e) {
    throw e;
  }
};

export const signup = async (/**signupInfo*/ signupInfo) => {
  try {
    let res = await serverApi.post('/auth/signup', signupInfo);
    return await serverApi.handleResult(res, 'Signup Error');
  } catch (e) {
    throw e;
  }
};
