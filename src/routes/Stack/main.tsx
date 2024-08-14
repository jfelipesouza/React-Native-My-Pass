import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {HomeScreen} from '../../screens/home';
import {AddPasswordScreen} from '../../screens/AddPassword/Index';

const {Navigator, Screen} = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const MainStack = () => {
  return (
    <Navigator screenOptions={defaultOptions}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="addPass" component={AddPasswordScreen} />
    </Navigator>
  );
};
