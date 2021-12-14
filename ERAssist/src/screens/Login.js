import React from 'react';
import {StyleSheet} from 'react-native';
import {setMainRoot} from '../navigation';
import {TextField, Button, View, Text} from 'react-native-ui-lib';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>
          Welcome
        </Text>
        <TextField text50 placeholder="username" grey10 />
        <TextField text50 placeholder="password" secureTextEntry grey10 />
        <View marginT-100 center>
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
});

export default LoginScreen;
