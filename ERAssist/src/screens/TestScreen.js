import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
const TestScreen = props => {
  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        background: {
          component: {
            name: 'com.erAssist.main.header',
            passProps: {title: 'TestScreen'},
          },
        },
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <Text>Hello Manage Screen 👋</Text>
    </View>
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

export default TestScreen;
