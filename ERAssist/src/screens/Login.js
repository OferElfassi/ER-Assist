import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useUser} from '../hooks';
import {setMainRoot} from '../navigation';
import {
  Button,
  View,
  Text,
  Image,
  Typography,
  Colors,
  Incubator,
} from 'react-native-ui-lib';

const {TextField} = Incubator;
const initialLoginState = {email: '', password: ''};
const loginValidityState = {email: false, password: false};
const LoginScreen = () => {
  const [loginInfo, setLoginInfo] = useState(initialLoginState);
  const [loginValidity, setLoginValidity] = useState(loginValidityState);

  const {userActions, userState} = useUser();

  const resetAllFields = () => {
    setLoginInfo({...initialLoginState});
    setLoginValidity({...loginValidityState});
  };

  const handleChange = inputName => {
    return val => {
      setLoginInfo(prevState => ({
        ...prevState,
        [inputName]: val,
      }));
    };
  };

  const handleValidityChange = inputName => {
    return isValid => {
      setLoginValidity(prevState => ({
        ...prevState,
        [inputName]: isValid,
      }));
    };
  };

  const handleLoginPress = () => {
    console.log(loginInfo);
    console.log(loginValidity);

    // if(!loginValidity.password || !loginValidity.email)
    userActions.login(loginInfo);
  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../assets/images/logo-pic-trans.png')}
        style={styles.image}
      />
      <View style={styles.formContainer} flex marginT-20>
        <Text blue50 text20 center marginB-20>
          Login
        </Text>
        <TextField
          text50
          enableErrors
          floatingPlaceholder
          placeholder="Email"
          onChangeText={handleChange('email')}
          value={loginInfo.email}
          validate={['required', 'email']}
          validationMessage={['This field is required', 'Invalid email']}
          validateOnChange
          fieldStyle={styles.withUnderline}
          grey10
          keyboardType={'email-address'}
          onChangeValidity={handleValidityChange('email')}
        />
        <TextField
          text50
          floatingPlaceholder
          placeholder="password"
          onChangeText={handleChange('password')}
          value={loginInfo.password}
          validate={['required']}
          validationMessage="This field is required"
          validateOnChange
          secureTextEntry
          fieldStyle={styles.withUnderline}
          onChangeValidity={handleValidityChange('password')}
          grey10
        />
        <View marginT-20 center>
          <Button
            text70
            white
            background-orange30
            label="Login"
            onPress={handleLoginPress}
            disabled={!(loginInfo.password !== '' && loginValidity.email)}
          />
        </View>
      </View>
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
  image: {
    width: 80,
    height: 80,
    marginVertical: 32,
  },
  formContainer: {
    width: '70%',
  },
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: Colors.grey40,
    paddingBottom: 4,
  },
});

export default LoginScreen;
