import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {useNavigationCommand} from 'react-native-navigation-hooks';
import {useUser} from '../../hooks';
import {Text} from 'react-native-ui-lib';

const Header = props => {
  const [activeScreen, setActiveScreen] = useState('home');
  const {userActions, userState} = useUser();
  useNavigationCommand((commandName, {commandId, layout}) => {
    console.log(`Command ${commandName} (${commandId}) invoked`);
  });
  useEffect(() => {
    // Navigation.g;
  }, []);

  const getUserInitials = () => {
    const fullNameArr = userState.userInfo.fullName.split(' ');
    return fullNameArr[0].toUpperCase()[0] + fullNameArr[1].toUpperCase()[0];
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.root}>
      <Text b1 darkBlue>
        Profile
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
  },
});

export default Header;
