import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {pixelScale} from '../../util/pixelScale';
import {useUi} from '../../hooks';

const Loader = props => {
  const {uiActions, uiState} = useUi();
  const {show, hideIndicator, message, progress} = uiState.loader;
  if (show) {
    return (
      <View style={styles.overlayContainer}>
        <View
          style={
            progress === 0 && message === ''
              ? styles.pureContainer
              : styles.container
          }>
          {message !== '' && (
            <Text style={[styles.messageText]}>{message}</Text>
          )}
          {!hideIndicator && (
            <ActivityIndicator
              size={pixelScale(60)}
              color={'rgb(91,155,213)'}
              style={progress === 0 && message === '' && styles.pureLoader}
            />
          )}
          {progress !== 0 && (
            <Text style={[styles.text]}>{progress + '%'}</Text>
          )}
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(36,36,36,0.1)',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: '40%',
    zIndex: 2,
    width: '85%',
    minHeight: pixelScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(207,205,205,0.9)',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
  },
  pureContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '50%',
    marginTop: '65%',
  },
  pureLoader: {
    top: '40%',
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontSize: pixelScale(22),
    marginBottom: 5,
  },
  messageText: {
    padding: pixelScale(10),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: pixelScale(22),
  },
});

export default Loader;
