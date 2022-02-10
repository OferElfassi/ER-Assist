import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {useUser} from '../hooks';
import {Avatar} from 'react-native-ui-lib';

const UserScreen = props => {
  const {userActions, userState} = useUser();
  const {user} = props;
  useEffect(() => {
    console.log(props);
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        backButton: {visible: false},
        background: {
          component: {
            name: 'com.erAssist.main.header',
            passProps: {title: 'User'},
          },
        },
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <ScreenHeader pageTitle={'User'} pageSubTitle={user.fullName} />
      <ScrollView style={styles.content}>
        <View style={styles.profilePicContainer}>
          <Avatar
            source={user.imageSrc}
            size={100}
            containerStyle={styles.profilePic}
          />
          <Text style={styles.label}>{user.fullName}</Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.field}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.infoText}>{user.fullName}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.infoText}>{user.email}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>User ID:</Text>
            <Text style={styles.infoText}>{user.userId}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.infoText}>{user.address}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.infoText}>{user.phone}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Role:</Text>
            <Text style={styles.infoText}>{user.role}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

UserScreen.propTypes = {
  user: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    flex: 1, // alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  userInfoContainer: {
    marginTop: 40,
    marginLeft: 10,
  },
  profilePicContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profilePic: {
    borderWidth: 2,
    borderColor: '#ffa602',
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 15,
  },
});
export default UserScreen;
