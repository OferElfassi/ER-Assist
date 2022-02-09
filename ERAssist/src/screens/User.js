import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';

const UserScreen = props => {
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'UserScreen'} />
      <Text>Hello UserScreen Screen 👋</Text>
    </View>
  );
};
UserScreen.options = {
  topBar: {},
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default UserScreen;
