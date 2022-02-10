import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uiReducer, userReducer, dataReducer} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {setMainRoot, setAuthRoot} from '../navigation';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const initStore = () => {
  const reducers = {
    ui: uiReducer,
    user: userReducer,
    data: dataReducer,
  };
  const middleware = [applyMiddleware(...[thunk])];

  const reducer = combineReducers(reducers);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, {}, compose(...middleware));

  persistStore(store, null, () => {
    console.log('newstore', store.getState());

    if (!store.getState().user.isLoggedIn) {
      setMainRoot();
    } else {
      setAuthRoot();
    }
  });
  return store;
};

export default initStore;
