import React from 'react';
import {mainRoot} from './main-root';
import {authRoot} from './auth-root';
import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {Provider} from 'react-redux';
import Loader from '../components/Loader/Loader';
import CustomModal from '../components/CustomModal/CustomModal';
import Header from './Header';
import OverlayTabButton from './OverlayTabButton';
import {
  Drawer,
  FormsScreen,
  HomeScreen,
  LoginScreen,
  ManageScreen,
  ReportGenerator,
  ReportScreen,
  SignupScreen,
  UserScreen,
} from '../screens';

const WrapScreen = (ReduxScreen, store) => props =>
  (
    <Provider store={store}>
      <ReduxScreen {...props} />
      <Loader {...props} />
      <CustomModal {...props} />
    </Provider>
  );

const registerMiddleTabButton = () => {
  Navigation.showOverlay({
    component: {
      name: 'com.erAssist.main.overlay_tab_button',
      id: 'PlusBtn',
      options: {
        layout: {
          id: 'PlusBtn',
        },
        overlay: {
          interceptTouchOutside: false,
          attach: {
            layoutId: 'MainBottomTabsId',
            anchor: {
              id: 'MainBottomTabsId',
            },
          },
        },
      },
    },
  }).then(() => {});
};
const applyModalDismissListener = () => {
  Navigation.events().registerComponentDidAppearListener(({componentId}) => {
    if (componentId === 'sideDrawer') {
      Navigation.dismissOverlay('PlusBtn').then(() => {
        console.log('plus btn registered');
      });
    }
  });

  Navigation.events().registerComponentDidDisappearListener(({componentId}) => {
    if (componentId === 'sideDrawer') {
      registerMiddleTabButton();
    }
  });
};
const applyBottomTabSelectedListener = () => {
  Navigation.events().registerBottomTabSelectedListener(
    ({selectedTabIndex, unselectedTabIndex}) => {
      if (selectedTabIndex == 1) {
        Navigation.mergeOptions('home_Screen_id', {
          bottomTabs: {currentTabIndex: unselectedTabIndex},
        });
      }
    },
  );
};

const applyDefaultOptions = () => {
  Navigation.setDefaultOptions({
    bottomTab: {
      fontSize: 12,
      iconColor: 'white',
      textColor: 'white',
      selectedIconColor: '#2E8BFB',
      selectedTextColor: '#2E8BFB',
      backgroundColor: '#0b2053',
    },
    topBar: {
      height: 65,
      color: 'transparent',
      translucent: true,
      drawBehind: true,
      visible: true,
      animate: true,
    },
    statusBar: {
      // visible: false,
      backgroundColor: '#0b2053',
    },
  });
};

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
  //=========================ReportGenerator======================//
  Navigation.registerComponent(
    'com.erAssist.main.generator',
    () => withNavigationProvider(WrapScreen(ReportGenerator, store)),
    () => ReportGenerator,
  );
  //=========================ReportScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.report',
    () => withNavigationProvider(WrapScreen(ReportScreen, store)),
    () => ReportScreen,
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
  //=========================OverlayTabButton======================//
  Navigation.registerComponent(
    'com.erAssist.main.overlay_tab_button',
    () => withNavigationProvider(WrapScreen(OverlayTabButton, store)),
    () => OverlayTabButton,
  );
  //=========================UserScreen======================//
  Navigation.registerComponent(
    'com.erAssist.main.user',
    () => withNavigationProvider(WrapScreen(UserScreen, store)),
    () => UserScreen,
  );

  // registerMiddleTabButton();
  applyBottomTabSelectedListener();
  applyModalDismissListener();
  applyDefaultOptions();
};
const setMainRoot = () => {
  Navigation.setRoot(mainRoot).then(() => {
    registerMiddleTabButton();
  });
};
const setAuthRoot = () => {
  Navigation.setRoot(authRoot).then(() => {
    Navigation.dismissOverlay('PlusBtn').then(() => {
      console.log('overlay dismissed');
    });
  });
};
export {registerScreens, setMainRoot, setAuthRoot};
