import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import ScreenHeader from '../navigation/ScreenHeader';
import CustomList from '../components/CustomList/CustomList';
import CustomTabs from '../components/CustomTabs/CustomTabs';
import {Navigation} from 'react-native-navigation';

const reportItems = [
  {
    id: '12s3',
    timestamp: '20/02/21 16:20',
    patient: {fullName: 'Yoram Schwartz', id: '87654321'},
    reporter: {fullName: 'Ofer Elfassi', id: '2434rd34'},
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: 'pcr', timeStamp: '20/02/21 16:20'}],
  },
  {
    id: '34',
    timestamp: '15/03/21 16:20',
    patient: {fullName: 'miri golan', id: '343535454'},
    reporter: {fullName: 'Dekel Ben-David', id: '2434r54545d34'},
    medicines: [{name: 'norofen', amount: 3}],
    anamnesis: 'quick  treatment',
    treatment: [{action: 'none', timeStamp: ''}],
  },
];
const userItems = [
  {
    fullName: 'Ofer Elfassi',
    email: 'ofer221@hotmail.com',
    userId: '2434rd34',
    address: 'Tel-Aviv, Cordovero 15/1',
    phone: '052252844',
    gender: 'male',
    role: 'reporter',
    isManager: false,
    isDoctor: false,
  },
  {
    fullName: 'Dekel BenDavid',
    email: 'dekelb@gmail.com',
    userId: '43534545',
    address: 'Givataim, Herzel 15/1',
    phone: '058647845',
    gender: 'male',
    role: 'doctor',
    isManager: false,
    isDoctor: true,
  },
  {
    fullName: 'Ofer Elfassi',
    email: 'ofer221@hotmail.com',
    userId: '2434rd34',
    address: 'Tel-Aviv, Cordovero 15/1',
    phone: '052252844',
    gender: 'girl',
    role: 'reporter',
    isManager: false,
    isDoctor: false,
  },
  {
    fullName: 'Dekel BenDavid',
    email: 'dekelb@gmail.com',
    userId: '43534545',
    address: 'Givataim, Herzel 15/1',
    phone: '058647845',
    gender: 'girl',
    role: 'doctor',
    isManager: false,
    isDoctor: true,
  },
  {
    fullName: 'Dekel BenDavid',
    email: 'dekelb@gmail.com',
    userId: '43534545',
    address: 'Givataim, Herzel 15/1',
    phone: '058647845',
    gender: 'male',
    role: 'doctor',
    isManager: false,
    isDoctor: true,
  },
  {
    fullName: 'Ofer Elfassi',
    email: 'ofer221@hotmail.com',
    userId: '2434rd34',
    address: 'Tel-Aviv, Cordovero 15/1',
    phone: '052252844',
    gender: 'girl',
    role: 'reporter',
    isManager: false,
    isDoctor: false,
  },
  {
    fullName: 'Dekel BenDavid',
    email: 'dekelb@gmail.com',
    userId: '43534545',
    address: 'Givataim, Herzel 15/1',
    phone: '058647845',
    gender: 'girl',
    role: 'doctor',
    isManager: false,
    isDoctor: true,
  },
];

const HomeScreen = props => {
  const handleUserClick = user => {};
  const handleReportClickClick = report => {
    Navigation.push('MainStack', {
      component: {
        name: 'com.erAssist.main.report',
        passProps: {
          report: report,
        },
      },
    });
  };
  return (
    <View style={styles.root} flex-1>
      <ScreenHeader pageTitle={'Home'} />
      <View style={styles.content}>
        <CustomTabs
          items={[
            {
              label: 'Users',
              key: 'Users',
              component: (
                <CustomList
                  data={userItems}
                  onDeleteClick={() => {}}
                  onEditClick={() => {}}
                  onItemClick={() => {}}
                />
              ),
            },
            {
              label: 'Reports',
              key: 'Reports',
              component: (
                <CustomList
                  data={reportItems}
                  onDeleteClick={() => {}}
                  onEditClick={() => {}}
                  onItemClick={handleReportClickClick}
                />
              ),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1, // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke', // backgroundColor: 'red',
  },
  content: {
    paddingTop: 20, // paddingLeft: 5,
    paddingHorizontal: 10, // backgroundColor: '#5eafee',
    flex: 1,
  },
  bottomContent: {
    flex: 4,
  },
  list: {
    flex: 1,
    marginTop: 20, // backgroundColor: '#aaccf6',
  },
});

export default HomeScreen;
