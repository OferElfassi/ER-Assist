/**
 * ER-Assist Apppp
 * https://github.com/OferElfassi/ER-Assist
 */
import {Navigation} from 'react-native-navigation';
import {setAuthRoot, setMainRoot, registerScreens} from './src/navigation';
import {loadColorsSettings, loadColorScheme} from './src/theam/colors';
import initStore from './src/store/store';
const store = initStore();
loadColorsSettings();
loadColorScheme('light');

const isUserLoggedIn = () => {
  return false;
};

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store);
  if (isUserLoggedIn()) {
    setMainRoot();
  } else {
    setAuthRoot();
  }
});
