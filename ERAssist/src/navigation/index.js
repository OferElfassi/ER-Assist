import {mainRoot} from './main-root';
import {authRoot} from './auth-root';
import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ReportsScreen,
  FormsScreen,
  ManageScreen,
  Drawer,
} from '../screens';

const registerScreens = () => {
  //=========================HomeScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.home',
    () => withNavigationProvider(HomeScreen),
    () => HomeScreen,
  );
  //=========================LoginScreen======================//
  Navigation.registerComponent(
    'com.erAssist.auth.login',
    () => withNavigationProvider(LoginScreen),
    () => LoginScreen,
  );
  //=========================SignupScreen======================//
  Navigation.registerComponent(
    'com.erAssist.auth.signup',
    () => withNavigationProvider(SignupScreen),
    () => SignupScreen,
  );
  //=========================FormsScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.forms',
    () => withNavigationProvider(FormsScreen),
    () => FormsScreen,
  );
  //=========================ReportsScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.reports',
    () => withNavigationProvider(ReportsScreen),
    () => ReportsScreen,
  );
  //=========================ManageScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.manage',
    () => withNavigationProvider(ManageScreen),
    () => ManageScreen,
  );
  //=========================Drawer======================//
  Navigation.registerComponent(
    'com.erAssist.main.drawer',
    () => withNavigationProvider(Drawer),
    () => Drawer,
  );
};

const setMainRoot = () => {
  Navigation.setRoot(mainRoot);
};
const setAuthRoot = () => {
  Navigation.setRoot(authRoot);
};
export {registerScreens, setMainRoot, setAuthRoot};
