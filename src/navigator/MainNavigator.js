import * as React from "react";
import { Stack } from "./AppNavigator";
import { ScreenRoutes } from "./ScreenRoutes";
import HomeScreen from "../screens/home";
import MoviesDetailScreen from "../screens/movie_detail";
import SearchMoviesScreen from "../screens/search_movies";

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenRoutes.HOME} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={ScreenRoutes.MOVIES_DETAILS} component={MoviesDetailScreen} />
      <Stack.Screen name={ScreenRoutes.SEARCH_MOVIES} component={SearchMoviesScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
