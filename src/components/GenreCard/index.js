import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { isIOS } from "../../utils/constants";

const GenreCard = (
  {
    title,
    textStyle,
    containerStyle,
  }) => {
  

return <>
    <View
        style={[
          styles.button,
          styles.default, 
          containerStyle]}
      >
        <Text
          numberOfLines={1}
          style={[{
            fontSize: isIOS? 12: 14,
          }, textStyle, { color: colors.white }]}
        >
          {title}

        </Text>
      </View>
  </>;


};
export default GenreCard;


export const styles = StyleSheet.create({

  row: {
    flexDirection: "row",
  },
  uploadImageItemCrossSize: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  equipmentItemCrossContainer: { position: "absolute", top: -3, right: 3 },

  button: {
    flexDirection: "row",
  },
  default: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 15,
  },
  loader: {
    height: 25,
    width: 25,
    alignSelf: "center",
  },
  secondaryButton: {
    backgroundColor: colors.lightblue,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: colors.lightblue,
    borderRadius: 10,
  },

});
