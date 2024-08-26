import React from 'react';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigateTo(name, params = {}) {
  navigationRef.current.navigate(name, params);
}

export function replaceWith(name, params = {}){
  navigationRef.current.replace(name, params);
}

export function dispatch(params) {
  navigationRef.current?.dispatch(params);
}

export function goBack(params) {
  navigationRef.current?.goBack?.(params);
}

export const popScreens = (numOfScreens = 1) => {
  navigationRef.current?.pop?.(numOfScreens);
};

export const resetAndNavigate = (screenName, index = 0, params = {}) => {
  dispatch(
    CommonActions.reset({
      index: index,
      routes: [{name: screenName, params}],
    }),
  );
};

export const NavigationService = {
  navigateTo,
  goBack,
  dispatch,
  resetAndNavigate,
  navigateOnAuthBasic: resetAndNavigate,
};
