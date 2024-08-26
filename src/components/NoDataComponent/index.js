import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../theme/colors';

const NoDataComponent = ({
                             headerStyle,
                             messageStyle,
                             containerStyle,
                             header,
                             message,
                             showHeader = true,
                             showMessage = true,
                         } = {}) => {
    return (
        <View style={[styles.emptyListComponent, containerStyle]}>
            {showHeader && <Text style={[styles.noRecordText, headerStyle]}>{header ?? "No Record"}</Text>}
            {showMessage && <Text
                style={[styles.noRecordMessage, messageStyle]}>{message ?? "No Data Found"}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    emptyListComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
    },
    noRecordText: {
        color: colors.black,
        fontSize: 20,
    },
    noRecordMessage: {
        color: colors.black,
        fontSize: 15,
    },
    buttonStyle: {
        marginTop: 20,
    },
});
export default NoDataComponent;
