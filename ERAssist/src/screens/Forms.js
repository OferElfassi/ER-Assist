import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const FormsScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello Forms Screen 👋</Text>
    </View>
  );
};
FormsScreen.options = {
  topBar: {
    title: {
      text: 'FormsScreen',
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

export default FormsScreen;
