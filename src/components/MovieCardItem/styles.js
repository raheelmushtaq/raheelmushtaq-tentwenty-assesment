import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { isAndroid } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems:'center',
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginHorizontal: 10
  },
  imageStyle: { height: 80, width: 110, borderRadius: 10 },
  textContainer:{marginStart: 10, justifyContent:"center", flex:1,},
  titleStyle: { color: colors.black, fontWeight:'bold', fontSize: 16 },
  genreStyle: { color: colors.lightgrey, fontSize: 12 }

});

export default styles;
