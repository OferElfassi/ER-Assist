import {Colors, Typography, Spacings} from 'react-native-ui-lib';

export const loadColorsSettings = () => {
  Colors.loadSchemes({
    light: {
      screenBG: 'transparent',
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
    },
    dark: {
      screenBG: Colors.grey10,
      textColor: Colors.white,
      moonOrSun: Colors.grey80,
      mountainForeground: Colors.violet10,
      mountainBackground: Colors.violet20,
    },
  });

  Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
    darkBlue: '#263260',
    danger: '#dc6f1f',
  });

  Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
    h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
    h3: {fontSize: 34, fontWeight: '300', lineHeight: 48},
    h4: {fontSize: 22, fontWeight: '300', lineHeight: 32},
    h5: {fontSize: 12, fontWeight: '300', lineHeight: 16},
    b1: {fontSize: 22, fontWeight: '700', letterSpacing: 4, lineHeight: 32},
    // light1: {fontSize: 34, fontWeight: '150', letterSpacing: 4, lineHeight: 32},
    light2: {fontSize: 22, fontWeight: '700', letterSpacing: 4, lineHeight: 32},
  });

  Spacings.loadSpacings({
    page: 20,
  });
};

export const loadColorScheme = scheme => {
  Colors.setScheme(scheme);
};
