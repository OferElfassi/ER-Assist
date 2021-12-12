import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ReportsScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello Reports Screen 👋</Text>
    </View>
  );
};
ReportsScreen.options = {
  topBar: {
    title: {
      text: 'ReportsScreen',
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

export default ReportsScreen;
