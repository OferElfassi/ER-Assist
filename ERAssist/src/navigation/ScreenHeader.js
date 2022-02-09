import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';

const {height, width} = Dimensions.get('window');
const ScreenHeader = props => {
  const {pageTitle, pageSubTitle} = props;
  return (
    <ImageBackground
      source={require('../assets/images/top_bg.png')}
      resizeMode="cover"
      style={styles.topContent}>
      <Text center style={styles.pageTitle}>
        {pageTitle}
      </Text>
      {pageSubTitle && (
        <Text center style={styles.pageSubTitle}>
          {pageSubTitle}
        </Text>
      )}
    </ImageBackground>
  );
};

ScreenHeader.propTypes = {
  pageTitle: PropTypes.string,
  pageSubTitle: PropTypes.string,
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
  pageSubTitle: {
    width: '100%',
    color: 'white',
    position: 'absolute',
    fontSize: 14,
    letterSpacing: 3,
    top: 125,
  },
});

export default ScreenHeader;
