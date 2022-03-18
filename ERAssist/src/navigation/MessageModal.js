import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-ui-lib';
import {useUi} from '../hooks';
import {pixelScale} from '../util/pixelScale';

const redPlusIcon = require('../assets/images/redplus.png');
const {height, width} = Dimensions.get('window');
const MessageModal = props => {
  const {uiState} = useUi();
  const {
    modal: {modalVisible, modalText, okText, cancelText, onOk, onCancel},
  } = uiState;

  return (
    <View style={styles.root}>
      <View style={styles.modalContainer}>
        <Text style={styles.message}>{modalText}</Text>
        <View style={styles.btnContainer}>
          {cancelText !== '' && (
            <Button
              onPress={onCancel}
              label={cancelText}
              outline
              outlineColor={'#bc4a4a'}
            />
          )}
          <Button
            onPress={onOk}
            label={okText}
            isGlow
            outline
            outlineColor={'#7dac71'}
            style={cancelText !== '' ? {marginLeft: pixelScale(20)} : null}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: 250,
    elevation: 4,
    padding: 16,
  },
  message: {
    marginVertical: 8,
    textAlign: 'center',
  },
  btnContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default MessageModal;
