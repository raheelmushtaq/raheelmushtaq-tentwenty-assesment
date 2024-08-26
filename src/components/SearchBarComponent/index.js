import React from 'react';
import { ActivityIndicator, Image, Keyboard, Pressable, StyleSheet, TextInput, View, } from 'react-native';
import { colors } from '../../theme/colors';
import imageConstants from '../../assets/imageConstants';
import styles from './styles';

const SearchBar = ({
    onChangeText,
    value,
    onClearText,
    containerStyle,
    placeHolder,
    onBlur,
    loading = false,
    showClearButton = false,
    clearViewStyles = {},
    inputStyle,
    editable = true
}) => {
    const renderCrossIcon = () => {
        if (!!value || showClearButton) {
            return (
                <Pressable
                    onPress={onClearText}
                    style={[styles.crossIconContainer, clearViewStyles]}>
                    <Image
                        source={imageConstants.close}
                        style={styles.crossIconStyle}
                    />
                </Pressable>
            );
        }
        return null;
    };

    const renderActivityIndicator = () => {
        if (loading)
            return <ActivityIndicator color={colors.lightblue} size={'small'} />;
        return null
    }
    return (<>
        <View style={[styles.searchBarCard, containerStyle]}>
            <View style={styles.searchIconStyle}>
                <Image
                    source={imageConstants.search_icon}
                    style={styles.searchIcon}
                />
            </View>
            <View style={styles.searchInputContainerStyle}>

                <TextInput
                    editable={editable}
                    onChangeText={onChangeText}
                    style={[styles.searchInputStyle, styles.searchInputStyleSubContainer, inputStyle]}
                    blurOnSubmit={false}
                    placeholder={placeHolder}
                    placeholderTextColor={colors.darkgray}
                    onBlur={onBlur}
                    autoCapitalize={false}
                    onSubmitEditing={Keyboard.dismiss}
                    returnKeyType={'search'}
                >
                    {value}
                </TextInput>
            </View>
            <View style={styles.rightContainer}>
                {renderActivityIndicator()}
                {renderCrossIcon()}
            </View>
        </View>
    </>
    )
};
export default SearchBar;
