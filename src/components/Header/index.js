/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ImagesUtils from "../../assets/imageConstants"
import styles from "./styles";
import { goBack } from "../../navigator/navigationUtils";

export default function Header(
  {
    title = "",
    onPressLeft = () => goBack(),
    showBackHeader = false,
    showSearchIcon = false,
    onSearchIconPress = () => {
    },
    containerStyle,
    showMovieDetailHeader=false
  }) {

  const renderTitle = () => {
    if (!!title)
      return <Text 
  
    style={[styles.title,showMovieDetailHeader && styles.titleWhite]}
    >{title}</Text>;
    return null;
  };
  const renderBackButton = () => {
    return <TouchableOpacity
      onPress={onPressLeft}
    ><View style={styles.backButtonContainer}>
        <Image
          source={ImagesUtils.back_icon}
          style={[styles.bacButtonImage,showMovieDetailHeader && styles.bacButtonImageWhite]}
        />
      </View>
    </TouchableOpacity>;

  };
  const renderLeftIcon = () => {
    if (showBackHeader) {
      return renderBackButton();
    } else {
      return null;
    }
  };
  const renderSearchIcon = () => {
    if (showSearchIcon) {
      return <TouchableOpacity
        onPress={onSearchIconPress}
        style={styles.rightIconButton}>
        <Image
          source={ImagesUtils.search_icon}
          style={[styles.rightIconImage, showMovieDetailHeader && styles.rightIconImageWhite]}
        />
      </TouchableOpacity>;
    }
    return null;
  };
  const renderRightIcons = () => {
    return <View
      style={styles.rightIconRowContainer}>
      {renderSearchIcon()}
    </View>;
  };
  return <View style={[styles.container,containerStyle, showMovieDetailHeader && styles.containerTransparent]}>
    <View style={styles.rowContainer}>
      {renderLeftIcon()}
      {renderTitle()}
      <View style={{ flex: 1 }} />
      {renderRightIcons()}

    </View>
  </View>
};
