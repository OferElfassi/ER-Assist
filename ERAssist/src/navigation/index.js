import React from 'react';
import {mainRoot} from './main-root';
import {authRoot} from './auth-root';
import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {Provider} from 'react-redux';
import Loader from '../components/Loader/Loader';
import CustomModal from '../components/CustomModal/CustomModal';
import Header from './Header';
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ReportsScreen,
  FormsScreen,
  ManageScreen,
  Drawer,
  TestScreen,
} from '../screens';

const WrapScreen = (ReduxScreen, store) => props =>
  (
    <Provider store={store}>
      <ReduxScreen {...props} />
      <Loader {...props} />
      <CustomModal {...props} />
    </Provider>
  );
const registerScreens = store => {
  //=========================HomeScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.home',
    () => withNavigationProvider(WrapScreen(HomeScreen, store)),
    () => HomeScreen,
  );
  //=========================LoginScreen======================//
  Navigation.registerComponent(
    'com.erAssist.auth.login',
    () => withNavigationProvider(WrapScreen(LoginScreen, store)),
    () => LoginScreen,
  );
  //=========================SignupScreen======================//
  Navigation.registerComponent(
    'com.erAssist.auth.signup',
    () => withNavigationProvider(WrapScreen(SignupScreen, store)),
    () => SignupScreen,
  );
  //=========================FormsScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.forms',
    () => withNavigationProvider(WrapScreen(FormsScreen, store)),
    () => FormsScreen,
  );
  //=========================ReportsScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.reports',
    () => withNavigationProvider(WrapScreen(ReportsScreen, store)),
    () => ReportsScreen,
  );
  //=========================ManageScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.manage',
    () => withNavigationProvider(WrapScreen(ManageScreen, store)),
    () => ManageScreen,
  );
  //=========================Drawer======================//
  Navigation.registerComponent(
    'com.erAssist.main.drawer',
    () => withNavigationProvider(WrapScreen(Drawer, store)),
    () => Drawer,
  );
  //=========================Header======================//
  Navigation.registerComponent(
    'com.erAssist.main.header',
    () => withNavigationProvider(WrapScreen(Header, store)),
    () => Header,
  );
  //=========================TestScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.test',
    () => withNavigationProvider(WrapScreen(TestScreen, store)),
    () => TestScreen,
  );
};

const setMainRoot = () => {
  Navigation.setRoot(mainRoot);
};
const setAuthRoot = () => {
  Navigation.setRoot(authRoot);
};
export {registerScreens, setMainRoot, setAuthRoot};
