import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ManageScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello Manage Screen 👋</Text>
    </View>
  );
};
ManageScreen.options = {
  topBar: {
    title: {
      text: 'ManageScreen',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default ManageScreen;
