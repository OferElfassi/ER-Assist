import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {setMainRoot} from '../navigation';
import {
  TextField,
  Button,
  View,
  Text,
  Switch,
  Picker,
} from 'react-native-ui-lib';

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

const SignupScreen = () => {
  const [switchVal, setSwitchVal] = useState(false);
  return (
    <View style={styles.root}>
      <View paddingL-10>
        <ScrollView>
          {/*<Picker*/}
          {/*  marginT-20*/}
          {/*  placeholder="Organization"*/}
          {/*  value={options[0]}*/}
          {/*  // onChange={items => this.setState({languages: items})}*/}
          {/*  // mode={Picker.modes.MULTI}*/}
          {/*  selectionLimit={3}*/}
          {/*  // rightIconSource={dropdown}*/}
          {/*>*/}
          {/*  {options.map(option => {*/}
          {/*    <Picker.Item*/}
          {/*      key={option.value}*/}
          {/*      value={option}*/}
          {/*      disabled={false}*/}
          {/*    />;*/}
          {/*  })}*/}
          {/*</Picker>*/}
          <Text blue50 text20>
            Signup
          </Text>
          <TextField text placeholder="username" grey10 />
          <TextField text placeholder="password" secureTextEntry grey10 />
          <TextField
            text
            placeholder="confirm password"
            secureTextEntry
            grey10
          />
          <TextField text placeholder="address" secureTextEntry grey10 />
          <TextField text placeholder="phone" secureTextEntry grey10 />
          <TextField text placeholder="email" secureTextEntry grey10 />
          <View flex row>
            <Text>Manager</Text>
            <Switch
              onColor={'pink'}
              offColor={'pink'}
              testID="switch"
              value={switchVal}
              onValueChange={(value1: boolean) => {
                setSwitchVal(!switchVal);
              }}
              style={{marginBottom: 20}}
            />
            <Text>Reporter</Text>
          </View>

          <View marginT-100 center>
            <Button
              text70
              white
              background-orange30
              label="Sign Up"
              onPress={() => setMainRoot()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SignupScreen;
