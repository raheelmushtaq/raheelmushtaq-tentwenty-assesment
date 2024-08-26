import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-native"
import { ApiManager } from "../../network/ApiManager"
import { API_URLS, REQUEST_TYPE } from "../../utils/constants"

const useController = (id="") => {
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [movies, setMovies] = useState(null)
    
    const fetchResponse = async () => {
        setIsLoading(true)
        var apiResponse = await ApiManager(API_URLS.movies.detail.replace("{id}", id), REQUEST_TYPE.GET, {})
        if (apiResponse.error) {
            Alert.alert("Error", apiResponse.message)
        }
        else {
            setMovies(apiResponse.data)
        }
        setIsLoading(false)
        setIsRefreshing(false)
    }

    useEffect(() => {
        fetchResponse().then();
    }, []);

    const onRefresh = () => {
        if (page == 1) {
            fetchResponse().then()
        }
        else {
            setPage(1)
        }
        setIsRefreshing(true)
    }

    return { isLoading, movies,  onRefresh, isRefreshing }
}

export default useController