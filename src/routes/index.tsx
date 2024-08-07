import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './Stack/main';

export const MainNavigationContainer = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
