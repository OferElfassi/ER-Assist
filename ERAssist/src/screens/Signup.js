import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {setMainRoot} from '../navigation';
import {
  TextField,
  Button,
  View,
  Text,
  Switch,
  Wizard,
  RadioButton,
  RadioGroup,
  Picker,
  Image,
} from 'react-native-ui-lib';
import CustomWizard from '../components/CustomWizard/CustomWizard';
import CustomRadio from '../components/CustomRadio/CustomRadio';
import CustomPicker from '../components/CustomPicker/CustomPicker';

/**
 * username
 * password
 * confirm password
 * address
 * phone
 * email
 * role
 * password
 */

const options = [
  {label: 'ichilov', value: 'ichilov'},
  {label: 'rambam', value: 'rambam'},
  {label: 'ziv', value: 'ziv'},
];

const roleOptions = [
  {value: 0, label: 'Reporter'},
  {value: 1, label: 'Manager'},
];

const organizationOptions = [
  {label: 'Ichilov', value: 'ichilov'},
  {label: 'Rambam', value: 'rambam'},
  {label: 'Ziv', value: 'ziv'},
];

const roles = ['Reporter', 'Manager'];

const SignupScreen = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const personalInfoForm = () => {
    return (
      <View style={styles.formContainer}>
        <TextField text60 placeholder="Full Name" grey10 />
        <TextField text60 placeholder="Email" grey10 />
        <TextField text60 placeholder="Address" grey10 />
        <TextField text60 placeholder="Phone" grey10 />
      </View>
    );
  };

  const renderRolesRadioButton = roleIndex => {
    const value = roles[roleIndex];
    return (
      <RadioButton marginL-10={roleIndex > 0} value={roleIndex} label={value} />
    );
  };
  const onRoleChange = role => {};
  const onOrganizationChange = organization => {};
  const organizationInfoForm = () => {
    return (
      <View style={styles.formContainer}>
        <CustomRadio
          options={roleOptions}
          title={'Select Role'}
          onChange={onRoleChange}
          row
          marginT-15
        />
        <CustomPicker
          options={organizationOptions}
          title={'Choose Organization'}
          onChange={onOrganizationChange}
        />
        <View style={[styles.formContainer, {opacity: 0.3}]}>
          <Text marginB-20 text60 grey10>
            Add Organization
          </Text>
          <TextField
            editable={false}
            text80
            placeholder="Organization Name"
            grey10
          />
          <TextField
            text80
            placeholder="Organization Address"
            grey10
            editable={false}
          />
        </View>
      </View>
    );
  };

  const setPasswordForm = () => {
    return (
      <View style={styles.formContainer}>
        <TextField text60 placeholder="Password" secureTextEntry grey10 />
        <TextField
          text60
          placeholder="Confirm password"
          secureTextEntry
          grey10
        />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View row marginT-20 style={{width: '80%'}}>
        <Image
          source={require('../assets/images/logo-pic-trans.png')}
          style={styles.image}
        />
        <Text blue50 text20 marginL-20 style={{paddingTop: 6}}>
          Signup
        </Text>
      </View>
      <CustomWizard
        steps={[
          {component: personalInfoForm(), title: 'Personal Info'},
          {component: organizationInfoForm(), title: 'Organization Info'},
          {component: setPasswordForm(), title: 'Set Password'},
        ]}
        finishBtnText={'Done & Signup'}
        onFinish={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  image: {
    width: 80,
    height: 80,
  },
  formContainer: {
    // width: '70%',
    // borderWidth: 2,
  },
  stepsBar: {
    marginTop: 30,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 30,
    width: '70%',
  },
});

export default SignupScreen;
