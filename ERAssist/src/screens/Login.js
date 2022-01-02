import React from 'react';
import {StyleSheet} from 'react-native';
import {setMainRoot} from '../navigation';
import {TextField, Button, View, Text, Image} from 'react-native-ui-lib';

const LoginScreen = () => {
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
        <TextField text50 placeholder="username" grey10 />
        <TextField text50 placeholder="password" secureTextEntry grey10 />
        <View marginT-20 center>
          <Button
            text70
            white
            background-orange30
            label="Login"
            onPress={() => setMainRoot()}
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
});

export default LoginScreen;
