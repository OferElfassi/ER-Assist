import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {setMainRoot} from '../navigation';
import {Navigation} from 'react-native-navigation';
import {useNavigationCommand} from 'react-native-navigation-hooks';
import {useUser} from '../hooks';
import {Text, View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getInitials} from '../util/getInitials';

const Drawer = props => {
  const [activeScreen, setActiveScreen] = useState('home');
  const {userActions, userState} = useUser();
  useNavigationCommand((commandName, {commandId, layout}) => {
    console.log(`Command ${commandName} (${commandId}) invoked`);
  });
  useEffect(() => {
    // Navigation.g;
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.root}>
      {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>*/}
      {/*    */}
      {/*</ImageBackground>*/}
      <View
        style={{
          height: '25%',
          backgroundColor: 'rgba(255,255,255,0.37)',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: 'rgba(222,255,213,0.78)',
            backgroundColor: 'rgba(218,224,255,0.42)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {getInitials(userState.userInfo.fullName)}
          </Text>
        </View>
        <Text
          style={{
            color: '#1b0455',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {userState.userInfo.fullName}
        </Text>
        <Text
          style={{
            color: '#1b0455',
            fontSize: 18,
          }}>
          {userState.userInfo.email}
        </Text>
      </View>

      <View style={{height: '35%'}} spread>
        <Icon.Button
          size={25}
          color={'black'}
          name="home"
          backgroundColor="transparent"
          onPress={setMainRoot}>
          <Text b1 darkBlue>
            Home
          </Text>
        </Icon.Button>

        <Icon.Button
          size={25}
          color={'black'}
          name="file-text-o"
          backgroundColor="transparent"
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
            });
            Navigation.push('MainStack', {
              component: {
                name: 'com.erAssist.main.reports',
              },
            });
          }}>
          <Text b1 darkBlue>
            Reports
          </Text>
        </Icon.Button>

        <Icon.Button
          size={25}
          color={'black'}
          name="wrench"
          backgroundColor="transparent"
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
            });
            Navigation.push('MainStack', {
              component: {
                name: 'com.erAssist.main.manage',
              },
            });
          }}>
          <Text b1 darkBlue>
            Manage
          </Text>
        </Icon.Button>
        {/*  ********************************  test screen **********************************************/}
        <Icon.Button
          size={25}
          color={'black'}
          name="wrench"
          backgroundColor="transparent"
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
            });
            Navigation.push('MainStack', {
              component: {
                name: 'com.erAssist.main.test',
              },
            });
          }}>
          <Text b1 darkBlue>
            Test Screen
          </Text>
        </Icon.Button>
        {/*  ********************************  test screen **********************************************/}
        <Icon.Button
          size={33}
          color={'black'}
          name="user"
          backgroundColor="transparent"
          onPress={setMainRoot}>
          <Text b1 darkBlue>
            Profile
          </Text>
        </Icon.Button>
      </View>
      <View absB marginB={25}>
        <Icon.Button
          iconStyle={{
            transform: [{rotateY: '180deg'}],
          }}
          color={'black'}
          name="sign-out"
          backgroundColor="transparent"
          onPress={userActions.handleLogOut}>
          <Text b1 danger>
            Logout
          </Text>
        </Icon.Button>
      </View>
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

export default Drawer;
