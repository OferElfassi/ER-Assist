import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
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
    // return () => {
    //   alert('cc');
    // };
  }, []);

  return (
    <View style={styles.root}>
      {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>*/}
      {/*    */}
      {/*</ImageBackground>*/}
      <View
        style={{
          height: '25%', // backgroundColor: 'rgba(255,255,255,0.37)',
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
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {getInitials(userState.userInfo.fullName)}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 15,
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {userState.userInfo.fullName}
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
          }}>
          {userState.userInfo.email}
        </Text>
      </View>

      <View style={{height: '25%'}} spread>
        <Icon.Button
          size={25}
          color={'white'}
          name="home"
          backgroundColor="transparent"
          onPress={() => {
            Navigation.mergeOptions('MainBottomTabsId', {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
              bottomTabs: {
                currentTabId: 'MainStack',
              },
            });
          }}>
          <Text b1 white>
            Home
          </Text>
        </Icon.Button>
        <Icon.Button
          size={25}
          color={'white'}
          name="wrench"
          backgroundColor="transparent"
          onPress={() => {
            Navigation.mergeOptions('MainBottomTabsId', {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
              bottomTabs: {
                currentTabId: 'ManageStack',
              },
            });
          }}>
          <Text b1 white>
            Manage
          </Text>
        </Icon.Button>
        <Icon.Button
          size={33}
          color={'white'}
          name="user"
          backgroundColor="transparent"
          onPress={setMainRoot}>
          <Text b1 white>
            Profile
          </Text>
        </Icon.Button>
      </View>
      <View absB marginB={25}>
        <Icon.Button
          iconStyle={{
            transform: [{rotateY: '180deg'}],
          }}
          color={'white'}
          name="sign-out"
          backgroundColor="transparent"
          onPress={userActions.handleLogOut}>
          <Text b1 danger>
            Logout
          </Text>
        </Icon.Button>
      </View>
    </View>
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
    backgroundColor: '#0b2053',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.43)',
  },
});

export default Drawer;
