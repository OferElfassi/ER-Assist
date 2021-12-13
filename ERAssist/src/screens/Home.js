import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text, View, Button, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
const IconInCircle = ({
  circleSize,
  borderWidth = 2,
  borderColor = 'black',
  ...props
}) => (
  <CircleBorder
    size={circleSize}
    borderWidth={borderWidth}
    borderColor={borderColor}>
    <Icon {...props} />
  </CircleBorder>
);

const CircleBorder = ({size, borderWidth, borderColor, children}) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: 0.5 * size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor,
      borderWidth,
    }}>
    {children}
  </View>
);
const HomeScreen = props => {
  return (
    <View style={styles.root} flex-1>
      <View style={styles.content}>
        <View flex-1 bg-screenBG>
          <Button
            outline
            outlineColor={Colors.pink}
            label="START HERE"
            borderRadius={0}
            size={Button.sizes.medium}
            text60
            labelStyle={{fontWeight: '700', letterSpacing: 4}}
            style={{borderWidth: 3, margin: 8}}
          />
          {/*<Text h1 pink>*/}
          {/*  Hello World*/}
          {/*</Text>*/}
        </View>
        <View style={styles.bottomContent}>
          <View row spread>
            <Text h4 pink>
              Recent Reports
            </Text>
            <View row marginT-10>
              <Text>Reports Page</Text>
              <Icon
                name="arrow-right"
                backgroundColor="#3b5998"
                style={{marginTop: 4, marginLeft: 1}}
              />
            </View>
          </View>

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
    paddingTop: 20,
    // paddingLeft: 5,
    paddingHorizontal: 10,
    // backgroundColor: '#5eafee',
    flex: 1,
  },
  topContent: {
    flex: 1,
  },
  bottomContent: {
    flex: 4,
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: '#aaccf6',
  },
});

export default HomeScreen;
