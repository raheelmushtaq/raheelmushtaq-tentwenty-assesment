import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { isAndroid } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 10,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: colors.white,
  },
  imageStyle:[StyleSheet.absoluteFill, {
    borderRadius: 10,
}],
gradiantStyle:{
  padding: 20,
  borderRadius: 10,
  position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
  width: '100%', height: '100%'
  , justifyContent: 'flex-end'
},
titleStyle:{ color: colors.white, fontSize: 20 }

});

export default styles;
