import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import styles from "./styles"
import LinearGradient from "react-native-linear-gradient"
import { colors } from "../../theme/colors"
import { memo } from "react"
import ImageComponentLoader from "../ImageComponentLoader"

const MovieCardItem = ({ item, onPress }) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <ImageComponentLoader source={item.poster_path} containerStyle={styles.imageStyle} />
            <View style={styles.textContainer}>
                <Text style={[styles.titleStyle, { marginBottom: 10 }]}>{item.title}</Text>
                <Text style={styles.genreStyle}>{item.genre}</Text>
            </View>
        </Pressable>
    )

}

export default memo(MovieCardItem)