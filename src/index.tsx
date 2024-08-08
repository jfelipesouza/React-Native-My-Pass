import React from 'react';
import {MainNavigationContainer} from './routes';
import {StatusBar} from 'react-native';

const MyApp: React.FC = () => {
  return (
    <>
      <MainNavigationContainer />
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
    </>
  );
};

export {MyApp};
