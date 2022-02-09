import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Icon, Incubator, View} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';

const menuIcon = require('../assets/images/menuIcon.png');
const searchIcon = require('../assets/images/searchIcon.png');
const logoPic = require('../assets/images/logo-pic-white.png');
const {TextField} = Incubator;
const Header = props => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = val => {
    setSearchValue(val);
  };
  const handleSearchClick = () => {};
  const handleMenuClick = () => {
    Navigation.mergeOptions('MainBottomTabsId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };
  const handleLogoClick = () => {
    Navigation.mergeOptions('MainBottomTabsId', {
      bottomTabs: {
        currentTabId: 'MainStack',
      },
    });
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={handleMenuClick} style={styles.menuIcon}>
        <Icon size={25} source={menuIcon} />
      </TouchableOpacity>

      {props.showSearch ? (
        <>
          <TextField
            text70
            placeholder="Search"
            onChangeText={handleChange}
            value={searchValue}
            fieldStyle={styles.searchField}
            grey10
          />
          <Button
            onPress={handleSearchClick}
            style={styles.searchIcon}
            size={Button.sizes.small}
            backgroundColor={'transparent'}
            iconStyle={{tintColor: 'white'}}
            iconSource={searchIcon}
          />
        </>
      ) : (
        <TouchableOpacity onPress={handleLogoClick} style={styles.logoPic}>
          <Icon size={55} source={logoPic} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(11,32,83,0.59)',
    // backgroundColor: '#0b2053',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  searchField: {
    marginTop: 3,
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: '80%',
    paddingLeft: 10,
  },
  logoPic: {},
  menuIcon: {
    position: 'absolute',
    left: 15,
    top: 20,
  },
  searchIcon: {
    position: 'absolute',
    right: 35,
    color: 'white',
  },
  shape3: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
