import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    searchBarCard: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        height: 52,
        borderRadius: 30,
        backgroundColor: colors.white
    },
    searchInputContainerStyle: {
        flex: 1,
        marginLeft: 5,
    }, searchInputStyle: {
        height: 50,
        backgroundColor: colors.transparent,
        fontSize: 16,
        color: colors.black,
    },
    searchInputStyleSubContainer: {
        backgroundColor: colors.transparent,
    },
    searchIconStyle: {
        marginLeft: 2,
    },
    searchIcon: {
        width: 15,
        height: 15,
        alignSelf: 'center',
    },
    crossIconStyle: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
    rightContainer: {
        flexDirection: 'row'
    },
    crossIconContainer: {
        alignSelf: 'flex-end',
    },
});

export default styles;
