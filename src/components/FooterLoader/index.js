import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import { colors } from '../../theme/colors';

const FooterLoader = ({loading, containerStyle}) => {
  if (!loading) {
    return null;
  }
  return (
    <View style={[styles.loader, containerStyle]}>
      <ActivityIndicator color={colors.lightblue} size={'large'} />
    </View>
  );
};

export default React.memo(FooterLoader);
