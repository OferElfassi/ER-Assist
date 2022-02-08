import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-lib';

const Header = props => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.root}>
      <Text b1 darkBlue>
        {props.title}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  navBtnTouchable: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  navBtnText: {
    color: '#2E8BFB',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
