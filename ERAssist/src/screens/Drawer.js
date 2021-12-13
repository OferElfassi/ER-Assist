import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {setAuthRoot, setMainRoot} from '../navigation';
import {Navigation} from 'react-native-navigation';
import {useNavigationCommand} from 'react-native-navigation-hooks';

const Drawer = props => {
  const [activeScreen, setActiveScreen] = useState('home');
  useNavigationCommand((commandName, {commandId, layout}) => {
    console.log(`Command ${commandName} (${commandId}) invoked`);
  });
  useEffect(() => {
    // Navigation.g;
  }, []);

  const logoutAlert = () =>
    Alert.alert(
      'Logout',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            {
              setAuthRoot();
            }
          },
        },
      ],
      {cancelable: false},
    );

  return (
    <View style={styles.root}>
      <View
        style={{
          height: '25%',
          backgroundColor: '#2E8BFB',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            RS
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Rahul Singh
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}>
          rahul.singh@gmail.com
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navBtnTouchable}
        onPress={() => {
          setMainRoot();
        }}>
        <Text style={styles.navBtnText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtnTouchable}
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
              name: 'com.erAssist.main.forms',
            },
          });
        }}>
        <Text style={styles.navBtnText}>Forms</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtnTouchable}
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
        <Text style={styles.navBtnText}>Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtnTouchable}
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
        <Text style={styles.navBtnText}>Manage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBtnTouchable} onPress={logoutAlert}>
        <Text style={styles.navBtnText}>Logout</Text>
      </TouchableOpacity>
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
    backgroundColor: 'whitesmoke',
  },
});

export default Drawer;
