import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Home = props => {
  return (
    <view style={styles.root}>
      <Text>Home</Text>
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

export default Home;
