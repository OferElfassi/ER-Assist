import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ReportScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello Reports Screen 👋</Text>
    </View>
  );
};
ReportScreen.options = {
  topBar: {
    title: {
      text: 'ReportScreen',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default ReportScreen;
