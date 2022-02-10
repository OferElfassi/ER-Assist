export const replaceId = (arr, destIdName = 'id') => {
  const modifiedArr = arr.map(obj => {
    return {
      ...obj,
      [destIdName]: obj._id,
    };
  });
  arr = modifiedArr;
  return modifiedArr;
};
