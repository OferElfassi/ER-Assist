import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
import {Icon} from 'react-native-ui-lib';

const micIcon = require('../assets/images/mic-icon.png');
const ReportGenerator = props => {
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'Create Report'} />
      <Text style={styles.title}>Push the button to start voice report.</Text>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => {}}>
          <Icon size={100} source={micIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
// ReportGenerator.options = {
//   topBar: {
//     title: {
//       text: 'Create Report',
//     },
//   },
// };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  title: {
    marginTop: 30,
    fontSize: 20,
  },
  content: {
    marginTop: 70,
  },
});

export default ReportGenerator;
