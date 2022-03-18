import NetInfo from '@react-native-community/netinfo';

// let baseUrl = 'http://10.0.0.57:3000';
let baseUrl = 'https://er-assist.herokuapp.com';

export const checkConnection = async () => {
  const NetInfoState = await NetInfo.fetch();
  if (!NetInfoState.isConnected || !NetInfoState.isInternetReachable) {
    throw new Error('noWifi');
  }
};

export const get = async (url, auth = '') => {
  await checkConnection();
  return fetch(baseUrl + url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth,
    },
  });
};
export const apiDelete = async (url, auth = '') => {
  await checkConnection();
  return fetch(baseUrl + url, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth,
    },
  });
};

export const put = async (url, body, auth = '') => {
  await checkConnection();
  return fetch(baseUrl + url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + auth,
      'Content-Type': 'application/json',
    },
  });
};

export const patch = async (url, body, auth = '') => {
  await checkConnection();
  return fetch(baseUrl + url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + auth,
      'Content-Type': 'application/json',
    },
  });
};

export const post = async (url, body, auth = '') => {
  await checkConnection();
  return fetch(baseUrl + url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + auth,
      'Content-Type': 'application/json',
    },
  });
};
export const postFile = (url, body, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'POST',
    body: body,
    headers: {
      Authorization: 'Bearer ' + auth,
    },
  });
};

export const handleError = res => {
  if (res.data && res.data[0].msg) return res.data[0].msg;
  else if (res.message) return res.message;
  else return res;
};

export const handleResult = async (
  res,
  errSrc = '  Internal error',
  customMessage = null,
) => {
  let resData = await res.json();
  if (res && resData && res.status < 400) {
    // console.log('response', resData);
    return resData;
  }
  if (customMessage) throw new Error(customMessage);
  else if (!res) throw new Error(`${errSrc}: Server not responding`);
  else if (!resData) throw new Error(`${errSrc}: Server response was empty`);
  else throw new Error(handleError(resData));
};
