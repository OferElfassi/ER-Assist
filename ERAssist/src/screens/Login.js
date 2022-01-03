import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
import {useUser} from '../hooks';

const {TextField} = Incubator;
const initialLoginState = {email: '', password: ''};
const LoginScreen = () => {
  const [loginInfo, setLoginInfo] = useState(initialLoginState);

  const {userActions, userState} = useUser();

  const handleChange = inputName => {
    return val => {
      setLoginInfo(prevState => ({
        ...prevState,
        [inputName]: val,
      }));
    };
  };

  const test = val => {
    console.log('val', val);
  };
  const handleLoginPress = () => {
    console.log(loginInfo);
    // userActions.login(loginInfo);
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
          validateOnBlur
          fieldStyle={styles.withUnderline}
          grey10
          keyboardType={'email-address'}
        />
        <TextField
          text50
          floatingPlaceholder
          placeholder="password"
          onChangeText={handleChange('password')}
          value={loginInfo.password}
          validate={['required']}
          validationMessage="This field is required"
          validateOnBlur
          secureTextEntry
          fieldStyle={styles.withUnderline}
          grey10
        />
        <View marginT-20 center>
          <Button
            text70
            white
            background-orange30
            label="Login"
            onPress={handleLoginPress}
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
