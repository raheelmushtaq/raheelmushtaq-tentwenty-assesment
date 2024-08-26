import { FlatList, Image, View } from "react-native"
import AppBackground from "../../components/RootView"
import useController from "./controller"
import styles from "./styles"
import NoDataComponent from "../../components/NoDataComponent"
import FooterLoader from "../../components/FooterLoader"
import MovieBannerComponent from '../../components/MovieBanner'
import MovieCardItem from "../../components/MovieCardItem"
import SearchBar from "../../components/SearchBarComponent"

const SearchMoviesScreen = () => {
    const { isLoading, movies, onEndReached, isMoreLoading, onRefresh, isRefreshing, searchValue, onSearchTextChange, onMovieClicked, isDataLoaded } = useController()

    const renderMovie = ({ item, index }) => {
        return <MovieCardItem key={index} item={item} onPress={() => {
            onMovieClicked(item.id)
        }} />
    }

    const rendetEmptyView = () => {
        if (!isLoading && !!searchValue && isDataLoaded) {
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
        <AppBackground showLoaderAsModal={false} showHeader={true} title="Search" showBackHeader={true} showSearchIcon={false}>
            <View style={styles.container}>

                <SearchBar
                    placeHolder={"TV shows, movies and more"}
                    containerStyle={styles.searchBarStyle}
                    showClearButton={!!searchValue}
                    value={searchValue}
                    loading={isLoading}
                    onClearText={() => {
                        onSearchTextChange("")
                    }}
                    onChangeText={onSearchTextChange} />
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

export default SearchMoviesScreen