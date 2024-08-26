import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-native"
import { ApiManager } from "../../network/ApiManager"
import { API_URLS, REQUEST_TYPE } from "../../utils/constants"
import useDebounce from "../../hooks/useDebounce"
import { ScreenRoutes } from "../../navigator/ScreenRoutes"
import { navigateTo } from "../../navigator/navigationUtils"

const useController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isDataLoaded, setisDataLoaded] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const [searchValue, setSearchValue] = useState("")

    const fetchResponse = async () => {
        setIsLoading(true)
        var apiResponse = await ApiManager(API_URLS.search.movie, REQUEST_TYPE.GET, { page: page, query: searchValue })
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
        setisDataLoaded(true)
    }

    useEffect(() => {
        fetchResponse().then();
    }, [page]);

    const debounceCall = useDebounce((value) => {
        if (!!value)
            fetchResponse().then();
        else {
            setMovies([])
            setPage(1)
        }
    }, 700)

    const onEndReached = () => {
        if (!isLoading && page < totalPages) {
            setPage(prevState => prevState + 1);
        };
    }
    const onRefresh = () => {
        if (page == 1) {
            fetchResponse().then()
        }
        else {
            setPage(1)
        }
        setIsRefreshing(true)
    }

    const onSearchTextChange = (text) => {
        setSearchValue(text)
        debounceCall(text)
    }


    const onMovieClicked=(id)=>{
        navigateTo(ScreenRoutes.MOVIES_DETAILS,{movieId: id})
    }
    return { isLoading, movies, onEndReached, isMoreLoading: isLoading && page > 1, onRefresh, isRefreshing, onSearchTextChange, searchValue, onMovieClicked, isDataLoaded }
}

export default useController