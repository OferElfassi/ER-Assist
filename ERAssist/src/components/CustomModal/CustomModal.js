import React from 'react';
import {Modal, StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';
import {pixelScale} from '../../util/pixelScale';
import {useUi} from '../../hooks';

const CustomModal = props => {
  const {uiState} = useUi();
  const {
    modal: {modalVisible, modalText, okText, cancelText, onOk, onCancel},
  } = uiState;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, {textAlign: 'center'}]}>
            {modalText}
          </Text>
          <View style={styles.btnContainer}>
            <Button
              onPress={onOk}
              label={okText}
              isGlow
              outline
              outlineColor={'#7dac71'}
              style={cancelText !== '' ? {marginRight: pixelScale(20)} : null}
            />
            {cancelText !== '' && (
              <Button
                onPress={onCancel}
                label={cancelText}
                outline
                outlineColor={'#bc4a4a'}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelScale(22),
  },
  modalView: {
    zIndex: 1000,
    margin: pixelScale(20),
    backgroundColor: 'rgba(207,205,205,0.9)',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    padding: pixelScale(35),
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
  modalText: {
    color: '#000000',
    fontSize: pixelScale(25),
    marginBottom: pixelScale(15),
  },
  modalListText: {
    color: '#000000',
    fontSize: 18,
    marginBottom: pixelScale(5),
    textAlign: 'center',
  },
  btnContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
});
export default CustomModal;
