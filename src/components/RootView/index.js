import React from "react";
import { View, SafeAreaView, ActivityIndicator, Keyboard, TouchableWithoutFeedback, StatusBar, ScrollView } from "react-native";
import styles from "./styles";
import { colors } from "../../theme/colors";
import { isAndroid } from "../../utils/constants";
import { goBack, navigateTo } from "../../navigator/navigationUtils";
import { ScreenRoutes } from "../../navigator/ScreenRoutes";
import Header from "../Header";
import LoaderView from "../Loaders/LoaderView";


export const CustomerLoader = () => {
  return (
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 10,
      backgroundColor: colors.white,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <ActivityIndicator color={colors.blackOverlay} size={"small"} />
    </View>
  );
};
const AppBackground = (
  {
    children,
    showLoader,
    showLoaderAsModal = true,
    showHeader = false,
    title = "",
    onPressLeft = () => goBack(),
    showBackHeader = false,
    showSearchIcon = false,
    onSearchIconPress = () => {
      navigateTo(ScreenRoutes.SEARCH_MOVIES)
    },
    barStyle = 'dark-content',
    background = colors.white, },
) => {

  const renderHeader = () => {
    if (showHeader) {
      return <Header
        showBackButton={false}
        title={title}
        onPressLeft={onPressLeft}
        showSearchIcon={showSearchIcon}
        onSearchIconPress={onSearchIconPress}
        showBackHeader={showBackHeader}
      />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.picture}>
      <StatusBar translucent={true} barStyle={barStyle} backgroundColor={background} />
      {renderHeader()}
      {showLoader && !showLoaderAsModal && <View style={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center", paddingTop: 10,
          }}><CustomerLoader /></View>}
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={true}>
          {children}
      </TouchableWithoutFeedback>
      {showLoader && showLoaderAsModal && <LoaderView loading={showLoader} />}
    </SafeAreaView>
  );
};
export default AppBackground;
