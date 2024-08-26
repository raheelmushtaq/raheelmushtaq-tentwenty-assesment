import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
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
    backgroundColor: colors.transparent,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightblue,
  },
  
  primaryButton: {
    backgroundColor: colors.lightblue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightblue,
  },

  leftIcon: {
    tintColor: colors.black,
    height: 12,
    width: 16,
    marginEnd: 10,
    resizeMode:'contain'
  },
  leftIconSecondary: {
    tintColor: colors.white,
  },

});

export default styles;
