import { FlatList, Image, Pressable, Text, View } from "react-native"
import AppBackground, { CustomerLoader } from "../../components/RootView"
import styles from "./styles"
import useController from "./controller"
import NoDataComponent from "../../components/NoDataComponent"
import { colors } from "../../theme/colors"
import FooterLoader from "../../components/FooterLoader"
import MovieBannerComponent from "../../components/MovieBanner"

const HomeScreen = () => {
    const { isLoading, movies, onEndReached, isMoreLoading, onRefresh, isRefreshing, onSeachPressed ,onMovieClicked} = useController()

    const renderMovie = ({ item, index }) => {
        return <MovieBannerComponent key={index} item={item} onPress={()=>{onMovieClicked(item.id)}} />
    }

    const rendetEmptyView = () => {
        if (!isLoading) {
            return (
                <NoDataComponent />
            );
        }
        return null
    }
    const renderSeparateComponent = () => {
        return (
            <View style={{ height: 10 }}></View>
        );
    }

    const listFooterComponent = () => {
        return <FooterLoader loading={isMoreLoading} />
    }

    return (
        <AppBackground 
        hideStatusbar={true}
        showLoaderAsModal={false} 
        showLoader={isLoading && !isMoreLoading && !isRefreshing} 
        showHeader={true} 
        title="Movies" 
        showBackHeader={false} 
        showSearchIcon={true}
        onSearchIconPress={onSeachPressed}
        >
        <View style={styles.container}>
            <FlatList
            // style={styles.container}
               data={movies}
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                ItemSeparatorComponent={renderSeparateComponent}
                ListEmptyComponent={rendetEmptyView}
                renderItem={renderMovie}
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
                ListFooterComponent={listFooterComponent}
            />

        </View>

    </AppBackground>
    )
}

export default HomeScreen