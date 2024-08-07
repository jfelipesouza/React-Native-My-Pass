import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../../screens/home';

const {Navigator, Screen} = createStackNavigator();

export const MainStack = () => {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  );
};
