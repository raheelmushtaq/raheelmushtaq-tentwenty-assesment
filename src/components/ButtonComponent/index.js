import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { colors } from "../../theme/colors";

const Button = (
  {
    containerStyle,
    title,
    disabled,
    loading,
    onPress,
    secondary = false,
    titleStyle,
    buttonStyle,
    icon
  }) => {
    
  return (
    <TouchableOpacity activeOpacity={0.8}
                      style={[containerStyle]}
                      disabled={disabled || loading}
                      onPress={onPress}>
      <View
        style={[styles.button,
          styles.default,, secondary ? styles.secondaryButton : styles.primaryButton, buttonStyle]}
      >
        {icon && <Image source={icon} style={[styles.leftIcon, secondary && styles.leftIconSecondary]}></Image>}
        <Text
          style={[{
            fontSize: 16,
            lineHeight: 24,
          }, titleStyle, { color: secondary ? colors.white : colors.white }]}
        >
          {title}

        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
