import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {setMainRoot} from '../Navigation';

const SignupScreen = () => {
  return (
    <View style={styles.root}>
      <Button title="Signup" color="#710ce3" onPress={() => setMainRoot()} />
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

export default SignupScreen;
