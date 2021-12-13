/**
 * ER-Assist App
 * https://github.com/OferElfassi/ER-Assist
 */
import {Navigation} from 'react-native-navigation';
import {setAuthRoot, setMainRoot, registerScreens} from './src/navigation';
import {loadColorsSettings, loadColorScheme} from './src/theam/colors';

loadColorsSettings();
loadColorScheme('light');
registerScreens();

const isUserLoggedIn = () => {
  return false;
};

Navigation.events().registerAppLaunchedListener(() => {
  if (isUserLoggedIn()) {
    setMainRoot();
  } else {
    setAuthRoot();
  }
});
