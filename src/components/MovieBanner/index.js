import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import styles from "./styles"
import LinearGradient from "react-native-linear-gradient"
import { colors } from "../../theme/colors"
import { memo } from "react"
import ImageComponentLoader from "../ImageComponentLoader"

const MovieBannerComponent = ({ item, onPress }) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <ImageComponentLoader source={item.poster_path} containerStyle={styles.imageStyle} />

            <LinearGradient style={styles.gradiantStyle}
                colors={['#00000000', '#000000']}
            >

                <Text style={styles.titleStyle}>{item.title}</Text>
            </LinearGradient>
        </Pressable>
    )

}

export default memo(MovieBannerComponent)