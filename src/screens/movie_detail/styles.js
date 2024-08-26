import {StyleSheet} from 'react-native';
import { colors } from '../../theme/colors';
const styles = StyleSheet.create({
  picture: {
    flex: 1,
    backgroundColor: colors.app_background,
  },

  container: {
    flex:1,
    height: 450,
    backgroundColor: colors.white,
  },
  imageStyle:[StyleSheet.absoluteFill, {
}],
gradiantStyle:{
  position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
  width: '100%', height: '100%'
},
titleStyle:{fontSize: 16, fontWeight:'bold', marginBottom: 20, color: colors.white},
detailContaine:{padding: 20},
heading: {fontSize: 16, fontWeight:'500', marginBottom: 10, color: colors.black, lineHeight: 20
},

description: {fontSize: 12, lineHeight: 19.2, marginBottom: 10, color: '#8F8F8F'} ,
genresContainer:{ marginTop: 5, flexDirection: 'row', flexWrap: 'wrap' },
divider: { height: 1, backgroundColor: colors.darkgray, marginVertical: 10 },
titleContainer: {
  padding: 20,
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1
}
});
export default styles;
