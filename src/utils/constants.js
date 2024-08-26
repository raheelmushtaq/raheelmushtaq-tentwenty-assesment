import { Platform } from "react-native"

export const API_URLS={
    baseUrl:"https://api.themoviedb.org/3/",
    movies: {
        upcomming:"movie/upcoming",
        detail: "movie/{id}"
    },
    search:{
        movie: "search/movie"

    }
}

export const REQUEST_TYPE={
    POST: "post",
    GET:"get"
}

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'