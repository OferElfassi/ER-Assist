import React from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const reports = [
  {
    id: '123',
    date: '20/02/21 16:20',
    patient: 'Yoram Schwartz',
    reporter: 'Mali Levi',
    type: 'Evacuation Report',
  },
  {
    id: '123',
    date: '20/02/21 16:20',
    patient: 'Yoram Schwartz',
    reporter: 'Mali Levi',
    type: 'Evacuation Report',
  },
  {
    id: '123',
    date: '20/02/21 16:20',
    patient: 'Yoram Schwartz',
    reporter: 'Mali Levi',
    type: 'Evacuation Report',
  },
  {
    id: '123',
    date: '20/02/21 16:20',
    patient: 'Yoram Schwartz',
    reporter: 'Mali Levi',
    type: 'Evacuation Report',
  },
];

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text>Hello Home Screen 👋</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text>Recent Reports</Text>
          <View style={styles.list}>
            <FlatList
              data={reports}
              renderItem={({item}) => (
                <View>
                  <Text>{item.id}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    hideOnScroll: true,
    title: {
      text: 'Home',
      color: 'white',
    },
    leftButtons: [
      {
        id: 'buttonOne',
        icon: require('../assets/images/hamburger.png'),
      },
    ],
    background: {
      color: '#2E8BFB',
    },
    drawBehind: false,
    visible: true,
    animate: true,
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  content: {
    paddingTop: 40,
    backgroundColor: '#5eafee',
    flex: 1,
  },
  topContent: {
    flex: 1,
  },
  bottomContent: {
    flex: 2,
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#aaccf6',
  },
});

export default HomeScreen;
