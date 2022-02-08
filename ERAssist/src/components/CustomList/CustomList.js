import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import CustomListItem from './CustomListItem';
import {getInitials} from '../../util/getInitials';

const redPlus_Icon = require('../../assets/images/redplus.png');
const reporterMan_Icon = require('../../assets/images/reporterman.png');
const reporterWoman_Icon = require('../../assets/images/reporterwoman png');
const doctorMan_Icon = require('../../assets/images/docman.png');
const doctorWoman_Icon = require('../../assets/images/docwoman.png');

const delete_Icon = require('../../assets/icons/delete.png');
const edit_Icon = require('../../assets/icons/edit.png');

const reportItems = [
  {
    id: '12s3',
    date: '20/02/21 16:20',
    patient: {fullName: 'Yoram Schwartz', id: '87654321'},
    reporter: {fullName: 'Ofer Elfassi', id: '2434rd34'},
    medicines: [{name: 'attent', amount: 30}],
    anamnesis: 'bala bla bla bla',
    treatment: [{action: 'pcr', timeStamp: '20/02/21 16:20'}],
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
    isManager: false,
    isDoctor: false,
  },
  {
    fullName: 'Dekel-BenDavid',
    email: 'dekelb@gmail.com',
    userId: '43534545',
    address: 'Givataim, Herzel 15/1',
    phone: '058647845',
    gender: 'male',
    isManager: false,
    isDoctor: true,
  },
];

const CustomList = props => {
  const [lastIndex, setLastIndex] = useState(undefined);
  const [items, setItems] = useState([]);
  const refArray = useRef([]);
  const {data, onEditClick, onDeleteClick, onItemClick} = props;

  const [counter, setCounter] = useState(0);

  setCounter(prevState => {
    return prevState++;
  });

  const mapData = useCallback(() => {
    const type = data[0].patient ? 'report' : 'user';
    const mappedData = data.map((item, index) => {
      return {
        type,
        id: item.id,
        initials: getInitials(
          type === 'report' ? item.patient.fullName : item.fullName,
        ),
        name: type === 'report' ? item.patient.fullName : item.fullName,
        brief: type === 'report' ? item.anamnesis : item.role,
        timestamp: type === 'report' ? item.timestamp : '',
        imageSource:
          type === 'report'
            ? redPlus_Icon
            : item.gender === 'male'
            ? item.role === 'reporter'
              ? reporterMan_Icon
              : doctorMan_Icon
            : item.role === 'reporter'
            ? reporterWoman_Icon
            : doctorWoman_Icon,
        leftButton: {
          text: 'Edit',
          icon: edit_Icon,
          background: Colors.green30,
          onPress: () => onEditClick({...item, type}),
        },
        rightButton: [
          {
            text: 'Delete',
            icon: delete_Icon,
            background: Colors.red30,
            onPress: () => onDeleteClick({...item, type}),
          },
        ],
        listOnPress: () => onItemClick({...item, type}),
      };
    });
    setItems(mappedData);
  }, [data, onEditClick, onDeleteClick, onItemClick]);

  useEffect(() => {
    refArray.current = refArray.current.slice(0, data.length);
    mapData();
  }, [data, mapData]);

  const closeLast = index => {
    if (lastIndex !== undefined && lastIndex !== index) {
      closeDrawer(lastIndex);
    }
    setLastIndex(index);
  };

  const closeDrawer = index => {
    refArray.current[index].closeDrawer();
  };

  const addRef = (ref, index) => {
    refArray.current[index] = ref;
  };

  const onSwipeableWillOpen = itemProps => {
    closeLast(itemProps.index);
  };

  const renderItem = ({item, index}) => {
    return (
      <CustomListItem
        item={item}
        index={index}
        addRef={addRef}
        onSwipeableWillOpen={onSwipeableWillOpen}
      />
    );
  };
  const keyExtractor = (item, index) => `${item.name}-${index}`;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

CustomList.propTypes = {
  data: PropTypes.array,
  onItemClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default CustomList;
