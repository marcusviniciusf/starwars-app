import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  FAVORITES: '@starwarsapp/favorites',
};

const setItem = (item: unknown, key: keyof typeof KEYS) => {
  const value = JSON.stringify(item);
  return AsyncStorage.setItem(KEYS[key], value);
};
const getItem = async (key: keyof typeof KEYS) => {
  const item = await AsyncStorage.getItem(KEYS[key]);
  return item ? JSON.parse(item) : null;
};

export {setItem, getItem};
