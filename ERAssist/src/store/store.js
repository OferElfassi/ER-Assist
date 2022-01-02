import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {uiReducer, userReducer} from './reducers';

const initStore = () => {
  const reducers = {
    ui: uiReducer,
    user: userReducer,
  };
  const middleware = [applyMiddleware(...[thunk])];

  const reducer = combineReducers(reducers);

  return createStore(reducer, {}, compose(...middleware));
};

export default initStore;
