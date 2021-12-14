/**
 * ER-Assist Apppp
 * https://github.com/OferElfassi/ER-Assist
 */
import {Navigation} from 'react-native-navigation';
import {setAuthRoot, setMainRoot, registerScreens} from './src/navigation';

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
