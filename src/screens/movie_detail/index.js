import { useEffect } from "react"
import { resetAndNavigate } from "../../navigator/navigationUtils"
import { ScreenRoutes } from "../../navigator/ScreenRoutes"
import { Image, Pressable, ScrollView, StatusBar, View, Text } from "react-native"
import AppBackground from "../../components/RootView"
import imageConstants from "../../assets/imageConstants"
import Header from "../../components/Header"
import useController from "./controller"
import ImageComponentLoader, { imageRes } from "../../components/ImageComponentLoader"
import LinearGradient from "react-native-linear-gradient"
import styles from "./styles"
import Button from "../../components/ButtonComponent"
import { colors } from "../../theme/colors"
import GenreCard from "../../components/GenreCard"
import { dateFormates, getFormatedDate } from "../../utils/DateTimeOP"

const MoviesDetailScreen = ({ route }) => {
    const { movieId = "" } = route?.params || {}
    const { isLoading, isRefreshing, movies } = useController(movieId)
    console.log({ movies })

    const { title, poster_path, release_date, genres, overview } = movies || {}
    const renderMovieBannerAndHeading = () => {
        if (!!movies) {
            return <View style={styles.container}>
                <ImageComponentLoader source={poster_path} containerStyle={styles.imageStyle} res={imageRes.original} />

                <LinearGradient style={styles.gradiantStyle}
                    colors={['#00000000', '#000000']}
                >
                    <>
                        <Header
                            showMovieDetailHeader={true}
                            showBackHeader={true} title="Movie Detail"></Header>


                        <View style={styles.titleContainer}>
                            <Text style={styles.titleStyle} >In Theaters {getFormatedDate(release_date, dateFormates.dateFormat1)}</Text>
                            <Button title={"Get Tickets"} containerStyle={{ width: '70%', marginBottom: 20 }} />
                            <Button title={"Watch Trailer"} secondary containerStyle={{ width: '70%' }} icon={imageConstants.play} />
                        </View>
                    </>

                </LinearGradient>


            </View>
        }
        return null
    }

    const generalColor = [colors.green,
    colors.pink,
    colors.purple,
    colors.yellow]
    const renderMovieDetail = () => {
        if (!!movies) {
            return <View style={styles.detailContaine}>
                {genres && <>
                    <Text style={styles.heading}>Genres</Text>
                    <View style={styles.genresContainer}>
                        {!!genres && genres.map((item, index) => {
                            return <GenreCard containerStyle={[styles.heading, { backgroundColor: generalColor[index % generalColor.length] }]} title={item.name} />
                        })}
                    </View>
                </>
                }
                <View style={styles.divider} />

                <>
                    <Text style={styles.heading}>Overview</Text>
                    <Text style={styles.description}>{overview}</Text>

                </>

            </View>
        }
        return null
    }
    return (
        <AppBackground showLoader={isLoading} showLoaderAsModal={true} showHeader={false}>
            <ScrollView style={{ flex: 1 }}>
                {renderMovieBannerAndHeading()}
                {renderMovieDetail()}
            </ScrollView>

        </AppBackground>
    )
}

export default MoviesDetailScreen