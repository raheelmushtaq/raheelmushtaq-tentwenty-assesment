import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../theme/colors';

const LoaderView = ({ loading }) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={!!loading}
      hardwareAccelerated={true}
      onRequestClose={() => {
        ConsoleUtils.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <View>
            <View
              style={styles.loader}>
              <ActivityIndicator size="large" color={colors.white} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.blackOverlay,

  },
  activityIndicatorWrapper: {
    height: 150,
    width: 150,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LoaderView;
