import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ScreenHeader from '../navigation/ScreenHeader';

const ManageScreen = props => {
  // useEffect(() => {
  //   Navigation.mergeOptions(props.componentId, {
  //     topBar: {
  //       background: {
  //         component: {
  //           name: 'com.erAssist.main.header',
  //           passProps: {title: 'Manage'},
  //         },
  //       },
  //     },
  //   });
  // }, []);
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'Manage'} />
      <Text>Hello Manage Screen 👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default ManageScreen;
