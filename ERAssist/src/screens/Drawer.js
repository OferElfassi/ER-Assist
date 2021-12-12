import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Drawer = props => {
  return (
    <view style={styles.root}>
      <Text>Drawer</Text>
    </view>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default Drawer;
