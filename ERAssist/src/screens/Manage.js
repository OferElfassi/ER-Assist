import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
import {Colors, Incubator, Text, View, Button} from 'react-native-ui-lib';
import {useUser} from '../hooks';
const {TextField} = Incubator;

const initialSignupValidState = {
  fullName: false,
  email: false,
  password: false,
  confirm_password: false,
  address: false,
  phone: false,
  organization: false,
  isManager: true,
};
const ManageScreen = props => {
  const {userActions, userState} = useUser();
  const [signupInfo, setSignupInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm_password: '',
    address: '',
    phone: '',
    organization: '',
    isManager: false,
  });
  const [signupValidity, setSignupValidity] = useState(initialSignupValidState);

  useEffect(() => {
    setSignupInfo({
      fullName: userState.userInfo.fullName,
      email: userState.userInfo.email,
      password: '',
      confirm_password: '',
      address: userState.userInfo.address,
      phone: userState.userInfo.phone,
    });
  }, []);

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
  const isFormValid = () => {
    const {email, confirm_password, organization, isManager} = signupValidity;
    const {fullName, password, address, phone} = signupInfo;
    return (
      fullName !== '' &&
      email &&
      password !== '' &&
      confirm_password &&
      address !== '' &&
      phone !== '' &&
      organization &&
      isManager
    );
  };

  const personalInfoForm = () => {
    return (
      <View style={styles.formContainer} marginT-30>
        <Text style={styles.sectionTitle}>Update Personal Info</Text>
        <TextField
          text80
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
          text80
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
          text80
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
        <Button
          backgroundColor={'#2cb600'}
          fullWidth={true}
          label={'Update details'}
        />
      </View>
    );
  };

  const setPasswordForm = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Update Password</Text>
        <TextField
          text80
          floatingPlaceholder
          placeholder="New Password"
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
          text80
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
              return signupInfo.password !== signupInfo.confirm_password;
            },
          ]}
          validateOnChange
          onChangeValidity={handleValidityChange('confirm_password')}
          validationMessage={['This field is required', 'Passwords not match']}
        />
        <Button
          backgroundColor={'#2cb600'}
          fullWidth={true}
          label={'Update Password'}
        />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'Manage'} />
      <ScrollView style={styles.content}>
        {personalInfoForm()}
        {setPasswordForm()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
  },
  formContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: Colors.grey40,
  },
  content: {
    // flex: 1,
    marginTop: 10,
    // marginLeft: 10,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#1b0455',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
  },
  withUnderline: {
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: 10,
    borderColor: Colors.grey40,
    paddingBottom: 4,
    // marginBottom: 10,
  },
});

export default ManageScreen;
