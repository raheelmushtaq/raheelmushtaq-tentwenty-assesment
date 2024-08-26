import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import FullWrapperLoader from "./FullWrapperLoader";
import imageConstants from '../../assets/imageConstants';

export const imageRes = {
    low: "w185",
    original : 'original'
}
const ImageComponentLoader = (
    {

        containerStyle,
        source,
        res = imageRes.low
    }
) => {
    const [isImageLoad, setIsImageLoad] = useState(false)
    const getSourceImage = () => {
        let uri = {}
        if (source.startsWith("https://") || source.startsWith("http://")) {
            uri = { uri: source }
        } else {
            const url = "http://image.tmdb.org/t/p/"+res + source
            uri = { uri: url }
        }
        return uri
    }
    return (
        <View style={containerStyle}>
            <FastImage
                onLoadStart={() => setIsImageLoad(true)}
                onLoadEnd={() => setIsImageLoad(false)}
                resizeMode={'cover'}
                style={[styles.image, containerStyle]}
                source={source ? getSourceImage() : imageConstants.placeholder}
                defaultSource={imageConstants.placeholder}
            />
            <FullWrapperLoader loading={isImageLoad} color={colors.lightblue} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        ...StyleSheet.absoluteFillObject,
        // width: SCREEN_WIDTH,
        // aspectRatio: 4 / 3,
        // zIndex: -1,
    }
})
export default ImageComponentLoader;
