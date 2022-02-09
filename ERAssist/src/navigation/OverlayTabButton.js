import React from 'react';
import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, Colors, Icon} from 'react-native-ui-lib';

const redPlusIcon = require('../assets/images/redplus.png');
const {height, width} = Dimensions.get('window');
const OverlayTabButton = props => {
  const navigate = () => {
    Navigation.dismissOverlay(props.componentId);
    Navigation.mergeOptions('MainBottomTabsId', {
      bottomTabs: {
        currentTabId: 'GeneratorStack',
      },
    });

    // Navigation.showModal({
    //   stack: {
    //     id: 'GeneratorStack',
    //     children: [
    //       {
    //         component: {
    //           name: 'com.erAssist.main.generator',
    //         },
    //       },
    //     ],
    //   },
    // });
  };

  return (
    <View style={styles.root}>
      {/*<Button*/}
      {/*  round*/}
      {/*  backgroundColor="#FF69B4"*/}
      {/*  style={styles.btnStyle}*/}
      {/*  iconSource={redPlusIcon}*/}
      {/*  iconStyle={{tintColor: Colors.white}}*/}
      {/*  size={Button.sizes.xSmall}*/}
      {/*  onPress={navigate}*/}
      {/*/>*/}
      <TouchableOpacity onPress={navigate}>
        <Icon
          // margin-30
          size={50}
          // tintColor={customColor ? color as string : undefined}
          source={redPlusIcon}
        />
        {/*<Text style={styles.textStyle}>+</Text>*/}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 64,
    height: 64,
    backgroundColor: '#102c70',
    // backgroundColor: '#0b2053',
    position: 'absolute',
    left: width / 2 - 64 / 2,
    bottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
  },
  btnStyle: {
    position: 'absolute',
  },
});

export default OverlayTabButton;
