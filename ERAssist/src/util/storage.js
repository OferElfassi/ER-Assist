import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(val));
    return true;
  } catch (error) {
    throw new Error('error writing local storage');
  }
};

export const retrieveData = async key => {
  try {
    const res = await AsyncStorage.getItem(key);
    return JSON.parse(res);
  } catch (error) {
    throw new Error('error reading local storage');
  }
};
export const clearStorage = async key => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw new Error('error clearing local storage');
  }
};
