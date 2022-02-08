import PropTypes from 'prop-types';
import React from 'react';
import {Avatar, Colors, Drawer, ListItem, Text} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const CustomListItem = props => {
  const {item, index, addRef, onSwipeableWillOpen} = props;
  return (
    <Drawer
      leftItem={item.leftButton}
      rightItems={item.rightButton}
      // itemsMinWidth={80}
      ref={r => addRef(r, index)}
      index={index}
      onSwipeableWillOpen={onSwipeableWillOpen}>
      <ListItem height={75.8} onPress={item.listOnPress}>
        <ListItem.Part left>
          <Avatar
            size={54}
            source={item.imageSource}
            label={item.initials}
            containerStyle={styles.avatar}
          />
        </ListItem.Part>
        <ListItem.Part middle column containerStyle={styles.border}>
          <ListItem.Part containerStyle={styles.middle}>
            <Text
              style={styles.text}
              text70
              color={Colors.grey10}
              numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.subtitle} text90 color={Colors.grey50}>
              {item.timestamp}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text
              style={styles.text}
              text80
              color={Colors.grey40}
              numberOfLines={1}>
              {item.brief}
            </Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </Drawer>
  );
};

CustomListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  addRef: PropTypes.func,
  onSwipeableWillOpen: PropTypes.func,
};

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
    paddingRight: 17,
  },
  avatar: {
    marginHorizontal: 18,
  },
  middle: {
    marginBottom: 3,
  },
  text: {
    flex: 1,
    marginRight: 10,
  },
  subtitle: {
    marginTop: 2,
  },
});

export default CustomListItem;
