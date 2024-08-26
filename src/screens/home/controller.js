import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-native"
import { ApiManager } from "../../network/ApiManager"
import { API_URLS, REQUEST_TYPE } from "../../utils/constants"
import { navigateTo } from "../../navigator/navigationUtils"
import { ScreenRoutes } from "../../navigator/ScreenRoutes"

const useController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const fetchResponse = async () => {
        setIsLoading(true)
        var apiResponse = await ApiManager(API_URLS.movies.upcomming, REQUEST_TYPE.GET, { page: page })
        if (apiResponse.error) {
            Alert.alert("Error", apiResponse.message)
        }
        else {
            console.log(page)
            if (page === 1) {
                setTotalPages(apiResponse.data.total_pages)
                setMovies([...apiResponse.data.results])
            }
            else {
                setTotalPages(apiResponse.data.total_pages)
                setMovies([...movies, ...apiResponse.data.results])
            }

        }
        setIsLoading(false)
        setIsRefreshing(false)
    }

    useEffect(() => {
        fetchResponse().then();
    }, [page]);



    const onEndReached = () => {
        if (!isLoading && page < totalPages) {
            setPage(prevState => prevState + 1);
        };
    }
    const onRefresh = () => {
        if(page == 1){
            fetchResponse().then()
        }
        else{
        setPage(1)
        }
        setIsRefreshing(true)
    }
    const onSeachPressed=()=>{
        navigateTo(ScreenRoutes.SEARCH_MOVIES)
    }

    const onMovieClicked=(id)=>{
        navigateTo(ScreenRoutes.MOVIES_DETAILS,{movieId: id})
    }

    return { isLoading, movies, onEndReached, isMoreLoading: isLoading && page > 1, onRefresh, isRefreshing, onSeachPressed,onMovieClicked}
}

export default useController