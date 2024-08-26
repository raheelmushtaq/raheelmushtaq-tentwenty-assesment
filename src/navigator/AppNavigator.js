import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigationUtils';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

export const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const routeNameRef = useRef(null);
  const onReady = () =>
    __DEV__
      ? (routeNameRef.current =
          navigationRef.current?.getCurrentRoute?.()?.name)
      : {};

  const onStateChange = state => {
    if (__DEV__) {
      const previousRouteName = routeNameRef.current;
      const {name, params} = navigationRef?.current?.getCurrentRoute?.() || {};

      if (previousRouteName !== name) {
        console.log(
          {
            PreviousScreen: previousRouteName,
            CurrentScreen: name,
            Params: params,
          },
          'NAVIGATION',
        );
      }
      routeNameRef.current = name;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainStack" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
