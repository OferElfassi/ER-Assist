import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';

const {height, width} = Dimensions.get('window');
const ScreenHeader = props => {
  const {pageTitle} = props;
  return (
    <ImageBackground
      source={require('../assets/images/top_bg.png')}
      resizeMode="cover"
      style={styles.topContent}>
      <Text center style={styles.pageTitle}>
        {pageTitle}
      </Text>
    </ImageBackground>
  );
};

ScreenHeader.propTypes = {
  pageTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  topContent: {
    width: '100%',
    height: 160,
    position: 'relative',
  },
  pageTitle: {
    width: '100%',
    color: 'white',
    position: 'absolute',
    fontSize: 22,
    letterSpacing: 4,
    top: 90,
  },
});

export default ScreenHeader;
