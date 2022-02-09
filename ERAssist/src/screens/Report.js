import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';

const ReportScreen = props => {
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'Report'} />
      <Text>Hello Reports Screen 👋</Text>
    </View>
  );
};
ReportScreen.options = {
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

export default ReportScreen;
