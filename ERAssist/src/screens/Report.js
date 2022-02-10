import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

const ReportScreen = props => {
  const {report} = props;
  useEffect(() => {
    console.log(props);
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        backButton: {visible: false},
        background: {
          component: {
            name: 'com.erAssist.main.header',
            passProps: {title: 'Report'},
          },
        },
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <ScreenHeader
        pageTitle={'Report'}
        pageSubTitle={report.patient.fullName}
      />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Info</Text>
          <View style={styles.field}>
            <Text style={styles.label}>Report Date:</Text>
            <Text style={styles.infoText}>{report.timestamp}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Report Id:</Text>
            <Text style={styles.infoText}>{report.id}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Patient name:</Text>
            <Text style={styles.infoText}>{report.patient.fullName}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Patient ID:</Text>
            <Text style={styles.infoText}>{report.patient.id}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Reporter name:</Text>
            <Text style={styles.infoText}>{report.reporter.fullName}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Reporter ID:</Text>
            <Text style={styles.infoText}>{report.reporter.id}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medicines</Text>
          {report.medicines.map(med => {
            return (
              <View style={styles.field}>
                <Text style={styles.label}>{med.name}:</Text>
                <Text style={styles.infoText}>{med.amount}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Treatment</Text>
          {report.treatment.map(treat => {
            return (
              <View style={styles.field}>
                <Text style={styles.label}>{treat.action}:</Text>
                <Text style={styles.infoText}>{treat.timestamp}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Anamnesis</Text>
          <Text style={styles.infoText}>{report.anamnesis}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

ReportScreen.propTypes = {
  report: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    flex: 1, // alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  content: {
    // flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  section: {
    marginTop: 10,
  },
  field: {
    flexDirection: 'row', // marginTop: 5,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#1b0455',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  label: {fontSize: 18, fontWeight: 'bold', color: '#000'},
  infoText: {fontSize: 14, color: '#000', marginLeft: 15},
});

export default ReportScreen;
