import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {setMainRoot} from '../navigation';
import {
  Button,
  View,
  Text,
  Switch,
  Wizard,
  RadioButton,
  RadioGroup,
  Picker,
  Incubator,
  Image,
  Colors,
} from 'react-native-ui-lib';
import CustomWizard from '../components/CustomWizard/CustomWizard';
import CustomRadio from '../components/CustomRadio/CustomRadio';
import CustomPicker from '../components/CustomPicker/CustomPicker';
import {useUi, useUser} from '../hooks';
const {TextField} = Incubator;
import Loader from '../components/Loader/Loader';

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
  {value: 'reporter', label: 'Reporter'},
  {value: 'manager', label: 'Manager'},
];

const organizationOptions = [
  {label: 'Ichilov', value: 'ichilov'},
  {label: 'Rambam', value: 'rambam'},
  {label: 'Ziv', value: 'ziv'},
];

const roles = ['Reporter', 'Manager'];

const initialSignupInfoState = {
  fullName: '',
  email: '',
  password: '',
  confirm_password: '',
  address: '',
  phone: '',
  organization: '',
  isManager: false,
};
const initialSignupValidState = {
  fullName: false,
  email: false,
  password: false,
  confirm_password: false,
  address: '',
  phone: false,
  organization: false,
  isManager: true,
};

const SignupScreen = () => {
  const {uiState, uiActions} = useUi();
  const {userState, userActions} = useUser();
  const [signupInfo, setSignupInfo] = useState(initialSignupInfoState);
  const [signupValidity, setSignupValidity] = useState(initialSignupValidState);

  useEffect(() => {
    console.log('kkk', uiState);
  });

  const handleChange = inputName => {
    return val => {
      setSignupInfo(prevState => ({
        ...prevState,
        [inputName]: val,
      }));
    };
  };
  const handleValidityChange = inputName => {
    return isValid => {
      setSignupValidity(prevState => ({
        ...prevState,
        [inputName]: isValid,
      }));
    };
  };

  const resetField = fieldName => {
    if (fieldName) {
      setSignupInfo(prevState => ({
        ...prevState,
        [fieldName]: initialSignupInfoState[fieldName],
      }));
    }
  };

  const resetAllFields = () => {
    setSignupInfo({...initialSignupInfoState});
  };

  const handleSignupSubmit = () => {
    console.log(signupInfo, signupValidity);
  };

  const personalInfoForm = () => {
    return (
      <View style={styles.formContainer} marginT-30>
        {/*<Loader />*/}
        <TextField
          text60
          floatingPlaceholder
          placeholder="Full Name"
          enableErrors
          onChangeText={handleChange('fullName')}
          value={signupInfo.fullName}
          validate={['required']}
          validationMessage="This field is required"
          validateOnBlur
          fieldStyle={styles.withUnderline}
          onChangeValidity={handleValidityChange('fullName')}
          grey10
        />
        <TextField
          text60
          floatingPlaceholder
          placeholder="Email"
          enableErrors
          onChangeText={handleChange('email')}
          value={signupInfo.email}
          validate={['required', 'email']}
          validationMessage="Email is invalid"
          onChangeValidity={handleValidityChange('email')}
          validateOnBlur
          grey10
          fieldStyle={styles.withUnderline}
        />
        <TextField
          text60
          floatingPlaceholder
          placeholder="Address"
          enableErrors
          onChangeText={handleChange('address')}
          value={signupInfo.address}
          validate={['required']}
          validationMessage="This field is required"
          validateOnChange
          onChangeValidity={handleValidityChange('address')}
          grey10
          fieldStyle={styles.withUnderline}
        />
        <TextField
          text60
          floatingPlaceholder
          placeholder="Phone"
          enableErrors
          onChangeText={handleChange('phone')}
          value={signupInfo.phone}
          validate={['required']}
          validationMessage="This field is required"
          validateOnChange
          onChangeValidity={handleValidityChange('phone')}
          grey10
          fieldStyle={styles.withUnderline}
        />
      </View>
    );
  };

  const onRoleChange = role => {
    const setRoleFunc = handleChange('isManager');
    setRoleFunc(role === 'manager');
  };

  const onOrganizationChange = organization => {
    const setOrganizationValidFunc = handleValidityChange('organization');
    const setOrganizationFunc = handleChange('organization');
    setOrganizationFunc(organization);
    setOrganizationValidFunc(true);
  };

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
          title="Choose Organization"
          onChange={onOrganizationChange}
        />
        <View
          style={[
            styles.formContainer,
            {opacity: signupInfo.isManager ? 1 : 0.3},
          ]}>
          <Text marginB-20 text60 grey10>
            Add Organization
          </Text>
          <TextField
            editable={signupInfo.isManager}
            text80
            enableErrors
            placeholder="Organization Name"
            onChangeText={handleChange('organization')}
            value={signupInfo.isManager ? signupInfo.organization : ''}
            onChangeValidity={handleValidityChange('organization')}
            grey10
            validateOnChange
            fieldStyle={styles.withUnderline}
          />
        </View>
      </View>
    );
  };

  const setPasswordForm = () => {
    return (
      <View style={styles.formContainer}>
        <TextField
          text60
          floatingPlaceholder
          placeholder="Password"
          secureTextEntry
          grey10
          enableErrors
          validateOnChange
          onChangeText={handleChange('password')}
          onChangeValidity={handleValidityChange('password')}
          value={signupInfo.password}
          validate={['required']}
          validationMessage="This field is required"
          fieldStyle={styles.withUnderline}
        />
        <TextField
          text60
          floatingPlaceholder
          placeholder="Confirm password"
          secureTextEntry
          grey10
          enableErrors
          onChangeText={handleChange('confirm_password')}
          value={signupInfo.confirm_password}
          fieldStyle={styles.withUnderline}
          validate={[
            'required',
            () => {
              return signupInfo.password === signupInfo.confirm_password;
            },
          ]}
          validateOnChange
          onChangeValidity={handleValidityChange('confirm_password')}
          validationMessage={['This field is required', 'Passwords not match']}
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
        onFinish={handleSignupSubmit}
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
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: Colors.grey40,
    paddingBottom: 4,
    marginBottom: 30,
  },
});

export default SignupScreen;
