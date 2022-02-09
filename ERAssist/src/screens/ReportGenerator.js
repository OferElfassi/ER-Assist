import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
const ReportGenerator = props => {
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'Create Report'} />
      <Text>Hello ReportGenerator Screen 👋</Text>
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
});

export default ReportGenerator;
