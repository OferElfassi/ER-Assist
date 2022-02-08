import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Button, Colors, Text, View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome5';

const reports = [
  {
    id: '123',
    date: '20/02/21 16:20',
    patient: {name: 'Yoram Schwartz', id: '87654321'},
    reporter: 'Mali Levi',
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: '', timeStamp: ''}],
  },
  {
    id: '12s3',
    date: '20/02/21 16:20',
    patient: {name: 'Yoram Schwartz', id: '87654321'},
    reporter: 'Mali Levi',
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: '', timeStamp: ''}],
  },
  {
    id: '12d3',
    date: '20/02/21 16:20',
    patient: {name: 'Yoram Schwartz', id: '87654321'},
    reporter: 'Mali Levi',
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: '', timeStamp: ''}],
  },
  {
    id: 'f123',
    date: '20/02/21 16:20',
    patient: {name: 'Yoram Schwartz', id: '87654321'},
    reporter: 'Mali Levi',
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: '', timeStamp: ''}],
  },
  {
    id: 'g123',
    date: '20/02/21 16:20',
    patient: {name: 'Yoram Schwartz', id: '87654321'},
    reporter: 'Mali Levi',
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: '', timeStamp: ''}],
  },
];

// const IconInCircle = ({
//   circleSize,
//   borderWidth = 2,
//   borderColor = 'black',
//   ...props
// }) => (
//   <CircleBorder
//     size={circleSize}
//     borderWidth={borderWidth}
//     borderColor={borderColor}>
//     <Icon {...props} />
//   </CircleBorder>
// );
//
// const CircleBorder = ({size, borderWidth, borderColor, children}) => (
//   <View
//     style={{
//       width: size,
//       height: size,
//       borderRadius: 0.5 * size,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderColor,
//       borderWidth,
//     }}>
//     {children}
//   </View>
// );
const HomeScreen = props => {
  return (
    <View style={styles.root} flex-1>
      <View style={styles.content}>
        <View flex-1 bg-screenBG>
          <Button
            outline
            outlineColor={Colors.pink}
            label="REPORT NOW"
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
                <View marginB-5 style={{borderWidth: 1, borderColor: 'black'}}>
                  <View flex row spread>
                    <View flex row>
                      <Text>patient:</Text>
                      <Text>{item.patient.name}</Text>
                    </View>
                    <View flex row>
                      <Text>reporter:</Text>
                      <Text>{item.patient.name}</Text>
                    </View>
                  </View>
                  <View flex>
                    <Text>{item.date}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
// HomeScreen.options = {
//   topBar: {
//     hideOnScroll: true,
//     title: {
//       text: 'Home',
//       color: 'white',
//     },
//     leftButtons: [
//       {
//         id: 'buttonOne',
//         icon: require('../assets/images/hamburger.png'),
//       },
//     ],
//
//     background: {
//       component: {name: 'com.erAssist.main.header', passProps: {title: 'Home'}},
//     },
//     drawBehind: false,
//     visible: true,
//     animate: true,
//   },
// };

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
