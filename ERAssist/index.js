/**
 * ER-Assist Apppp
 * https://github.com/OferElfassi/ER-Assist
 */
import {Navigation} from 'react-native-navigation';
import {setAuthRoot, setMainRoot, registerScreens} from './src/navigation';
import {loadColorsSettings, loadColorScheme} from './src/theam/colors';
import initStore from './src/store/store';

loadColorsSettings();
loadColorScheme('light');

const isUserLoggedIn = () => {
  return false;
};

Navigation.events().registerAppLaunchedListener(() => {
  const store = initStore();
  registerScreens(store);
  if (isUserLoggedIn()) {
    setMainRoot();
  } else {
    setAuthRoot();
  }
});
