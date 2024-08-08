import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {HomeScreen} from '../../screens/home';

const {Navigator, Screen} = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

export const MainStack = () => {
  return (
    <Navigator screenOptions={defaultOptions}>
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  );
};
