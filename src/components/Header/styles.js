import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { isAndroid } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: isAndroid? 20: 10,
    paddingVertical: 10,
  },
  containerTransparent: {
    backgroundColor: colors.transparent,
  },
  rowContainer: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightIconRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightIconImage: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    tintColor: colors.black,
  },
  rightIconImageWhite:{
    tintColor: colors.white
  },
  rightIconButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 32,
    width: 32,
  },
  logoImageContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    color: colors.black,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  backButtonTextWhite: {
    color: colors.white,
  },
  bacButtonImage: {
    height: 24,
    width: 24,
    tintColor: colors.black,
    marginRight: 20,
  },
  bacButtonImageWhite: {
    tintColor: colors.white,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: "700",
  },
  titleWhite: {
    color: colors.white,
  },

});

export default styles;
